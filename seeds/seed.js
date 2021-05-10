const sequelize = require('../config/connection');
const { User, Deck, Card, Faction, DeckCards, UserCards } = require('../models');

const userData = require('./userData.json');
const cardData = require('./cardData.json');
const deckData = require('./deckData.json');
// const factionData = require('./factionData.json');
const decksofcardsData = require('./decksofcardsData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // seed decks
  const decks = await Deck.bulkCreate(deckData, {
    individualHooks: true,
    returning: true,
  });

  // seed factions
  await Faction.create({ name: "Forest", image_url: "https://i.pinimg.com/originals/38/f9/ee/38f9ee5635e7d1b0cec1acbf43afc017.jpg" });
  await Faction.create({ name: "Chaos", image_url: "https://wallpaperaccess.com/full/2136269.jpg" });
  await Faction.create({ name: "Kingdom", image_url: "https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/demacia_splash.jpg" });

  // seed cards
  const cards = await Card.bulkCreate(cardData, {
    individualHooks: true,
    returning: true,
  });

  // seed all decks with 15 random cards
  for (let i = 0; i < decks.length; i++) {
    var deckId = i + 1;
    var cardsInDeck = [];
    for (let j = 0; j < 15; j++) {
      cardId = Math.floor(Math.random() * (cards.length + 1));
      if (cardId === 0) {
        j--;
        continue;
      }
      if (cardsInDeck.indexOf(cardId) !== -1) {
        j--;
        continue;
      }
      cardsInDeck.push(cardId);

      await DeckCards.create({
        deck_id: deckId,
        card_id: cardId,
      });
    }
  }

  // seed all of our users with all of our cards.
  for (let i = 0; i < users.length; i++) {
    var userId = i + 1;
    for (let j = 0; j < cards.length; j++) {
      var cardId = j + 1;
      await UserCards.create({
        user_id: userId,
        card_id: cardId,
      });
    }
  }

  process.exit(0);
};

seedDatabase();