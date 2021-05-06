
const { compare } = require('bcrypt');
const router = require('../../../../fullStackBlog/Blog/controllers/api/userRoutes');
const Deck = require('../../models/deck');
const User = require('../../models/User');
var userListDom = $('#unorderedList')
var parentOfUnorderedList = $('#enemyList')
var startButtonDoc = $('#startButton')
var cardListDom = $('#')

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

  function startGameEnemy (){
    

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
                      
                      var enemyAttk = 0
                        for (var i = 0 ; i<enemyCardArr.length ; i++){
                            
                            router.get('/card', (req, res) => {
                                User.findAll({
                                  where: {
                                      id: Math.floor(Math.random()*15)
                                  }
                            
                                }).then((userData) => {
                                  
                                   enemyAttk = enemyAttk + userData.attack
                                   
                                   let cardList = $('<li>');
                                   cardListDom.append(cardList);
                       
                                   let cardImgUrl = $('<div>');
                                   let cardName = $('<div>');
                                   let cardAtk = $('<div>');

                                   cardAtk.text(userData.attack).addClass("cardAtk")
                                   cardList.append(cardAtk);

                                   cardName.text(userData.name).addClass("cardName")
                                   cardList.append(cardName);

                                   cardImgUrl.text(userData.image_url).addClass("img")
                                   cardList.append(cardImgUrl);

                            
                                          });
                              });
                        }
                        startGameMe();


                    });});});});}}

function startGameMe (){

    //supposed to search for current player
    router.get('/user', (req, res) => {
        User.findAll({
            where:{
                name: iDontKnow
            }
    
        }).then((userData) => {
            router.get('/DeckCards', (req, res) => {
                DeckCards.findByPk({
                    where:{
                        deck_id: userData.deck_id
                    }
            
                }).then((userData) => {
                  var mycard1 = userData.card_id1
                  var mycard2 = userData.card_id2
                  var mycard3 = userData.card_id3
                  var mycard4 = userData.card_id4
                  var mycard5 = userData.card_id5
                  var mycard6 = userData.card_id6
                  var mycard7 = userData.card_id7
                  var mycard8 = userData.card_id8
                  var mycard9 = userData.card_id9
                  var mycard10 = userData.card_id10
                  var mycard11 = userData.card_id11
                  var mycard12 = userData.card_id12
                  var mycard13 = userData.card_id13
                  var mycard14 = userData.card_id14
                  var mycard15 = userData.card_id15
                    
                  MyCardArr = [mycard1,mycard2,mycard3,mycard4,mycard5,mycard6,mycard7,mycard8,mycard9,mycard10,mycard11,mycard12,mycard13,mycard14,mycard15]
                  
                  var myAttk = 0
                    for (var i = 0 ; i<MyCardArr.length ; i++){
                        
                        router.get('/card', (req, res) => {
                            User.findAll({
                              where: {
                                  id: Math.floor(Math.random()*15)
                              }
                        
                            }).then((userData) => {
                              
                                myAttk = myAttk + userData.attack
                               
                               let cardList = $('<li>');
                               cardListDom.append(cardList);
                   
                               let cardImgUrl = $('<div>');
                               let cardName = $('<div>');
                               let cardAtk = $('<div>');

                               cardAtk.text(userData.attack).addClass("cardAtk")
                               cardList.append(cardAtk);

                               cardName.text(userData.name).addClass("cardName")
                               cardList.append(cardName);

                               cardImgUrl.text(userData.image_url).addClass("img")
                               cardList.append(cardImgUrl);

                        
                                      });
                          });
                    }
                    compare();

                });});});})
}


function compare (){

    var messageWinOrLose = $('#winOrLose')
    var win = 'You Win'
    var lose = 'You Lose'

    if (myAttk>enemyAttk){
        //display message somewhere ' you win ' 
        let message = $('<h2>');
        messageWinOrLose.append(message);

        message.text(win).addClass("win")
        message.append(message);

       
    }
    else{
        //display message of loss
        let message = $('<h2>');
        messageWinOrLose.append(message);

        message.text(lose).addClass("win")
        message.append(message);
    }
}

parentOfUnorderedList.on('click',startGameEnemy)
startButtonDoc.on('click',startGameEnemy)