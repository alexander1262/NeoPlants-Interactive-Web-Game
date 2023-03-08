const signupButton = document.querySelector(".form-signup")

async function handleLogin(event) {
    event.preventDefault();
    console.log('YOU SIGNED UP!');
}

signupButton.addEventListener("submit", handleLogin)