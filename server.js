// require dependencies
const path = require('path');
const express = require('express');
// import express session
const session = require('express-session');
const exphbs = require('express-handlebars');
// require folders for api routes and handlebar helper methods
const routes = require('./controllers')
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.store)

const app = express();
const PORT = process.env.PORT || 3001;
// incorporate the custom helper methods 
const hbs = exphbs.create({ helpers });
// sets up sessions with cookies 
const sess = {
    secret : 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
// inform express.js which template engine we are using 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))
})