
var remainingCardss = $('#extraCards')
var clickCard = $('.cardOne')
var removeCard = $('.removeFromDeck')

var currentPlayerIdDOM = $('#userId')
var currentPlayerId = currentPlayerIdDOM.attr('userId') || 1;


async function remainingCards() {
  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const res = await response.json();
  console.log(res)
  var deckCardNameArray = []

  for (var i = 0; i < res.deck.cards.length; i++) {
    deckCardNameArray.push(res.deck.cards[i].name)
  }

  for (var i = 0; i < res.cards.length; i++) {

    if (deckCardNameArray.includes(res.cards[i].name)) {
      continue;
    }
    else {
      let cardViewDiv = $('<div>');
      remainingCardss.append(cardViewDiv)

      let cardTemplate = $(`
      <div class="card col card-collection card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${res.cards[i].image_url});">
      <div class="d-flex h-100 p-5 pb-3 text-white text-shadow-1">
        <h4 class="pt-3 mt-3 mb-4 lh-1 fw-bold"><p>${res.cards[i].name}</p></h4>
      </div>
      <div class="card-footer position-sticky">
        <h5 class="badge-battle"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-swords me-2"></i><span class="badge rounded-pill bg-danger">${res.cards[i].attack}</span></span></h5>
        <h5 class="badge-faction"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-helmet-battle me-2"></i><span class="badge rounded-pill bg-info">${res.cards[i].faction.name}</span></span></h5>
        <button id="addToDeck" type="button" class="btn btn-success">${res.cards[i].id}</button>

  </div>
    </div>`)
      cardViewDiv.on('click', addToDeck)
      cardViewDiv.append(cardTemplate)

    }
  }


  console.log(deckCardNameArray)
}





const addToDeck = async (event) => {

  console.log(event)

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const res = await response.json();


  var deck_id = res.deck.id

  var card_id = event.target.innerHTML

  console.log(card_id)
  console.log(deck_id)


  const response2 = await fetch(`/api/decks/addcard`, {
    method: 'POST',
    body: JSON.stringify({ deck_id, card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  document.location.reload();

}




const removeFromDeck = async (event) => {


  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const res = await response.json();


  var deck_id = res.deck.id

  var card_id = event.target.innerHTML

  console.log(card_id)

  const response2 = await fetch(`/api/decks/removecard`, {
    method: 'DELETE',
    body: JSON.stringify({ deck_id, card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  document.location.reload();


}
removeCard.on('click', removeFromDeck)
remainingCards();
