document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the submit button
    document.getElementById("submitButton").addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Show the loader
        document.getElementById("submit-loader").style.display = "block";

        // Collect the form data
        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const subject = document.getElementById("contactSubject").value;
        const message = document.getElementById("contactMessage").value;

        // Simple validation for required fields
        if (!name || !email || !message) {
            document.getElementById("formResponse").innerHTML = "Please fill in all required fields.";
            document.getElementById("submit-loader").style.display = "none";
            return;
        }

        // Prepare the data for sending using FormData
        const formData = new FormData();
        formData.append("contactName", name);
        formData.append("contactEmail", email);
        formData.append("contactSubject", subject);
        formData.append("contactMessage", message);

        // Create a new AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "send_email.php", true);

        // Handle the response from the server
        xhr.onload = function() {
            // Hide the loader
            document.getElementById("submit-loader").style.display = "none";

            if (xhr.status === 200) {
                // Show success message
                document.getElementById("formResponse").innerHTML = "Thank you! Your message has been sent.";
            } else {
                // Show error message
                document.getElementById("formResponse").innerHTML = "Oops! Something went wrong. Please try again.";
            }
        };

        // Send the form data to the server
        xhr.send(formData);
    });
});
