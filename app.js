const path = require('path');

//Setting up express server
const express = require('express');
const bodyParser = require('body-parser');//for parsing chunk of streams
const app = express();

const mongoConnect = require('./util/database').mongoConnect;



//Setting up view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');


app.use(bodyParser.urlencoded({ extended: false }));

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
  next();
});

//Applying middleware for route
//For admin all the subroutes will begin after /admin
app.use('/admin', adminRoutes);
//app.use(shopRoutes);



app.use(errorController.get404)

mongoConnect(()=> {
  
  app.listen(3001);
});
