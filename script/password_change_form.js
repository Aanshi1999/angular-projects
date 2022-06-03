// SignIn Page ---------------------------------------------------
var password = document.getElementById('password');
var flag = 1;
function check(elem) {
    debugger;
    if (elem.value.length > 0) {
        if (elem.value != password.value) {
            document.getElementById('alert').innerHTML = "confirm password does not match";
            flag = 0;
        } else {
            document.getElementById('alert').innerHTML = "";
            flag = 1;
        }
    } else {
        document.getElementById('alert').innerHTML = "Pless Enter Your confirm password";
        flag = 0;
    }

}

function validate() {
    if (flag == 1) {
        alert("Your password has been changed successfully. please Sign in to continue")
        return true;
    } else {
        return false;
    }
}
//  Caplock 
window.addEventListener('keyup', event => {
    var isCaps = event.getModifierState('CapsLock');
    if (isCaps) {
        document.getElementById('alertcap').innerText = "Warning! caps lock is on"
    } else {
        document.getElementById('alertcap').innerText = "";
    }
});

// White-Space
var patten = /\s/g;
function white(data) {
    var isSpace = patten.test(data);
    var alert = document.getElementById('alertspace')
    if (isSpace) {
        alert.innerText = "space is not allowed";
    } else {
        alert.innerText = "";
    }
}




