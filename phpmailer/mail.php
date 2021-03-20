<?php 
 

$time       = $_POST['time'];
$work       = $_POST['work'];
$fname      = $_POST['fname'];
$lname      = $_POST['lname'];
$email      = $_POST['email'];
$number     = $_POST['number'];
$checkit    = $_POST['checkit'];

$sub    = "Hellow world";
$result = "";
$error  = "";



require 'PHPMailerAutoload.php';
$mail = new PHPMailer;
//smtp settings
$mail->isSMTP(); // send as HTML
$mail->Host = "smtp.gmail.com"; // SMTP servers
$mail->SMTPAuth = true; // turn on SMTP authentication
$mail->Username = "ajnasim72@gmail.com"; // Your mail
$mail->Password = 'Ajnasim016'; // Your password mail
$mail->Port = 587; //specify SMTP Port
$mail->SMTPSecure = 'tls';
$mail->setFrom($time,$work,$fname,$lname,$email,$number,$checkit);
$mail->addAddress('ajnasim72@gmail.com');
$mail->addReplyTo($time,$work,$fname,$lname,$email,$number,$checkit);
$mail->isHTML(true);
$mail->Subject='Form :' .$sub;
$mail->Body='<h3>time :'.$time.'<br> work: '.$work.'<br>fname: '.$fname.'<br>lname: '.$lname.'<br>email: '.$email.'<br>number: '.$number.'<br>checkit: '.$checkit.'</h3>';
if(!$mail->send())
{
    $error = "Something went worng. Please try again.";
}
else 
{
    $result="Thank you for contacting us.";
}
 
echo $result."".$error;


 
?>