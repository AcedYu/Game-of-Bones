
var cardPlayer1Area = $('#play-card-group-1')

var cardPlayer2Area = $('#play-card-group-2')




const hi = async (event) => {
    
  var currentPlayerId = 1

      const response = await fetch(`/api/users/ ${currentPlayerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const res = await response.json();



          var userAttk = 0

          var deckNameArr = []
          var deckAttkArr = []
          var deckIMGArr = []
          var deckIdArr = []
          var deckFactionArr = []

        
          for (var i = 0; i<res.deck.cards.length; i++){
          var randomNumber15 = Math.floor(Math.random()*15)

            
            deckNameArr.push(res.deck.cards[randomNumber15].name)
            deckAttkArr.push(res.deck.cards[randomNumber15].attack)
            deckIMGArr.push(res.deck.cards[randomNumber15].image_url)
            deckIdArr.push(res.deck.cards[randomNumber15].id)
            deckFactionArr.push(res.deck.cards[randomNumber15].faction.name)


          }
          
            for (var i = 0; i<5; i++){
            


                let cardDiv = $('<div>');
            
                cardPlayer1Area.append(cardDiv)
            
                let cardTemplate = $(`
                <div id="card-1" class="card card-play">
                    <img id="card-1-img" src="${deckIMGArr[i]}" class="card-img-top" alt="photo">
                    <div id="card-1-body" class="card-body">
                    <h5 id="card-1-title" class="card-title">${deckNameArr[i]}</h5>
                    </div>
                    <ul id="card-1-list" class="">
                    <li id="card-1-attack" class="list-item"><i class="fad fa-swords me-2"></i>${deckAttkArr[i]}</li>
                    <li id="card-1-faction"  class="list-item"><i class="fad fa-eye-evil me-2"></i>${deckFactionArr[i]}</li>
                    </ul>
                    <div id="card-1-footer" class="card-footer">
                    <small id="card-1-id" >${deckIdArr[i]}</small>
                    </div>
                </div>`)
                cardDiv.append(cardTemplate)


                userAttk = userAttk + deckAttkArr[i]


           }
    console.log(userAttk)
    
}     


const hi2 = async (event) => {
    
  var currentPlayerId = 1

      const response = await fetch(`/api/users/ ${currentPlayerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const res = await response.json();



          var enemyAttack = 0

          var enemyNameArr = []
          var enemyAttackArray = []
          var enemyIMGArr = []
          var enemyIdArr = []
          var enemyFactionArr = []

        
          for (var i = 0; i<res.deck.cards.length; i++){
          var randomNumber15 = Math.floor(Math.random()*15)

            
            enemyNameArr.push(res.deck.cards[randomNumber15].name)
            enemyAttackArray.push(res.deck.cards[randomNumber15].attack)
            enemyIMGArr.push(res.deck.cards[randomNumber15].image_url)
            enemyIdArr.push(res.deck.cards[randomNumber15].id)
            enemyFactionArr.push(res.deck.cards[randomNumber15].faction.name)


          }
          
            for (var i = 0; i<5; i++){
            


                let cardDiv = $('<div>');
            
                cardPlayer2Area.append(cardDiv)
            
                let cardTemplate = $(`
                <div id="card-1" class="card card-play">
                    <img id="card-1-img" src="${enemyIMGArr[i]}" class="card-img-top" alt="photo">
                    <div id="card-1-body" class="card-body">
                    <h5 id="card-1-title" class="card-title">${enemyNameArr[i]}</h5>
                    </div>
                    <ul id="card-1-list" class="">
                    <li id="card-1-attack" class="list-item"><i class="fad fa-swords me-2"></i>${enemyAttackArray[i]}</li>
                    <li id="card-1-faction"  class="list-item"><i class="fad fa-eye-evil me-2"></i>${enemyFactionArr[i]}</li>
                    </ul>
                    <div id="card-1-footer" class="card-footer">
                    <small id="card-1-id" >${enemyIdArr[i]}</small>
                    </div>
                </div>`)
                cardDiv.append(cardTemplate)


                enemyAttack = enemyAttack + enemyAttackArray[i]


           }

        console.log(enemyAttack)

}     



function compare (){

    var messageWinOrLose = $('#diplayMessage')
  

    if (userAttk>enemyAttack){
        let message = $('<h2>');
        messageWinOrLose.append(message);
        let win = `<h2>you WIN</h2>`

        message.append(win);

       
    }
    else{
        let message = $('<h2>');
        messageWinOrLose.append(message);
        let lose = `<h2>you LOSE</h2>`

        message.append(lose);

} }

hi();
hi2();