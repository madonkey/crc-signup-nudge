$(document).ready(function () {
    $("#close-message").click(function () {
        $("#email-nudge-container").fadeOut(100);
        $("#email-nudge-container").delay(3000);
        $("#email-nudge-container").fadeIn(100);
    });
});