const fs = require('fs');
const User = require('../models/User');
const Product = require('../models/Product');

exports.getProduct = (req, res) => {
  Product.findOne({ url: { $regex: req.params.productId, $options: "i" } }, function(err, product){
    if (err) console.log(err);
    console.log(product);
    res.render('product', {
      title: 'Product',
      name: product.name,
      price: product.price,
      description: product.description,
      url: product.url.substr(product.url.indexOf('/'), product.url.length-1) //removes public from the path
    });
  });
};
