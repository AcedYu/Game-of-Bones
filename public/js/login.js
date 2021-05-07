var loginSubmit = $('#login-button');
var signUpSubmit = $('#signup-button');
//signUp

const validateLogin = async (event) => {
  event.preventDefault();
  const email = $('#loginEmail').val().trim();
  const password = $('#loginPassword').val().trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = $('#signInName').val().trim();
  const email = $('#signInEmail').val().trim();
  const password = $('#signInPassword').val().trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

loginSubmit.on('click', validateLogin);
signUpSubmit.on('click', signupFormHandler);