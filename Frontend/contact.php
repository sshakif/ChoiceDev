<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // reCAPTCHA verification
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

    // if (!$responseData->success || $responseData->score < 0.5) {
    //     header("Location: contact.html?status=bot");
    //     exit;
    // }

    if (!$responseData->success || $responseData->score < 0.5) {
    mail(
        'mharif0027@gmail.com',
        'Bot Attempt Detected',
        "A suspicious request was detected.\nIP: {$_SERVER['REMOTE_ADDR']}\nScore: {$responseData->score}"
    );
    header("Location: contact.html?status=bot");
    exit;
}

    // Sanitize user input
    $name     = htmlspecialchars(trim($_POST['name']));
    $number   = htmlspecialchars(trim($_POST['number']));
    $company  = htmlspecialchars(trim($_POST['company']));
    $email    = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject  = htmlspecialchars(trim($_POST['subject']));
    $message  = nl2br(htmlspecialchars(trim($_POST['message'])));

    require './vendor/autoload.php';

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'hybritechinnovationsltd@gmail.com';
        $mail->Password   = 'gizflulxmzwywrpd'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Email headers and body
        $mail->setFrom($email, $name);
        $mail->addAddress('mharif0027@gmail.com', 'ChoiceDev Admin');
        $mail->addReplyTo($email, $name);
        $mail->Subject = $subject;
        $mail->isHTML(true);
        $mail->Body = "
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Company:</strong> {$company}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$number}</p>
            <p><strong>Message:</strong><br>{$message}</p>
        ";
        $mail->AltBody = "Name: {$name}\nCompany: {$company}\nEmail: {$email}\nPhone: {$number}\n\nMessage:\n{$message}";

        $mail->send();
        header("Location: contact.html?status=success");
        exit;
    } catch (Exception $e) {
        header("Location: contact.html?status=error");
        exit;
    }
}
?>
