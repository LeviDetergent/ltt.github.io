<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);
    $file = $_FILES["attachment"];

    // Check if all fields are filled
    if (empty($name) || empty($email) || empty($phone) || empty($message) || empty($file["name"])) {
        echo "All fields are required.";
        exit;
    }

    // Check if the file is valid
    if (!is_uploaded_file($file["tmp_name"]) || $file["error"] !== UPLOAD_ERR_OK) {
        echo "Invalid file.";
        exit;
    }

    // Set the email recipient and subject
    $to = "sales@lt-engineering.com";
    $subject = "New Quote Request";

    // Set the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary\"\r\n";

    // Set the email body
    $body = "--boundary\r\n";
    $body .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= "Name: $name\r\nEmail: $email\r\nPhone: $phone\r\nMessage: $message\r\n\r\n";
    $body .= "--boundary\r\n";
    $body .= "Content-Type: application/octet-stream; name=\"" . basename($file["name"]) . "\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment\r\n\r\n";
    $body .= chunk_split(base64_encode(file_get_contents($file["tmp_name"]))) . "\r\n";
    $body .= "--boundary--";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Redirect to thank you page
        header("Location: thank-you.html");
        exit;
    } else {
        echo "There was a problem sending your quote request. Please try again later.";
    }
}
?>