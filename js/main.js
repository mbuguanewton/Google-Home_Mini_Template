import config from "./config";

//var config = require('./config');

// Initialize Firebase
firebase.initializeApp(config);

// reference messages 
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
    e.preventDefault();

    // get all the values
    var name = getInputVal('name')
    var email = getInputVal('email')
    var message = getInputVal('message')

 // save message
    saveMessage(name, email, message);

//show alert
document.querySelector('.alert_2').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert_2').style.display = 'none';
},3000);

// clear class
document.getElementById('contactForm').reset();

}

// function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//function to save message to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}
// reference messages 

var subscriptionRef = firebase.database().ref('subscription');

// Listen for form submit
document.getElementById('subscribeForm').addEventListener('submit', subscribe);

//submit form
function subscribe(e) {
    e.preventDefault();

    // get all the values
    var email = getInputVal('contact-email')

 // save message
    saveSubscription(email);

//show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);

// clear class
    document.getElementById('subscribeForm').reset();

}

// function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//function to save message to firebase
function saveSubscription(email){
    var newSubscriptionRef = subscriptionRef.push();
    newSubscriptionRef.set({
        email: email
    });
}

// form validation
function validate_form(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('contact_email').value;
    var email = document.getElementById('email').value;

    if (name == null || name == "") {
        alert("Please enter your name!!");
        return false;
    }
    else if (email == null || email == "") {
        alert("Please enter your email!!");
        return false;
    }
    else{
        return true;
    }
}

// changing the navbar color after a certain height

// window.addEventListener('scroll', function () {
//     console.log(window.scrollY);
//     if (window.scrollY >= 675) {
//         document.getElementById('my_navbar').style.backgroundColor = "#fff";
//         document.getElementById('navbar-brand').style.color = "#222";
//     }
//     else {
//         document.getElementById('my_navbar').style.backgroundColor = "#333";
//         document.getElementById('navbar-brand').style.color = "#f2f2f2";
//     }
// });
// end of changing the navbar color


// keeping the labels up after focus
document.addEventListener('change', ()=>{
    const myInput = document.querySelectorAll('.form_control');
    for (let i = 0; i < myInput.length; i++) {
            (myInput[i].value !== '') ? myInput[i].nextElementSibling.className ='label-top' : myInput[i].nextElementSibling.className = 'label';
    };

});
// end of keeping labels top after focus

// enable pop up after click on user
document.getElementById('user').addEventListener('click', function () {
    var popup = document.getElementById('popup');
    // if(popup.style.display == 'none'){
    //  popup.style.display = 'block';
    // }else{
    //     popup.style.display = 'none';
    // }
    (popup.style.display == 'none') ? popup.style.display = 'block' : popup.style.display = 'none';

});
//end of pop up 

// animation using scroll reveal js
window.sr = ScrollReveal();
    sr.reveal('.navbar', {
        duration: 500,
        origin: 'top'
    });
    sr.reveal('#showcase .showcase-left', {
        duration: 2000,
        origin: 'top',
        distance: '350px'
    });
    sr.reveal('#showcase-1 .showcase-left', {
        duration: 2000,
        origin: 'left',
        distance: '50px'
    });
    sr.reveal('#showcase-1 .showcase-right', {
            duration: 2000,
            origin: 'right',
            distance: '50px'
        });
    sr.reveal('#showcase-2 .showcase-right', {
            duration: 2000,
            origin: 'left',
            distance: '200px'
        });
    sr.reveal('#showcase-2 .showcase-left', {
            duration: 2000,
            origin: 'right',
            distance: '200px'
        });
    sr.reveal('#showcase-3 .showcase-right', {
        duration: 2000,
        origin: 'top',
        distance: '200px'
    });
    sr.reveal('#showcase-3 .showcase-left', {
        duration: 2000,
        origin: 'bottom',
        distance: '200px'
    });
    sr.reveal('#testimonial .testimonial', {
        duration: 2000,
        origin: 'top',
    });
    sr.reveal('#footer .text-center', {
        duration: 2000,
        origin: 'left',
        distance: '200px'
    });
    sr.reveal('#footer .nav', {
        duration: 2000,
        origin: 'right'
    });

//end of animation using scroll reveal


// smooth scrolling using jquery

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


//end of smooth scrolling using jquery

// button in showcase//


