const sequelize = require('../config/connection');
const { User, Deck, Card, Faction, DeckCards, UserCards } = require('../models');

const userData = require('./userData.json');
const cardData = require('./cardData.json');
const deckData = require('./deckData.json');
const factionData = require('./factionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const decks = await Deck.bulkCreate(deckData, {
    individualHooks: true,
    returning: true,
  });

  const factions = await Faction.bulkCreate(cardData, {
    individualHooks: true,
    returning: true,
  });

  const cards = await Card.bulkCreate(cardData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();