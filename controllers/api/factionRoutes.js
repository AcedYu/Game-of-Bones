const router = require('express').Router();
const { Card, Deck, DeckCards, Faction, User, UserCards } = require('../../models');

// Get all Factions
router.get('/', async (req, res) => {
  try {
    const factionData = await Faction.findAll();
    res.status(200).json(factionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get faction by id
router.get('/:id', async (req, res) => {
  try {
    const factionData = await Faction.findOne({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(factionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;