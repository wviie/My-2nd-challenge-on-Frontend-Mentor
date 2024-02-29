const SINGUP_CARD = document.getElementById('subscription-card');
const SUCCESSFUL_SIGN_UP_CARD = document.getElementById('subscription-success');
const DISMISS_BUTTON = document.getElementById('dismiss');
const emailIn = document.getElementById('email');

function hide(e){
    e.classList.add('hide');
}

function show(e) {
    e.classList.remove('hide');
}

function invalidInput(e){
    e.classList.add('invalid');
    invalidtext = document.getElementById("invalid-"+e.id);
    show(invalidtext);
}

function validInput(e){
    e.classList.remove('invalid');
    invalidtext = document.getElementById("invalid-"+e.id);
    hide(invalidtext);
}

function isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateEmail(email){
    if(isEmail(email)){
        hide(SINGUP_CARD);
        show(SUCCESSFUL_SIGN_UP_CARD);
        validInput(emailIn);
        return true;
    }
    else invalidInput(emailIn);
    return false;
}

document.querySelector('form').addEventListener('submit', function(event) { 
    event.preventDefault(); // Prevents the form from submitting and the page from reloading
    let emailValue = document.getElementById('email').value;
    if(validateEmail(emailValue))
    document.getElementById('email').value = ""; //Proceed if the input is email and empty the input element
    });

DISMISS_BUTTON.addEventListener('click', function() {
    hide(SUCCESSFUL_SIGN_UP_CARD);
    show(SINGUP_CARD);
});
