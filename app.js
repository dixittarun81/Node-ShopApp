const path = require('path');

//Setting up express server
const express = require('express');
const bodyParser = require('body-parser');//for parsing chunk of streams
const app = express();

//Setting up view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

//Applying middleware for route
//For admin all the subroutes will begin after /admin
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found',path: '/404' });
});

app.listen(3000);
