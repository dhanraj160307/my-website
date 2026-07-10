const password = document.getElementById("password");
const eye = document.getElementById("eye");

eye.addEventListener("click", () => {

    if(password.type === "password"){
        password.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }else{
        password.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }

});

document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;

    if(email === "" || passwordValue === ""){
        alert("Please fill all fields.");
        return;
    }

    alert("Login Successful!");
});