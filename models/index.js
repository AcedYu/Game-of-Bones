const User = require("./User");
const Deck = require("./Deck");
const Card = require("./Card");
const Faction = require("./Faction");

//Each user can have decks
User.hasMany(Deck, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Deck.belongsTo(User, {
  foreignKey: 'user_id'
});

// Each deck can have many cards
// Each card can belong to many decks

// Each user can have many cards
// Each card can have many users

//Each card belongs to a faction
Faction.hasMany(Card, {
  foreignKey: 'faction_id',
  onDelete: 'CASCADE'
});
Card.belongsTo(Faction, {
  foreignKey: 'faction_id'
});

module.exports = {User, Deck, Card, Faction};