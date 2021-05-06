const User = require('../../models/deck');
const User = require('../../models/User');



router.get('/deck', (req, res) => {
    User.findAll({
      order: ['user_id'],

    }).then((userDeck) => {
      
      for (var i = 0; i<userData.length; i++){
        userArray.push(userDeck.name)
    }
        

              });
  });