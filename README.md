# Game of Bones
This is a major collaborative project. In this assignment, our team was tasked to create a fullstack application. We built a card game application.

The app contains notable features such as:
- Login and Signup function for users
- Card collection view, unique to each user based on their owned cards
- Deck view and editor page
- A Store page that accepts actual payment information in order to add more cards to the user's collection
- An administrator login that allows new features
  - Data views for total users, cards, decks, and revenue that exist within the application
  - a card creation page that allows the user to add cards to the existing list


The program contains notable features such as:
- A RESTful API created by using Node.js and Express.js
- A Database hosted by MySQL and uses the Sequelize ORM
- GET and POST routes for retrieving and adding new data
- Dynamic image rendering using the Anime.js API
- In app purchases served by the Stripe API
- Authentication with express-session and cookies
- Environment variables for API keys and other sensitive information
- Deployed using Heroku

![Image](./public/assets/demo.gif)

Due: Monday, May 10, 2021

## Getting Started

This application is already deployed, however these instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


You can log in with
- email: demo@email.com, password: password
- email: admin@email.com, password: password

### Prerequisites

Node.js is required.

### Installing
To install the necessary dependencies, run the npm installation command
```
npm install
```
Before launching the program you should also run the data seeding command
```
npm run seed
```

### Testing
There are no tests in this application.

### Usage
You can run the program on the command line with the following command:
```
npm start
```

## Built With
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://api.jquery.com/)
* [Handlebars](https://handlebarsjs.com/)
* [Node.js](https://nodejs.org/en/docs/)
* [Express](https://expressjs.com/)
* [MySQL](https://dev.mysql.com/doc/)
* [Sequelize](https://sequelize.org/master/)

Using the following APIs:
* [Stripe](https://stripe.com/docs/api)

## Deployed Link

* [See Live Site](https://ancient-shelf-96067.herokuapp.com/)
