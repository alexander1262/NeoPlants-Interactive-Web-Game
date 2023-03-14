const signupButton = document.querySelector('.signup-button');

async function handleSignup(event) {
  event.preventDefault();
  console.log('here');

  const userNameValue = document.querySelector('#username-signup').value.trim();
  const passwordValue = document.querySelector('#password-signup').value.trim();
  const emailValue = document.querySelector('#email-signup').value.trim();

  const newUser = {
    username: userNameValue,
    email: emailValue,
    password: passwordValue,
  };

  const response = await fetch('/api/users/signup', {
    body: JSON.stringify(newUser),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('Signed Up');
    document.getElementById('signedUpP').innerHTML = 'Successfully signed up!';
  } else {
    console.log('Not Signed Up');
  }

  console.log({ userNameValue, passwordValue, emailValue });

  signupButton.reset();
}

signupButton.addEventListener('click', handleSignup);
