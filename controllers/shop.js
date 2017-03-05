const fs = require('fs');
const User = require('../models/User');
const Product = require('../models/Product');
const async = require('async');

exports.getShop = (req, res) => {
  const uploadFolder = 'public/shop';
  User.findOne({ email: "joe@admin.com" }, function(err, user){
    if (err) console.log(err);
    if (user === null){
      Product.find({}, function(err, products){
        if (err) console.log(err);
        res.render('shop', {
          title: 'Shop',
          products: products
        });
      });
    } else {
      Product.find({}, function(err, products){
        if (err) console.log(err);
        res.render('shop', {
          title: 'Shop',
          products: products,
          twitter: user.twitter,
          facebook: user.facebook,
          instagram: user.instagram
        });
      });
    }
  });
};
