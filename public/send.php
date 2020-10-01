<?php
​
    $json = file_get_contents('php://input');
​
    $data = json_decode($json, true);
​
    $to      = 'is@appercut.eu';
    $subject = 'Application from appercut';
    $message = 'E-mail: ' . $data['email'] . "\r\n" .
    'Name: ' . $data['name'] . "\r\n" .
    'Message: ' . $data['comment'];
    $headers = 'From: ' .  $data['email']  . "\r\n" .
    'Reply-To: ' . $data['email'] . "\r\n";
    mail($to, $subject, $message, $headers);
    echo "ok";
​
?>