
var newCards = $('#cards')
var currentUserDom = $('#currentUserId')



var currentPlayerId = newCards.attr('userId') || 8;


console.log(currentPlayerId)

var giveCardId = []
var giveCardName = []
var giveCardImg = []
var giveCardAtk = []
var giveCardFac = []

var doesntHaveid = []
var doesntHaveName = []
var doesntHaveImg = []
var doesntHaveAtk = []
var doesntHaveFac = []

async function giveCards(){
  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  var collectionArray=[]

  for(var i=0;i<res.cards.length;i++){
    collectionArray.push(res.cards[i].id)
  }
  console.log(collectionArray)

  const response2 = await fetch(`/api/cards`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res2 = await response2.json();

 

    console.log(doesntHaveid)

    for (var i=0;i<res2.length;i++){
      if(collectionArray[i]===res2[i].id){
        
        continue;
      }
      else{
        doesntHaveid.push(res2[i].id)
        doesntHaveName.push(res2[i].name)
        doesntHaveImg.push(res2[i].image_url)
        doesntHaveAtk.push(res2[i].attack)
        doesntHaveFac.push(res2[i].faction.name)
      }
    }
    for (var i=0;i<5;i++){

      let cardDiv = $('<div>');
            
      newCards.append(cardDiv)
  
      let cardTemplate = $(`
      <div class="card-columns">
      <div class="card card-battle card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${doesntHaveImg[i]});">
          
      <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
      <h3 class="pt-3 mt-3 mb-4 lh-1 fw-bold">${doesntHaveName[i]}</h3>
      <ul class="d-flex list-unstyled mt-auto">
      <li class="me-auto">
      <h5 class="badge-battle"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-swords me-2"></i><span class="badge rounded-pill bg-danger">${doesntHaveAtk[i]}</span></span></h5>
      </li>
      <li class="d-flex align-items-center me-3">
      <h5 class="badge-faction"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-helmet-battle me-2"></i><span class="badge rounded-pill bg-info">${doesntHaveFac[i]}</span></span></h5>
      </li>
      </ul>
      </div>
      </div>
      </div><!-- card container -->
      `)
      cardDiv.append(cardTemplate)

    }

    
      var deck_id =res.id

      var card_id = doesntHaveid[0]

      const response3 = await fetch(`/api/cards/touser`, {
        method: 'POST',
        body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });


      giveCards2();
    

  
}

async function giveCards2(){

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  var deck_id =res.id

  var card_id = doesntHaveid[1]

  const response3 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  giveCards3();

}


async function giveCards3(){

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  var deck_id =res.id

  var card_id = doesntHaveid[2]

  const response3 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  giveCards4();
}

async function giveCards4(){

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  var deck_id =res.id

  var card_id = doesntHaveid[3]

  const response3 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  giveCards5();

}

async function giveCards5(){

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  var deck_id =res.id

  var card_id = doesntHaveid[4]

  const response3 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

}


async function hasAllCards(){
    
  const response = await fetch(`/api/users/${currentPlayerId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await response.json();

  

    const response2 = await fetch(`/api/cards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res2 = await response2.json();



    for (var i = 0;i<5;i++){

      var randomNumber45 = Math.floor(Math.random()*45-1)

      giveCardId.push(res2[randomNumber45].id)
      giveCardName.push(res2[randomNumber45].name)
      giveCardImg.push(res2[randomNumber45].image_url)
      giveCardAtk.push(res2[randomNumber45].attack)
      giveCardFac.push(res2[randomNumber45].faction.name)


    }

    console.log(giveCardName)
    console.log(giveCardImg)


    for (var i = 0;i<giveCardName.length;i++){
      let cardDiv = $('<div>');
            
      newCards.append(cardDiv)
  
      let cardTemplate = $(`
      <div class="card-columns">
      <div class="card card-battle card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${giveCardImg[i]});">
          
      <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
      <h3 class="pt-3 mt-3 mb-4 lh-1 fw-bold">${giveCardName[i]}</h3>
      <ul class="d-flex list-unstyled mt-auto">
      <li class="me-auto">
      <h5 class="badge-battle"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-swords me-2"></i><span class="badge rounded-pill bg-danger">${giveCardAtk[i]}</span></span></h5>
      </li>
      <li class="d-flex align-items-center me-3">
      <h5 class="badge-faction"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-helmet-battle me-2"></i><span class="badge rounded-pill bg-info">${giveCardFac[i]}</span></span></h5>
      </li>
      </ul>
      </div>
      </div>
      </div><!-- card container -->
      `)
      cardDiv.append(cardTemplate)

    }


    var deck_id =res.id

      var card_id = giveCardId[0]

      const response3 = await fetch(`/api/cards/touser`, {
        method: 'POST',
        body: JSON.stringify({  user_id: deck_id, card_id: card_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });


      hasAllCards2()

}

async function hasAllCards2(){
  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  var deck_id =res.id

  var card_id = giveCardId[1]

  const response2 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({  user_id: deck_id, card_id: card_id  }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

}

async function hasAllCards3(){
  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  var deck_id =res.id

  var card_id = giveCardId[2]

  const response2 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({  user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

}

async function hasAllCards4(){
  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  var deck_id =res.id

  var card_id = giveCardId[3]

  const response2 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({  user_id: deck_id, card_id: card_id  }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

}

async function hasAllCards5(){
  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  var deck_id =res.id

  var card_id = giveCardId[4]

  const response2 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id  }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

}

async function userHasZeroCards(){
  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();

  const response2 = await fetch(`/api/cards`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res2 = await response2.json();




  for (var i = 0 ; i<5  ;  i++ ){
    giveCardName.push(res2[i].name)
    giveCardImg.push(res2[i].image_url)
    giveCardAtk.push(res2[i].attack)
    giveCardFac.push(res2[i].faction.name)
    giveCardId.push(res2[i].id)

  }
  console.log(giveCardName)


  for (var i = 0;i<giveCardName.length;i++){
    let cardDiv = $('<div>');
          
    newCards.append(cardDiv)

    let cardTemplate = $(`
    <div class="card-columns">
    <div class="card card-battle card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${giveCardImg[i]});">
        
    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
    <h3 class="pt-3 mt-3 mb-4 lh-1 fw-bold">${giveCardName[i]}</h3>
    <ul class="d-flex list-unstyled mt-auto">
    <li class="me-auto">
    <h5 class="badge-battle"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-swords me-2"></i><span class="badge rounded-pill bg-danger">${giveCardAtk[i]}</span></span></h5>
    </li>
    <li class="d-flex align-items-center me-3">
    <h5 class="badge-faction"><span class="badge rounded-pill bg-light text-dark"><i class="fad fa-helmet-battle me-2"></i><span class="badge rounded-pill bg-info">${giveCardFac[i]}</span></span></h5>
    </li>
    </ul>
    </div>
    </div>
    </div><!-- card container -->
    `)
    cardDiv.append(cardTemplate)

  }


  var deck_id = res.id
  var card_id = giveCardId[0]

  console.log(deck_id)
  console.log(card_id)


  const response3 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  userHasZeroCards2();

}
async function userHasZeroCards2(){

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();


  var deck_id = res.id
  var card_id = giveCardId[1]

  
  const response3 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  userHasZeroCards3();

}


async function userHasZeroCards3(){

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();


  var deck_id = res.id
  var card_id = giveCardId[2]

  
  const response3 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  userHasZeroCards4();
}


async function userHasZeroCards4(){

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();


  var deck_id = res.id
  var card_id = giveCardId[3]

  
  const response3 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  userHasZeroCards5();
}



async function userHasZeroCards5(){

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();


  var deck_id = res.id
  var card_id = giveCardId[4]

  
  const response3 = await fetch(`/api/cards/touser`, {
    method: 'POST',
    body: JSON.stringify({ user_id: deck_id, card_id: card_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  
}




async function start(){

  const response = await fetch(`/api/users/${currentPlayerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const res = await response.json();

  if(!res.cards){

    userHasZeroCards();

  }
  else if(res.cards.length >= 45){

    hasAllCards();

  }
  else{
    
    giveCards();

  }
}



start();