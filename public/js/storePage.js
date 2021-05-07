var stripeHandler = StripeCheckout.configure({
    key: stripPublicKey,
    local:'en',
    token: function(token){
        
    }
})

var priceBefore = 0

var price = 0 * 100







function purchaseCart(){
    
    stripeHandler.open({
        amount: price
    })
}