const User = require("./User");
const Deck = require("./Deck");
const Card = require("./Card");
const Faction = require("./Faction");
const DeckCards = require("./DeckCards");
const UserCards = require("./UserCards");

//Each user can have 1 deck
User.hasOne(Deck, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Deck.belongsTo(User, {
  foreignKey: 'user_id'
});

// Each deck can have many cards
Deck.belongsToMany(Card, {
  through: 'deck_cards',
  foreignKey: 'deck_id',
  otherKey: 'card_id'
});
// Each card can belong to many decks
Card.belongsToMany(Deck, {
  through: 'deck_cards',
  foreignKey: 'card_id',
  otherKey: 'deck_id'
});

// Each user can have many cards
User.belongsToMany(Card, {
  through: 'user_cards',
  foreignKey: 'user_id',
  otherKey: 'card_id'
});
// Each card can have many users
Card.belongsToMany(User, {
  through: 'user_cards',
  foreignKey: 'card_id',
  otherKey: 'user_id'
});

//Each card belongs to a faction
Faction.hasMany(Card, {
  foreignKey: 'faction_id',
  onDelete: 'CASCADE'
});
Card.belongsTo(Faction, {
  foreignKey: 'faction_id'
});

module.exports = {User, Deck, Card, Faction, DeckCards, UserCards};