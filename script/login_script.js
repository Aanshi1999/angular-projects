document.getElementById("myButton").onclick = function () {
    location.href = "singup.html";
};

// fetch Api 

var uemail = document.getElementById('form2Example11').value
var pass = document.getElementById('form2Example22').value

function postData() {
    URL = 'http://localhost:8080/login/{email}/{password}';
    dta = '	{"email":uemail,"password":pass}'
    params = {
        method: 'post',
        Headers: {
            'Contant-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(Response => Response.json())
        .then((data) => {
            console.log(data);
        })

};