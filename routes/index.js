// routes/index.js

const express = require('express');
const router = express.Router();

// ... (other imports and code)

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/thank-you'); // Redirect to the "Thank You" page
});

// ... (other routes)

module.exports = router;
