const path = require('path');

//Setting up express server
const express = require('express');
const bodyParser = require('body-parser');//for parsing chunk of streams
const app = express();

const mongoose = require('mongoose');





//Setting up view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const User = require('./models/user');


app.use(bodyParser.urlencoded({ extended: false }));

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
  User.findById('5eedf9aa10b1613f542a8745')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {console.log(err)});

});


//Applying middleware for route
//For admin all the subroutes will begin after /admin
app.use('/admin', adminRoutes);
app.use(shopRoutes);



app.use(errorController.get404)

mongoose.connect(
'mongodb+srv://dixittarun81:govind2607@cluster0-uk5n8.mongodb.net/shop?retryWrites=true&w=majority'
)
.then(result => {
  User.findOne().then(user => {
    if(!user){
      const user = new User({
        name: 'tarun',
        email: 'tarun@test.com',
        cart: {
          item: []
        }
      });
      user.save();
    }
  });
  app.listen(3001);

})
.catch(err => {
  console.log(error)
})

