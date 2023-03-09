// query selector login form
const loginForm = document.querySelector('.login-form');

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
  const response = await fetch('/login', {
    body: JSON.stringify(userLogin),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  // test control --Delete after it works--
  if (response.ok) {
    console.log('worked');
  } else {
    console.log('not worked');
  }

  // reset the form
  loginForm.reset();
}

// create an event listener when user submit the form
loginForm.addEventListener('submit', handleLogin);