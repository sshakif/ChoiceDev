<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

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
        $mail->addAddress('choicedevinfo@gmail.com', 'Recipient Name');
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
