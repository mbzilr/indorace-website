<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $infoSource = $_POST["infoSource"];
    $subjectText = $_POST["subjectText"];
    $message = $_POST["message"];

    $to = "info@indorace.com";
    $subject = "$subjectText || Message from website.";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "<p><b>Name:</b> $name</p>
             <p><b>Email:</b> $email</p>
             <p><b>How they found you:</b> $infoSource</p>
             <p><b>$subjectText </b></p>
             <p><b>Message:</b> $message</p>";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.history.back();</script>";
        header("Location: ", $_SERVER['HTTP_REFERER'] . "?status=Success");
    } else {
        echo "<script>alert('Failed to send message. Please try again.'); window.history.back();</script>";
        exit();
    }
} else {
    echo json_encode(["error" => "Invalid request method"]);
}
?>
