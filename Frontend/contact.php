<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $recaptchaSecret = '6Le_3lErAAAAAAhSN_9ourJEWztlSNqzVO7otWTy';
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $verifyResponse = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaResponse}"
    );

    $responseData = json_decode($verifyResponse);

    file_put_contents(
    'recaptcha_logs.txt',
    "[" . date('Y-m-d H:i:s') . "] Score: {$responseData->score}, IP: {$_SERVER['REMOTE_ADDR']}\n",
    FILE_APPEND
);

    if (!$responseData->success || $responseData->score < 0.5) {
    mail(
        'choicedevinfo@gmail.com',
        'Bot Attempt Detected',
        "A suspicious request was detected.\nIP: {$_SERVER['REMOTE_ADDR']}\nScore: {$responseData->score}"
    );
    header("Location: contact.html?status=bot");
    exit;
}

    $name = htmlspecialchars($_POST['name']);
    $number = htmlspecialchars($_POST['number']);
    $company = htmlspecialchars($_POST['company']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    require_once './vendor/autoload.php'; 
    $mail = new PHPMailer(true); 
    try {
        $mail->isSMTP();  
        $mail->Host = 'smtp.gmail.com'; 
        $mail->SMTPAuth = true;  
        $mail->Port = 587;  
        $mail->Username = 'choicedevinfo@gmail.com';  
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Password = 'ehangsxysryxueid';  
        $mail->setFrom($email, $name);  
        $mail->addAddress('info@choicedev.com.au', 'Recipient Name');
        $mail->addReplyTo($email, $name);
        $mail->Subject = $subject;
        $mail->isHTML(true);
        $mail->Body = "
            <html>
            <body>
            <p><strong>Full Name:</strong> $name</p>
            <p><strong>Contact Number:</strong> $number</p>
            <p><strong>Company Name:</strong> $company</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong><br>$message</p>
            </body>
            </html>";
        $mail->AltBody = 'Contact Details: ' . $message;
        if ($mail->send()) {
            header("Location: contact.html?status=success");
            exit;
        } else {
            header("Location: contact.html?status=error");
            exit;
        }
    } catch (Exception $e) {
        header("Location: index.html");
    }
}
?>
