// get routes for notes

const router = require('express').Router();
const path = require('path');

// Wildcard route to direct users to a 404 page

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;