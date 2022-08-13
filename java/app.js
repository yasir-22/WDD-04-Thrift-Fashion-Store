var usernameEl = document.getElementById('username');
var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
var confirmPasswordEl = document.getElementById('confirm-password');

var form = document.getElementById('signup');

var showError = function(input, message) {
    //get the form-field element
    var formField = input.parentElement;
    //add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    var error = formField.querySelector('small');
    error.textContent = message;
};
var showSuccess = function(input){
    // get the form-field element
    var formField = input.parentElement;

    //remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    var error = formField.querySelector('small');
    error.textContent = ' ';
};
var isEmailValid = function(email) {
    var re = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return re.test(email);
};
var isPasswordSecure = function(password) {
    var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
var isRequired = function(value) {
    if (value === ' ')
    return false;
 else
    return true;
};
var isBetween = function(length, min , max) {
    if(length < min || length > max)
    return false;
else
    return true;
};
var checkUsername = function() {
    var valid = false;
    var min = 3,
     max = 25;

    var username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl,'Username cannot be black.');
} else if (!isBetween(username.length, min, max)) {
    showError(usernameEl,'Username must be between 3 and 25 characters.')   
} else {
    showSuccess(usernameEl);
    valid = true;   
}
  return valid;
};

var checkEmail = function() {
    var valid = false;

    var email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl,'Email cannot be blank.');
} else if (!isEmailValid(email)) {
    showError(emailEl,'Email is not valid.')   
} else {
    showSuccess(emailEl);
    valid = true;   
}
  return valid;
};
var checkPassword = function() {
    var valid = false;
    var password = passwordEl.value.trim();
    if (!isRequired(password)) {
        showError(passwordEl,'Password cannot be blank.');      
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl,'Password must at least 8 characters that inculde at least 1 lowercase characher,1uppercase')
    } else {
          showSuccess(passwordEl);
          valid = true;
    }
    return valid;
};


var checkConfirmPassword = function () {
    var valid = false;
    //check confirm password
    var ConfirmPassword = confirmPasswordEl.value.trim();
    var password = passwordEl.value.trim();

    if (!isRequired(ConfirmPassword)) {
        showError(confirmPasswordEl,'please enter the password again');
    } else if (password !== ConfirmPassword) {
        showError(confirmPasswordEl,'The password does not match');          
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
};
form.addEventListener('submit', function (e) {
    // prevent the from from submitting
    e.preventDefault();
    // validate forms
    var isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordvalid = checkConfirmPassword();
var isformValid = isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordvalid;
    //submint to the server if the form is valid
    if (isformValid) {
        alert ('You have successfully submitted the form!');
    }
});
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
        //setup a new timer
        timeoutId = setTimeout ( () => {
            fn.apply(null, args) 
        } , delay)
    };
};

form.addEventListener('input' , debounce (function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
            case 'email':
                checkEmail();
                break;
                case 'password':
                    checkPassword();
                    break;
                    case 'confirm-password':
                        checkConfirmPassword();
                        break;
    }
}));







    

