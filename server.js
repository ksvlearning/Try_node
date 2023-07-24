const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.post('/login', (req, res) => {
  // In a real application, you would check the username and password here against a database.
  // For this example, we'll just return a response indicating the login status.

  const { username, password } = req.body;
  if (username === 'your_username' && password === 'your_password') {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
