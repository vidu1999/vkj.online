<?php
if(isset($_POST['send'])){
    $firstname=$_POST['firstname'];
    $lastname=$_POST['lastname'];
    $tel=$_POST['tel'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $toEmail='vkj199999@gmail.com';

    $sendMail="NAME: ".$firstname." ".$lastname."\r\n EMAIL: ".$email."\r\n TELEPHONE: ".$tel."\r\n MESSAGE: ".$message;
    $headers = 'From: ' . $email . "\r\n";
    if(mail($toEmail,$firstname,$sendMail,$headers)){
      $alert="YOUR INFORMATION IS SUCCSSUSFULY SEND";

    }
    else{
        echo "<h1>Something wento the wrong</h1>";
    }
}

?>