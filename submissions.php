<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    // Check if all fields are filled
    if(empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    // Build the email message
    $to = "datboomlife@gmail.com";
    $subject = "New Quote Request";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    // Send the email
    if(mail($to, $subject, $body)) {
        echo "Thank you for your quote request. We will get back to you as soon as possible.";
    } else {
        echo "There was a problem sending your quote request. Please try again later.";
    }
}
?>
