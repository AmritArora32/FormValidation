let form = document.getElementById("form");

let username = document.getElementById("username");
let puser = document.getElementById("p-user");

let Email = document.getElementById("Email");
let pemail = document.getElementById("p-email");

let Password = document.getElementById("Password");
let ppassword = document.getElementById("p-password");

let confirmpassword = document.getElementById("confirm-password");
let pconfirmpassword = document.getElementById("p-confirm-password");

function handleSubmit(event){
    event.preventDefault();

    confirmpassword = confirmpassword.value;
    username = username.value;
    Email = Email.value;
    let password = Password.value;

    let Uppercasep, Uppercaseu = false;
    let Lowercasep = false;
    let Lowercaseu = false;
    let Numberp, Numberu = false;
    let SpecialCharp, SpecialCharu = false;
    let NoSpaces = !password.includes(" ");
    const specialCharacters = "!@#$%^&*";
    // let NotEmpty = true;
    

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') Uppercasep = true;
        else if (char >= 'a' && char <= 'z') Lowercasep = true;
        else if (char >= '0' && char <= '9') Numberp = true;
        else if (specialCharacters.includes(char)) SpecialCharp = true;
        
    }

    if (password.length >= 8 && password.length <=16 && Uppercasep && Lowercasep && Numberp && SpecialCharp && NoSpaces ) {
        
        ppassword.textContent ="Password is valid:"
        
    } else {
        ppassword.textContent = "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, no spaces, and 1 special character (!@#$%^&*), and have at least 8 characters long.";
    }

    for (let char of username){
        if (char >= 'a' && char <= 'z') Lowercaseu = true;
        // else if (char === null) NotEmpty = false;
        else if (char >= 'A' && char <= 'Z') Uppercaseu = true;
        else if (char >= '0' && char <= '9') Numberu = true;
        else if (specialCharacters.includes(char)) SpecialCharu = true;
        
    }
    console.log('Lowercaseu ',Lowercaseu);
    console.log('Uppercaseu ',Uppercaseu);
    console.log('Number ',Numberu);
    console.log('SpecialChar ',SpecialCharu);
    

    if (username.length >= 5 && username.length <=12 && Lowercaseu && (!Uppercaseu) && (!SpecialCharu) && Numberu ) {
        
        puser.textContent ="username is valid";
        
    } else {
        puser.textContent = "Username must be Alphanumeric, smallcase, Not be Empty and have at least 5 characters.";
    }

    if(confirmpassword == password && password.length >= 8 && password.length <=16 && Uppercasep && Lowercasep && Numberp && SpecialCharp && NoSpaces)

        pconfirmpassword.textContent = "Confirm password is valid";
    else 
    pconfirmpassword.textContent = "Password does not match"
    
    if(Email.length == 0) 
        pemail.innerText = "Emailid can't be empty"
    else 
        pemail.innerText = "Emailid is valid";
}

form.addEventListener("submit",handleSubmit);