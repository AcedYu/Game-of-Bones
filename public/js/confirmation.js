
var newCards = $('#cards')
var currentUserDom = $('#currentUserId')
var currentUserId = currentUserDom.val() || 1

const giveCards = async () => {
    const response = await fetch(`/api/cards`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();

   
      console.log(res)
    
    var deckNameArr = []
    var deckAttkArr = []
    var deckIMGArr = []
    var deckIdArr = []
    var deckFactionArr = []
    //only gives forest faction
    for(var i = 0 ;i<15; i++){

        deckNameArr.push(res[i].name)
        deckAttkArr.push(res[i].attack)
        deckIMGArr.push(res[i].image_url)
        deckIdArr.push(res[i].id)
        deckFactionArr.push(res[i].faction.name)

    }
    console.log(deckFactionArr)

    var giveCardId = []


    var giveNameArr = []
    var giveAttkArr = []
    var giveIMGArr = []
    var giveFactionArr = []

    for(var i = 0 ;i<5; i++){

    var randomNumber15 = Math.floor(Math.random()*15)

    giveCardId.push(deckIdArr[randomNumber15-1])

    giveNameArr.push(deckNameArr[randomNumber15-1])
    giveAttkArr.push(deckAttkArr[randomNumber15-1])
    giveIMGArr.push(deckIMGArr[randomNumber15-1])
    giveFactionArr.push(deckFactionArr[randomNumber15-1])


    }
    console.log(giveCardId)
    for(var i = 0 ;i<giveNameArr.length; i++){
        let cardDiv = $('<div>');
            
        newCards.append(cardDiv)
    
        let cardTemplate = $(`
        <div class="card-columns">
        <div class="card card-battle card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${giveIMGArr[i]});">
            
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h3 class="pt-3 mt-3 mb-4 lh-1 fw-bold">${giveNameArr[i]}</h3>
        <ul class="d-flex list-unstyled mt-auto">
        <li class="me-auto">
        <h5 class="badge-battle"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-swords me-2"></i><span class="badge rounded-pill bg-danger">${giveAttkArr[i]}</span></span></h5>
        </li>
        <li class="d-flex align-items-center me-3">
        <h5 class="badge-faction"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-helmet-battle me-2"></i><span class="badge rounded-pill bg-info">${giveFactionArr[i]}</span></span></h5>
        </li>
        </ul>
        </div>
        </div>
        </div><!-- card container -->
        `)
        cardDiv.append(cardTemplate)
    }
    var deck_id = 1

for (var i = 0;i<giveNameArr.length;i++){
    var card_id = giveCardId[i]
    const response2 = await fetch(`/api/decks/addcard`, {
        method: 'POST',
        body: JSON.stringify({ deck_id, card_id  }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
}


}
giveCards();