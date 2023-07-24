document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Here, you can send the login details to the server for authentication.
      // For this example, we'll just log the username and password to the console.
      console.log('Username:', username);
      console.log('Password:', password);
  
      // You can also use Fetch or Axios to send the login data to the server.
      // For a real application, you should implement proper authentication.
    });
  });