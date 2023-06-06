const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/INDEX.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const ipAddress = req.ip;

  console.log(`IP Address: ${ipAddress}`);
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);

  res.send('Login successful!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
