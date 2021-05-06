var loginSubmit = $('#loginButton')
//login
var email = $('#emailLogin').value.toLowerCase().trim();
var password = $('#passwordLogin').value.toLowerCase().trim();
//signUp
var name = $('#nameCreate').value.toLowerCase().trim();
var email = $('#emailCreate').value.toLowerCase().trim();
var password = $('#passwordCreate').value.toLowerCase().trim();


function validateLogin(){

    const signupFormHandler = async (event) => {
        event.preventDefault();
      
      
        if (name && email && password) {
          const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert(response.statusText);
          }
        }

        const logout = async () => {
            const response = await fetch('/api/users/logout', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            });
          
            if (response.ok) {
              document.location.replace('/');
            } else {
              alert(response.statusText);
            }
          };





      };
}

loginSubmit.on('click',validateLogin);