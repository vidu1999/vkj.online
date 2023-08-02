<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure you have PHPMailer installed via composer

if (isset($_POST['send'])) {
    // ... your existing code to get form data
    $firstname=$_POST['firstname'];
    $lastname=$_POST['lastname'];
    $tel=$_POST['tel'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $toEmail = 'vkj199999@gmail.com';
    $sendMail = "NAME: " . $firstname . " " . $lastname . "\r\nEMAIL: " . $email . "\r\nTELEPHONE: " . $tel . "\r\nMESSAGE: " . $message;

    // PHPMailer configuration
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your_gmail_username@gmail.com'; // Your Gmail username
    $mail->Password = 'your_gmail_password'; // Your Gmail password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($email, $firstname);
    $mail->addAddress($toEmail);
    $mail->Subject = $firstname;
    $mail->Body = $sendMail;

    try {
        $mail->send();
        $alert = "YOUR INFORMATION IS SUCCESSFULLY SENT";
        echo "<h1>$alert</h1>";
    } catch (Exception $e) {
        echo "<h1>Something went wrong: {$mail->ErrorInfo}</h1>";
    }
}
?>
