// Basic form submission logic
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Collect form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // Perform further validation or form submission here
    alert(`Name: ${name}\nAge: ${age}\nGender: ${gender}\nPhone: ${phone}\nPassword: ${password}`);
});
