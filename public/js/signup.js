const signupButton = document.querySelector('.signup-button');

async function handleSignup(event) {
  event.preventDefault();

  const userNameValue = document.querySelector('#username-signup').value.trim();
  const passwordValue = document.querySelector('#password-signup').value.trim();
  const emailValue = document.querySelector('#email-signup').value.trim();

  const newUser = {
    username: userNameValue,
    email: emailValue,
    password: passwordValue,
  };

  await fetch('/api/signup', {
    body: JSON.stringify(newUser),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('Signed Up');
  } else {
    console.log('Not Signed Up');
  }

  console.log({ userNameValue, passwordValue, emailValue });

  signupForm.reset();
}

signupButton.addEventListener('submit', handleSignup);
