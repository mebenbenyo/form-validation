let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#pass");
let passInput = document.querySelector("#pass2");
let termInput = document.querySelector("#terms");
let usernameInput = document.querySelector("#username");
let newsletter = document.querySelector("#newsletter");

let emailError = document.createElement('p');
emailError.setAttribute("class","warning");
document.querySelectorAll(".form-group")[0].append(emailError);

let passwordError = document.createElement('p');
passwordError.setAttribute("class","warning");
document.querySelectorAll(".form-group")[1].append(passwordError);

let passError = document.createElement('p');
passError.setAttribute("class","warning");
document.querySelectorAll(".form-group")[2].append(passError);

let termError = document.createElement('p');
termError.setAttribute("class","warning");
document.querySelectorAll(".form-check")[2].append(termError);

let usernameError = document.createElement('p');
usernameError.setAttribute("class", "warning");
document.querySelectorAll(".form-name")[0].append(usernameError);

let newsletterSpam = document.createElement('p');
newsletterSpam.setAttribute("class", "warning");
document.querySelectorAll(".form-check")[0].append(newsletterSpam);

let spamMSg="Warning: By subscribing to our newsletter, you may receive promotional emails from us. By proceeding with this subscription, we assume you understand and agree to this.";
let emailErrorMsg="x Email address should be non-empty with the format of xyz@xyz.xyz.";
let blankPassMsg="x Please enter a password.";
let passwordErrorMsg="x Password should be at least 6 characters: 1 uppercase, 1 lowercase.";
let passErrorMsg="x Please retype password.";
let termsErrorMsg="x Please accept the terms and conditions.";
let defaultMSg="";
let alphaUserMsg="User name must contain only alphabetic characters";
let usernameErrorMsg="User name should be non-empty, and within 20 characters long.";

function vaildateEmail(){
    let email = emailInput.value; 
    let regexp=/\S+@\S+\.\S+/;   
    
    if(regexp.test(email)){
    emailInput.classList.remove('error');
    error = defaultMSg;}
    else {
    emailInput.classList.add('error');
    error = emailErrorMsg;}
    return error;
}

function validatePassword(){
    let password = passwordInput.value;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (passwordRegex.test(password)){
        passwordInput.classList.remove('error');
        error = defaultMSg;}
        else if(password === "") {
        passwordInput.classList.add('error');
        error = blankPassMsg;
        }
        else {
        passwordInput.classList.add('error');
        error = passwordErrorMsg;}
        return error;
}

function validatePass(){
    let pass = passInput.value
    let password = passwordInput.value;

    if (pass === password) {
    passInput.classList.remove('error');
    error = defaultMSg;}
    if (pass === "") {
    passInput.classList.add('error');
    error = blankPassMsg;
    }
    if (pass != password) {
    passInput.classList.add('error');
    error = passErrorMsg;}
    return error;
}

function validateTerms(){
    if(termInput.checked) {
    error = defaultMSg;}
    else {
    error = termsErrorMsg;}
    return error;

}

function vaildateUsername(){
    let username = usernameInput.value 
    let regexpuser=/^[a-zA-Z]+$/;   
    
    if(regexpuser.test(username)){
    usernameInput.classList.remove('error');
    error = defaultMSg;}
    else if (username === "" || username.length > 20) {
    usernameInput.classList.add('error');
    error = usernameErrorMsg;
    }
    else  {
    usernameInput.classList.add('error');
    error = alphaUserMsg;}
    return error;
}

function validate(e){
    document.getElementById("username").value = document.getElementById("username").value.toLowerCase();
    e.preventDefault(); 
    const formData = new URLSearchParams(new FormData(form)).toString();
    let valid = true;
    let emailValidation=vaildateEmail();
    let passwordValidation=validatePassword();
    let passValidation=validatePass();
    let termsValidation=validateTerms();
    let usernameValidation = vaildateUsername();
    

    if(emailValidation !==defaultMSg){
        emailError.textContent = emailValidation;
        valid = false; 
        
    }

    if(passwordValidation !==defaultMSg){
        passwordError.textContent = passwordValidation;
        valid = false;
    }

    if(passValidation !==defaultMSg) {
        passError.textContent = passValidation;
        valid = false;
    }

    if(termsValidation!==defaultMSg){
        termError.textContent=termsValidation;
        valid = false;
    }

    if (usernameValidation !==defaultMSg) {
        usernameError.textContent = usernameValidation;
        valid = false;
    }
    

    if (valid) {
        alert("Data is valid!!");
        window.location.search = formData;
        form.reset();
    }
    
}

function alertNewsletter() {
    if (!newsletter.checked) {
        error = defaultMSg;}
    else {newsletterSpam.textContent = spamMSg} {
        error = spamMSg;
    }
    return error;   
}


function resetFormError() {
    emailError.textContent=defaultMSg;
    passwordError.textContent=defaultMSg;
    passError.textContent=defaultMSg;
    termError.textContent=defaultMSg;
    usernameError.textContent=defaultMSg;
    newsletterSpam.textContent=defaultMSg;
    window.history.replaceState({}, document.title, window.location.pathname);
}

emailInput.addEventListener("blur",()=>{ 
    let x=vaildateEmail();
    if(x == defaultMSg){
        emailError.textContent = defaultMSg;
    }
    else emailError.textContent =x;
    });

passwordInput.addEventListener("blur",()=>{ 
    let x=validatePassword();
    if(x == defaultMSg){
        passwordError.textContent = defaultMSg;
    }
    else passwordError.textContent =x;
    });

passInput.addEventListener("blur",()=>{ 
    let x=validatePass();
    if(x == defaultMSg){
        passError.textContent = defaultMSg;
    }
    else passError.textContent =x;
    });

termInput.addEventListener("change", function(){
    if(this.checked){
        termError.textContent= defaultMSg;
    }
    });

usernameInput.addEventListener("blur",()=>{ 
    let x=vaildateUsername();
    if(x == defaultMSg){
        usernameError.textContent = defaultMSg;
    }
    else usernameError.textContent =x;
    });


newsletter.addEventListener("change", function(){
    if(!this.checked){
        newsletterSpam.textContent= defaultMSg;
    }
    });


document.form.addEventListener("submit", validate);
document.form.addEventListener("reset", resetFormError);
newsletter.addEventListener('click', alertNewsletter);
