// validate the login form
function validateform(){
    var username = document.getElementById('username').value;
    var pass = document.getElementById('login_password').value;

    if (username == null || username == ""){
        alert("Please enter your username!!");
        return false;
    }
    else if(pass == null || pass == ""){
        alert("Please enter your password!!");
        return false;
    }
    else if(pass.length < 6){
        alert("Your password should be at least 6 characters long");
        return false;
    }
    else{
        if(username == "googlehome" && pass == "google"){
            alert("Login successful");
            return true;
            
        }
        else{
            alert("Login Unsuccessful \n Account not registered to the database");
            return false;
        }   
        
    }
}
function validateForm(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password_1 = document.getElementById('password_1').value;
    var password_2 = document.getElementById('password_2').value;

    if (username == null || username == "") {
        alert("Please enter your username!!");
        return false;
    }
    else if (email == null || email == "") {
        alert("Please enter your email address!!");
        return false;
    }
    else if (password_1 == null || password_1 == "") {
        alert("Please enter your password!!");
        return false;
    }
    else if (password_1.length < 6) {
        alert("Your password should be at least 6 characters long");
        return false;
    }
    else if(password_1 != password_2){
        alert("The passwords do not match");
        return false;
    }
    else{
        alert("Successful Registration!!");
    }
}

    


















// keep label at the top
const myInput = document.querySelectorAll('.form-control');
for (let i = 0; i < myInput.length; i++) {
    myInput[i].addEventListener('keyup', function () {
        (myInput[i].value !== '') ? myInput[i].nextElementSibling.className += ' ' + 'label-top' : myInput[i].nextElementSibling.className = 'label';
    })
};