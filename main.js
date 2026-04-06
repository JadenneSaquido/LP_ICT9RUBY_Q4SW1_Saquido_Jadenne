const loginForm = document.getElementById('loginForm');
const cancelBtn = document.getElementById('cancelBtn');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('uname').value;
    const password = document.getElementById('pword').value;

    if (username === "sampleuser67" && password === "12345678") {
        alert("Welcome, " + username + "!");
    } else {
        alert("Incorrect username and/or password.");
    }
});

cancelBtn.addEventListener('click', function() {
    document.getElementById('uname').value = '';
    document.getElementById('pword').value = '';
});