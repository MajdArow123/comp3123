const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const userRouter = require('./routes/users');

// Parse JSON request bodies (needed for POST /login)
app.use(express.json());

/*
- Create new html file name home.html
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.use('/', router);

// Add User Router
app.use('/api/v1/user', userRouter);

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port ' + (process.env.port || 8081));
