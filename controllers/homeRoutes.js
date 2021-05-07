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

// Render the user's collection page
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
            include: {
              model: Faction,
            },
            through: {
              model: DeckCards,
            },
          },
        },
        {
          model: Card,
          include: {
            model: Faction,
          },
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

// Render the admin page
router.get('/admin', async (req, res) => {
  try {
    const userData = await User.findAll();
    const deckData = await Deck.findAll();
    const cardData = await Card.findAll();

    const users = userData.get({ plain: true });
    const decks = deckData.get({ plain: true });
    const cards = cardData.get({ plain: true });

    res.render('admin', {
      users,
      decks,
      cards,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
    });
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

// Confirmation screen
router.get('/confirmation', async (req, res) => {
  try {
    res.render('confirmation');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Card Creation Screen
router.get('/create', async (req, res) => {
  try {
    res.render('create');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deck view screen
router.get('/deck', async (req, res) => {
  try {
    const userData = await User.findOne(
      {
        where: {
          id: req.session.user_id,
        },
        include: [
          {
            model: Deck,
            include: {
              model: Card,
              include: {
                model: Faction,
              },
              through: {
                model: DeckCards,
              },
            },
          },
          {
            model: Card,
            include: {
              model: Faction,
            },
            through: {
              model: UserCards,
            }
          },
        ],
      }
    );
    const user = userData.get({ plain: true });
    res.render('deck', {
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// game play screen
router.get('/play', async (req, res) => {
  try {
    res.render('play', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Store render screen
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