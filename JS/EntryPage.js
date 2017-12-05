document.loginForm.onsubmit = function validate() {

    var emptyUser = (document.getElementById("username").value === "");
    var emptyPassword = (document.getElementById("password").value === "");

    if(emptyUser && emptyPassword){
        console.log("check username and password");
        window.alert("check username and password");

        return false;
    }
    if(emptyUser)
    {
        console.log("check username");
        window.alert("check username");
        document.getElementById("username").focus();
        return false;
    }

    if(emptyPassword)
    {
        console.log("check password");
        window.alert("check password");
        document.getElementById("password").focus();
        return false;
    }
    document.location = "MainPage.html";
    // we need this to prevent the form from submitting
    return false;
};

function check(form) {

    if(form.Password.value !==  form.ConfirmPassword.value) {
        alert("Password is not the same.")
    }
    if(form.Uname.value === "name" && form.Password.value === "1" && form.ConfirmPassword.value === "1") {
        window.open('MainPage.html')
    }
    else {
        alert("Error Password or Username")
    }
}