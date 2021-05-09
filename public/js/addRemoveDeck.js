
const collectionToDeck = $('.cardClick')
const deckCardNameDoc = $('.cardname').val()
const deckCardIdDoc = $('.cardId').val()

const addToDeck = async () => {
    var currentPlayerId = 1

    const response = await fetch(`/api/users/ ${currentPlayerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

    const res = await response.json();


    var deckNameArr = []

    for (var i = 0; i<res.deck.cards.length; i++){

        deckNameArr.push(res.deck.cards[i].name)

      }

      if (deckNameArr.includes(deckCardNameDoc)){
        continue;

      }
      else{
        var deck_id = res.deck.id
        var card_id = deckCardIdDoc
        const response2 = await fetch(`/api/deck/cards`, {
            method: 'POST',
            body: JSON.stringify({ deck_id, card_id  }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      }

    
    
    
    
       
    
}


const removeFromDeck = async () => {
    
    const response = await fetch(`/api/deck/cards`, {
        method: 'DELETE',
        body: JSON.stringify({ deck_id, card_id  }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
    
       
    
}
