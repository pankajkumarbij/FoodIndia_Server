const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userEmail: {
    type: String,
  },
  item :{ 
    type: mongoose.Schema.Types.Mixed,
  },
},
{
  timestamps: true
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;