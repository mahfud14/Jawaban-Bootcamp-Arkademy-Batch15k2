function formValidation() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
}

if (lengthDefine(username, 6, 9)) {
    if (lengthDefine(password, 8)) {
        {
            return true;
        }
    }
    return false;
}

// Function untuk check huruf kecil di username
function inputAlphabet(inputtext, alertMsg) {
    var alphaExp = [a - z];
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('username').innerText = alertMsg; // This segment displays the validation rule for name.
        //alert(alertMsg);
        inputtext.focus();
        return false;
    }
}

// Function untuk check password
function textAlphanumeric(inputtext, alertMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('password').innerText = alertMsg; // This segment displays the validation rule for address.
        inputtext.focus();
        return false;
    }
}