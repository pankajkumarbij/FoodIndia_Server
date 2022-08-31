const Cart = require('../models/cart');

const cartController={

  CartPost(req, res){
    const userEmail = req.body.userEmail;
    const item = req.body.item;
    var newCart = new Cart({userEmail,item})
    newCart.save()
    .then(cart => {
      var message={
        success:"Successfully Saved!"
      };
      res.json(message);
    })
    .catch(err => {
      var message = {
        error:"Something went wrong!"
      };
      res.json(message);
    })
  },

  CartGetByEmail(req, res){
    Cart.find({'userEmail':req.params.email}, function(err, cart){
      if(err){
          console.log(err);
      }
      else {
          res.json(cart);
      }
    });
  },

  CartGet(req, res){
    Cart.find({}, function(err, cart){
      if(err){
          console.log(err);
      }
      else {
          res.json(cart);
      }
    });
  },

  CartDeleteByEmail(req, res){
    Cart.findOneAndRemove({'userEmail':req.params.email})
    .then((cart) => {
      if(cart){
        var message = { 
          success: "data is successfully saved" 
        };
        res.json(message);
      }else{
        var message = { 
          error: "not found" 
        };
        res.json(message);
      }
    }).catch(err => {
      var message = { success: false, err: err };
      res.json(message);
    })
  },
    
}

module.exports = cartController;