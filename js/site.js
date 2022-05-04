
//Get the string from the page
//Controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    if(userString.length > 0 && userString.length < 700){
        displayString(revString);
    }else{
        if(userString.length == 0){
            tooShort();
        }else{
            tooLong();
        }
    }
}

//Reverse the string
//Logic function
function reverseString(userString){

    let revString = [];

    //Reverse a string using a for-loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    return revString;
}

//Display reversed string to the user
//View function
function displayString(revString){

    //Write the message to the page
    document.getElementById("msg").innerHTML = `<strong>Your string in reverse is:</strong> ${revString}`;

    //Turn on the alert box
    document.getElementById("alert").classList.remove("invisible");
}

function tooShort(){
    
    //Error message for empty input
    document.getElementById("msg").innerHTML = "<strong>You must enter content to play.</strong>";

    //Turn on the alert box
    document.getElementById("alert").classList.remove("invisible");
}

function tooLong(){
    
    //Error message for empty input
    document.getElementById("msg").innerHTML = "<strong>Your input is too long. Try something shorter.</strong>";

    //Turn on the alert box
    document.getElementById("alert").classList.remove("invisible");
}

function clearFields(){
    
    //Clear text input
    document.getElementById("userString").value = "";

    //Hide the alert with previously reversed strings
    document.getElementById("alert").classList.add("invisible");
}