const router = require('express').Router();
const { Card, Deck, DeckCards, Faction, User, UserCards } = require('../../models');

// Get all Cards
router.get('/', async (req, res) => {
  try {
    const cardData = await Card.findAll();
    res.status(200).json(cardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cardData = await Card.findOne({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(cardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;