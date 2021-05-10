const fs =require('fs')
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const bodyParser = require ('body-parser');
// const stripeSecretKey = process.env.STRIPE_SECRET_KEY
// const stripePublicKey = process.env.STRIPE_PUBLIC_KEY


const stripeSecretKey = 'sk_test_51InahGB6LddKk5YMPkuGj9mL7H5ffe87vqVfInCiku6gS0QdccGqtPdb6H2STV859p8gSgGhdoPRK2HxuM9ONCrg00lgNT3IxG'
const stripePublicKey = 'pk_test_51InahGB6LddKk5YMUfGYmn8pfJ93YWYEfdsfqeRm8pMdeHBexmIsnjibJ60ZRmaKdxCWeBQeG416YNUM0Xri2OA2009caNhR8A'

const stripe = require('stripe')(stripeSecretKey) 

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'ucb project 2',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


app.get('/store', function (req,res){
  fs.readFile('items.json',function(error){
    if(error){
      res.status(500).end()
    }
    else{
      res.render('store.handlebars',{
        stripePublicKey: stripePublicKey,
        items:JSON.parse(data)
    
      })    }
  })
})


app.post('/payment', function (req,res){
  fs.readFile('items.json',function(error){
    if(error){
      res.status(500).end()
    }
    else{
      console.log('purchase')
      total =500
      stripe.charges.create({
        amount: total,
        source: req.body.stripeTokenId,
        currency:'usd'
      })
      .then(function(){
        console.log('charge successful')
        res.json({ message: 'purchase successfully proccessed'})
      }).catch(function(){
        console.log('charge failed')
        res.status(500).end()
      })
          }
  })
})

