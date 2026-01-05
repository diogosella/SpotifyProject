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

    if (passwordHidden === true) {
        password.textContent = secretPassword;
        passwordHidden = false;
        
    } else {
        password.textContent = userPassword;
        passwordHidden = true;
    }
})