let passwordInputField = document.getElementById('password');
let confirmPasswordInputField = document.getElementById('confirm');
let confirmError = document.getElementById('confirmError');
let passwordError = document.getElementById('passwordError');

confirmPasswordInputField.addEventListener('keyup', () => { 
    if (passwordInputField.value == confirmPasswordInputField.value) {
        confirmPasswordInputField.setCustomValidity("");
        confirmError.innerText = '';
    } else if (confirmPasswordInputField.value == "") { 
        confirmError.innerText = '';
    } else { 
        confirmPasswordInputField.setCustomValidity("Invalid field.");
        confirmError.innerText = "Passwords dosn't match";
    }
})

passwordInputField.addEventListener('keyup', () => { 
    if (passwordInputField.checkValidity()) {
        passwordError.innerText = '';
    } else if (passwordInputField.value == '') {
        passwordError.innerText = '';
    }  
    else { 
        passwordError.innerText = 'Password needs to contain at least:\n8 symbols, 1 capital letter and 1 digit';
    }
})
