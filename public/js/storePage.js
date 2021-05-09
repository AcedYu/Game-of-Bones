var removeButton = $('#packRemoveButton')
var cardListDom = $('#cartList')

var buttonKingdom = $('#Kingdom')
var buttonChaos = $('#Chaos')
var buttonForest = $('#Forest')

// var stripeHandler = StripeCheckout.configure({
//     key: stripPublicKey,
//     local:'en',
//     token: function(token){  
//     }
// })

kingdomItemsArray = []
chaosItemsArray = []
forestItemsArray = []

var price = 0
var tax = 1.0725
var priceAfterTax = price * tax
var priceForStripe = priceAfterTax * 100

function addToCartKingdom (){
    var kingdomFaction = 'kingdomFaction'
    kingdomItemsArray.push(kingdomFaction)
    renderCartKingdom();
}
function addToCartChaos (){
    var chaosFaction = 'chaosFaction'
    chaosItemsArray.push(chaosFaction)
    renderCartChaos();

}
function addToCartForest (){
    var forestFaction = 'forestFaction'
    forestItemsArray.push(forestFaction)
    renderCartForest();
}

function removeFromCartFaction1(){

}
function removeFromCartFaction2(){

}
function removeFromCartFaction3(){

}

function renderCartKingdom(){
    let cardDiv = $('<li>');
            
    cardListDom.append(cardDiv)

    let cardTemplate = $(`    
    <li class="list-group-item d-flex justify-content-between align-items-center">
     Kingdom Faction
     <button type="button" class="btn btn-danger">Remove</button>
    </li>`)
    cardDiv.append(cardTemplate)

}
function renderCartChaos(){
    let cardDiv = $('<li>');
            
    cardListDom.append(cardDiv)

    let cardTemplate = $(`    
    <li class="list-group-item d-flex justify-content-between align-items-center">
     Chaos Faction
     <button type="button" class="btn btn-danger">Remove</button>
    </li>`)
    cardDiv.append(cardTemplate)

}
function renderCartForest(){
    let cardDiv = $('<li>');
            
    cardListDom.append(cardDiv)

    let cardTemplate = $(`    
    <li class="list-group-item d-flex justify-content-between align-items-center">
     Forest Faction
     <button type="button" class="btn btn-danger">Remove</button>
     </li>`)
    cardDiv.append(cardTemplate)

}


function purchaseCart(){
    
    stripeHandler.open({
        amount: price
    })
}


function givePlayerCards (){

}

buttonKingdom.on('click',addToCartKingdom)
buttonChaos.on('click',addToCartChaos)
buttonForest.on('click',addToCartForest)

removeButton.on('click',removeFromCart)



