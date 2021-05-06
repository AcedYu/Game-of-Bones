
const router = require('../../../../fullStackBlog/Blog/controllers/api/userRoutes');
const Deck = require('../../models/deck');
const User = require('../../models/User');
var userListDom = $('#unorderedList')
var parentOfUnorderedList = $('#enemyList')
var startButtonDoc = $('#startButton')

router.get('/user', (req, res) => {
    User.findAll({
      order: ['name'],

    }).then((userData) => {
      
        var userArray = []
        for (var i = 0; i<userData.length; i++){
            userArray.push(userData.name)
        }
        for (var i = 0; i<userArray.length; i++){
           
            var userList = $('<li>');
            userListDom.append(userList);

            var userButton = $('<button>');
            userButton.text(userArray[i]).addClass("button").attr("id", userArray[i]);
            userList.append(userButton);
            
        }
              });
  });

  function startGame (){
    

    var enemy =  $('#unknown').val().toLowerCase().trim();


    if(enemy){
        router.get('/user', (req, res) => {
            User.findAll({
                where:{
                    name: enemy
                }
        
            }).then((userData) => {
                router.get('/DeckCards', (req, res) => {
                    DeckCards.findByPk({
                        where:{
                            deck_id: userData.deck_id
                        }
                
                    }).then((userData) => {
                      var card1 = userData.card_id1
                      var card2 = userData.card_id2
                      var card3 = userData.card_id3
                      var card4 = userData.card_id4
                      var card5 = userData.card_id5
                      var card6 = userData.card_id6
                      var card7 = userData.card_id7
                      var card8 = userData.card_id8
                      var card9 = userData.card_id9
                      var card10 = userData.card_id10
                      var card11 = userData.card_id11
                      var card12 = userData.card_id12
                      var card13 = userData.card_id13
                      var card14 = userData.card_id14
                      var card15 = userData.card_id15
                        
                      enemyCardArr = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15]
                      
                      
                        for (var i = 0 ; i<enemyCardArr.length ; i++){
                            
                            router.get('/card', (req, res) => {
                                User.findAll({
                                  where: ['name'],
                            
                                }).then((userData) => {
                                  
                                   
                            
                            
                            
                                          });
                              });
                        }});});});});}}


parentOfUnorderedList.on('click',startGame(enemy))
startButtonDoc.on('click',startGame(enemy))