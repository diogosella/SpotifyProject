const passwordButton = document.getElementById("visible-password");
const password = document.getElementById("password");

let userPassword = password.textContent;
let passwordHidden = true;

let secretPassword = '';
for (let i = 0; i < userPassword.length; i++) {
    secretPassword += "*";
}
password.textContent = secretPassword;
passwordButton.addEventListener('click', function() {

    if (passwordHidden === false) {
        password.textContent = secretPassword;
        passwordHidden = true;
        
    } else {
        passwordHidden = false;
        password.textContent = userPassword;
    }
})