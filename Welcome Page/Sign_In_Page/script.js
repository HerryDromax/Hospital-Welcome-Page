// Basic form submission logic
document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Collect form data
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // Perform further validation or form submission here
    alert(`Phone: ${phone}\nPassword: ${password}`);
});
