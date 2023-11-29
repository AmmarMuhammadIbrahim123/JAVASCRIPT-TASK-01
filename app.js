///////////////  Javascript Task No #1   ////////////////////////////
function registerUser() {
    
    let userName = prompt("Enter your name:",  value="AMMAR");
    let phoneNumber = prompt("Enter your phone number:",  value="03469853234");
    let email = prompt("Enter your email:",  value="Ammar678@gamil.com");
    let password = prompt("Enter your password:",  value="Ammar34#");
    let confirmPassword = prompt("Confirm your password:",  value="Ammar34#");

    if(!userName || !phoneNumber || !password || !confirmPassword){
        alert("Error: Please fill in all the input fields.");
    } else {
        if (password===confirmPassword){
            alert("Congratulations! You are successfully registered.");
        }else{
            alert("Error: Passwords do not match. Please make sure both passwords are the same.");
        }
    }
}
    registerUser();

  