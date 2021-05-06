const router = require('express').Router();
const { Card, Deck, DeckCards, Faction, User, UserCards } = require('../models');
const withAuth = require('../utils/auth');

// render homepage
router.get('/', async (req, res) => {
  try{
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/collection', async (req, res) => {
  try{
    res.render('collection');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/admin', async (req, res) => {
  try{
    res.render('admin');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/auth', async (req, res) => {
  try{
    res.render('auth');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/confirmation', async (req, res) => {
  try{
    res.render('confirmation');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create', async (req, res) => {
  try{
    res.render('create');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/deck', async (req, res) => {
  try{
    res.render('deck');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/play', async (req, res) => {
  try{
    res.render('play');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/store', async (req, res) => {
  try{
    res.render('store');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;