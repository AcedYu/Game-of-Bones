const router = require('express').Router();
const { Card, Deck, DeckCards, Faction, User, UserCards } = require('../models');
const withAuth = require('../utils/auth');

// render homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/collection', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [
        {
          model: Deck,
          include: {
            model: Card,
            through: {
              model: DeckCards,
            },
          },
        },
        {
          model: Card,
          through: {
            model: UserCards,
          }
        },
      ],
    });
    const user = userData.get({ plain: true });
    res.render('collection', {
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/admin', async (req, res) => {
  try {
    res.render('admin');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login screen
router.get('/auth', (req, res) => {
  // if the session confirms that the user is logged in redirect to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('auth');
});

router.get('/confirmation', async (req, res) => {
  try {
    res.render('confirmation');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create', async (req, res) => {
  try {
    res.render('create');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/deck', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [
        {
          model: Deck,
          include: {
            model: Card,
            through: {
              model: DeckCards,
            },
          },
        },
      ],
    });
    const user = userData.get({ plain: true });
    res.render('deck', {
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/play', async (req, res) => {
  try {
    res.render('play');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/store', async (req, res) => {
  try {
    const factionData = await Faction.findAll({
      include: {
        model: Card,
      },
    });
    const factions = factionData.map(faction => faction.get({plain: true}));
    res.render('store', {
      factions,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;