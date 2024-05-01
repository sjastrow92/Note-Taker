const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const htmlRoutes = require('./routes/homeRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// looks for public folder
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// server listens for requests
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);