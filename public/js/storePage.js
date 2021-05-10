
var removeButton = $('#packRemoveButton')
var cardListDom = $('#cartList')

var buttonKingdom = $('#Kingdom')
var buttonChaos = $('#Chaos')
var buttonForest = $('#Forest')

kingdomItemsArray = []
chaosItemsArray = []
forestItemsArray = []

var price = 500
var tax = 1.07
var priceAfterTax = price * tax
var priceForStripe = priceAfterTax * 100


var stripeHandler = stripeCheckout.configure({
    key:stripePublicKey,
    locale:'auto',
    token: function(token){
        fetch('/purchase',{
            method:'POST',
            headers: { 'Content-Type': 'application/json', 
            'Accept':'application/json'
            },
            body: JSON.stringify({
                stripTokenId: token.id,

            })

        })

    }}
)

function purchaseCart(){
    
    stripeHandler.open({
        amount: price
    })
}


function givePlayerCards (){

}

buttonKingdom.on('click',purchaseCart)
buttonChaos.on('click',purchaseCart)
buttonForest.on('click',purchaseCart)

//potential cart functionality

// function addToCartKingdom (){
//     var kingdomFaction = 'kingdomFaction'
//     kingdomItemsArray.push(kingdomFaction)
//     renderCartKingdom();
// }
// function addToCartChaos (){
//     var chaosFaction = 'chaosFaction'
//     chaosItemsArray.push(chaosFaction)
//     renderCartChaos();

// }
// function addToCartForest (){
//     var forestFaction = 'forestFaction'
//     forestItemsArray.push(forestFaction)
//     renderCartForest();
// }

// function removeFromCartFaction1(){

// }
// function removeFromCartFaction2(){

// }
// function removeFromCartFaction3(){

// }

// function renderCartKingdom(){
//     let cardDiv = $('<li>');
            
//     cardListDom.append(cardDiv)

//     let cardTemplate = $(`    
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//      Kingdom Faction
//      <button type="button" class="btn btn-danger">Remove</button>
//     </li>`)
//     cardDiv.append(cardTemplate)

// }
// function renderCartChaos(){
//     let cardDiv = $('<li>');
            
//     cardListDom.append(cardDiv)

//     let cardTemplate = $(`    
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//      Chaos Faction
//      <button type="button" class="btn btn-danger">Remove</button>
//     </li>`)
//     cardDiv.append(cardTemplate)

// }

// function renderCartForest(){
//     let cardDiv = $('<li>');
            
//     cardListDom.append(cardDiv)

//     let cardTemplate = $(`    
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//      Forest Faction
//      <button type="button" class="btn btn-danger">Remove</button>
//     </li>`)
//     cardDiv.append(cardTemplate)

// }