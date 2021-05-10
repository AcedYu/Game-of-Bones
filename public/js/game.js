var cardPlayer1Area = $('#player1')
var cardPlayer2Area = $('#player2')

var startButton = $('#buttonStart')
var playerList = $('#player-list')
var userButton = $('#playUser')
var enemyAttack = 0
var userAttk = 0
const userList = async () => {
const response = await fetch(`/api/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const res = await response.json();
    var userNameArray = []
    for (var i = 0 ; i<res.length;i++){
        userNameArray.push(res[i].name)
    }
    for (var i = 0 ; i<userNameArray.length;i++){
        
        let listDiv = $('<div>');
        playerList.append(listDiv)
        
        let listTemplate = `
        <div class="card w-100">
            <div class="d-flex align-items-center my-2">
                <div class="flex-shrink-0">
                    <span class="fa-stack fa-2x ms-2 mt-2">
                        <i id="brando-circle-warning" class="fas fa-circle fa-stack-2x"></i>
                        <i id="brando-eye-evil" class="fad fa-eye-evil fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="flex-grow-1 ms-3">
                <button id="button-opponent" type="button" class="btn btn-light"><strong>${userNameArray[i]}</strong></button>
                </div>
            </div>      
        </div>
    </div>
        `
        listDiv.on('click',start)
        listDiv.append(listTemplate)
        
    }
}
const game1 = async () => {
    

  
  var currentPlayerId = 1
      const response = await fetch(`/api/users/ ${currentPlayerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
          var deckNameArr = []
          var deckAttkArr = []
          var deckIMGArr = []
          var deckIdArr = []
          var deckFactionArr = []
          var randomNumberArray = []
        
          for (var i = 0; i<res.deck.cards.length; i++){
            randomNumberArray.push(i)
            deckNameArr.push(res.deck.cards[i].name)
            deckAttkArr.push(res.deck.cards[i].attack)
            deckIMGArr.push(res.deck.cards[i].image_url)
            deckIdArr.push(res.deck.cards[i].id)
            deckFactionArr.push(res.deck.cards[i].faction.name)
            
            randomNumberArray.push(i)
          }
            var number = 15 
            for (var i = 0; i<5; i++){
                
                var randomNumber15 = Math.floor(Math.random()*number)
                let cardDiv = $('<div>');
            
                cardPlayer1Area.append(cardDiv)
            
                let cardTemplate = $(`
                <div class="card-columns">
                <div class="card card-battle card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${deckIMGArr[randomNumber15]});">
                    
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-3 mt-3 mb-4 lh-1 fw-bold">${deckNameArr[randomNumber15]}</h3>
                <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                <h5 class="badge-battle"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-swords me-2"></i><span class="badge rounded-pill bg-danger">${deckAttkArr[randomNumber15]}</span></span></h5>
                </li>
                <li class="d-flex align-items-center me-3">
                <h5 class="badge-faction"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-helmet-battle me-2"></i><span class="badge rounded-pill bg-info">${deckFactionArr[randomNumber15]}</span></span></h5>
                </li>
                </ul>
                </div>
                </div>
                </div><!-- card container -->
                `)
                cardDiv.append(cardTemplate)
                userAttk = userAttk + deckAttkArr[i]
                deckNameArr.splice(randomNumber15, 1);
                deckAttkArr.splice(randomNumber15, 1);
                deckIMGArr.splice(randomNumber15, 1);
                deckIdArr.splice(randomNumber15, 1);
                deckFactionArr.splice(randomNumber15, 1);
                randomNumberArray.splice(randomNumber15, 1);
                number--
           }
    
}     
const game2 = async (enemyName) => {
    
  const response2 = await fetch(`/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res2 = await response2.json();
  console.log(res2)

  for (var i = 0; i<res2.length; i++){
    if(res2[i].name === enemyName){
      var enemyId = res2[i].id
    }
  }
  console.log(enemyId)


      const response = await fetch(`/api/users/${enemyId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
          var enemyNameArr = []
          var enemyAttackArray = []
          var enemyIMGArr = []
          var enemyIdArr = []
          var enemyFactionArr = []
            var randomNumberArray = []
        
          for (var i = 0; i<res.deck.cards.length; i++){
            randomNumberArray.push(i)
            enemyNameArr.push(res.deck.cards[i].name)
            enemyAttackArray.push(res.deck.cards[i].attack)
            enemyIMGArr.push(res.deck.cards[i].image_url)
            enemyIdArr.push(res.deck.cards[i].id)
            enemyFactionArr.push(res.deck.cards[i].faction.name)
          }
          var number = 15
            for (var i = 0; i<5; i++){
            
          var randomNumber15 = Math.floor(Math.random()*number)
                let cardDiv = $('<div>');
            
                cardPlayer2Area.append(cardDiv)
            
                let cardTemplate = $(`
                <div class="card-columns">
                <div class="card card-battle card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${enemyIMGArr[randomNumber15]});">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-3 mt-3 mb-4 lh-1 fw-bold">${enemyNameArr[randomNumber15]}</h3>
                <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                <h5 class="badge-battle"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-swords me-2"></i><span class="badge rounded-pill bg-danger">${enemyAttackArray[randomNumber15]}</span></span></h5>
                </li>
                <li class="d-flex align-items-center me-3">
                <h5 class="badge-faction"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-helmet-battle me-2"></i><span class="badge rounded-pill bg-info">${enemyFactionArr[randomNumber15]}</span></span></h5>
                </li>
                </ul>
                </div>
                </div>
                </div><!-- card container -->
                `)
                cardDiv.append(cardTemplate)
                
                enemyAttack = enemyAttack + enemyAttackArray[i]
                enemyNameArr.splice(randomNumber15, 1);
                enemyAttackArray.splice(randomNumber15, 1);
                enemyIMGArr.splice(randomNumber15, 1);
                enemyIdArr.splice(randomNumber15, 1);
                enemyFactionArr.splice(randomNumber15, 1);
                randomNumberArray.splice(randomNumber15, 1);
                number--
           }
}
function compare (){
    var messageWinOrLose = $('#diplayMessage')
    var myAttDom = $('#myAttack')
    var enemyAttDom = $('#enemyAttack')

  
    if (userAttk>enemyAttack){
        let message = $('<h2>');
        messageWinOrLose.append(message);
        let win = `<h2>Winner Winner Chicken Dinner!!!</h2>`
        message.append(win);

        let myAtt = $('<h2>');
        myAttDom.append(myAtt);
        let myAtac = `<h2>My Attack: ${userAttk}</h2>`
        myAtt.append(myAtac);

        let enemAtt = $('<h2>');
        enemyAttDom.append(enemAtt);
        let enemyAtac = `<h2>Enemy Attack: ${enemyAttack}</h2>`
        myAtt.append(enemyAtac);
       
    }
    else{
        let message = $('<h2>');
        messageWinOrLose.append(message);
        let lose = `<h2>You Lose</h2>`
        message.append(lose);

        let myAtt = $('<h2>');
        myAttDom.append(myAtt);
        let myAtac = `<h2>My Attack: ${userAttk}</h2>`
        myAtt.append(myAtac);

        let enemAtt = $('<h2>');
        enemyAttDom.append(enemAtt);
        let enemyAtac = `<h2>Enemy Attack: ${enemyAttack}</h2>`
        myAtt.append(enemyAtac);
} }
function reset (){
    
    var messageWinOrLose = $('#diplayMessage')

    enemyAttack = 0;
    userAttk = 0;
    cardPlayer1Area.empty();
    cardPlayer2Area.empty();
    messageWinOrLose.empty();
    playerList.empty();

}
async function start (event){
    console.log(event.target.innerHTML)
    var enemyName = event.target.innerHTML

    await reset()
    await game1()
    await game2(enemyName)
    compare()
}
startButton.on('click',start)
userButton.on('click',start)
userList();
//possible: Each player has lifepoints, and players will keep drawing cards until the other players life points are diminished.
    // this can have an animation of lifepoints go down on each side
//hopefully: animate losers to side explode with different shapes
//possible: spell cards that will aplify certain factions attack points

function clickPlayer(){
  
}

