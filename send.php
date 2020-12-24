<?php
$message = '<p>Имя: '.$_POST['clientName'].'</p><p>Номер телефона: '.$_POST['clientTel'].'</p>';

require_once('./assets/PHPMailer/PHPMailer.php');
require_once('./assets/PHPMailer/Exception.php');
require_once('./assets/PHPMailer/SMTP.php');

$mail = new PHPMailer\PHPMailer\PHPMailer();
  $mail->SMTPDebug = 4;
  $mail->isSMTP();
  $mail->Host = '*';
  $mail->SMTPAuth = true;
  $mail->Username = '*';
  $mail->Password = '*';
  $mail->Port = 465;
  $mail->SMTPSecure = 'ssl';
  $mail->CharSet = 'UTF-8';
  $mail->setFrom('*');
  $mail->addAddress('*');
  $mail->isHTML(true);
  $mail->Subject = 'Заявка с сайта';
  $mail->Body = $message;
  $mail->send();
?>