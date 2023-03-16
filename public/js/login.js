// query selector login form
const loginButton = document.querySelector('.login-button');

// create a function to handler the event listener
async function handleLogin(event) {
  event.preventDefault(); // prevent default

  // get email and password
  const emailValue = document.querySelector('#email-login').value.trim();
  const passwordValue = document.querySelector('#password-login').value.trim();

  // create an objet with the email and password
  const userLogin = {
    email: emailValue,
    password: passwordValue,
  };
  // ?
  const response = await fetch('/api/users/login', {
    body: JSON.stringify(userLogin),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('worked');
    window.location.replace('/game');
  } else {
    console.log('not worked');
    document.getElementById('incorrectAlertP').innerHTML =
      'Incorrect username or password!';
  }
  // reset the form
  // loginForm.reset();
}

// create an event listener when user submit the form
loginButton.addEventListener('click', handleLogin);
