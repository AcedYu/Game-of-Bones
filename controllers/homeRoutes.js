const router = require('express').Router();
const { Card, Deck, DeckCards, Faction, User, UserCards } = require('../models');

// Render login from /login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;