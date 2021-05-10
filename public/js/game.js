



var cardPlayer1Area = $('#row-challenge')
var startButton = $('#buttonStart')
var cardPlayer2Area = $('#row-face-down')
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

    console.log(userNameArray)

    for (var i = 0 ; i<userNameArray.length;i++){
        
        let listDiv = $('<div>');
        cardPlayer2Area.append(listDiv)
        
        let listTemplate = `
        <div id="buttonStart" class="list-group">
  <button type="button" class="list-group-item list-group-item-action">${userNameArray[i]}</button>
</div>`
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
                <div class="card card-battle card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${deckIMGArr[i]});">

                    
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-3 mt-3 mb-4 lh-1 fw-bold">${deckNameArr[i]}</h3>
                <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                <h5 class="badge-battle"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-swords me-2"></i><span class="badge rounded-pill bg-danger">${deckAttkArr[i]}</span></span></h5>
                </li>
                <li class="d-flex align-items-center me-3">
                <h5 class="badge-faction"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-helmet-battle me-2"></i><span class="badge rounded-pill bg-info">${deckFactionArr[i]}</span></span></h5>
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
    console.log(`userAttk ${userAttk}`)
    
}     


const game2 = async () => {
    
  var currentPlayerId = 1

      const response = await fetch(`/api/users/ ${currentPlayerId}`, {
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
                <div class="card card-battle card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${enemyIMGArr[i]});">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-3 mt-3 mb-4 lh-1 fw-bold">${enemyNameArr[i]}</h3>
                <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                <h5 class="badge-battle"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-swords me-2"></i><span class="badge rounded-pill bg-danger">${enemyAttackArray[i]}</span></span></h5>
                </li>
                <li class="d-flex align-items-center me-3">
                <h5 class="badge-faction"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-helmet-battle me-2"></i><span class="badge rounded-pill bg-info">${enemyFactionArr[i]}</span></span></h5>
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

                console.log(enemyNameArr)
                number--
           }

        console.log(enemyAttack)

}     



function compare (){

    var messageWinOrLose = $('#diplayMessage')
  

    if (userAttk>enemyAttack){
        let message = $('<h2>');
        messageWinOrLose.append(message);
        let win = `<h2>Winner Winner Chicken Dinner!!!</h2>`

        message.append(win);


       
    }
    else{
        let message = $('<h2>');
        messageWinOrLose.append(message);
        let lose = `<h2>You Lose</h2>`

        message.append(lose);

} }
function reset (){
    
    var messageWinOrLose = $('#diplayMessage')

    enemyAttack = 0;
    userAttk = 0;
    cardPlayer1Area.empty();
    cardPlayer2Area.empty();
    messageWinOrLose.empty();
}

async function start (){
    await reset()
    await game1()
    await game2()
    compare()

}

startButton.on('click',start)
userButton.on('click',start)

userList();

//possible: Each player has lifepoints, and players will keep drawing cards until the other players life points are diminished.
    // this can have an animation of lifepoints go down on each side
//hopefully: animate losers to side explode with different shapes
//possible: spell cards that will aplify certain factions attack points
