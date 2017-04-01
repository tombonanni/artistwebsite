const fs = require('fs');
const User = require('../models/User');

exports.getGallery = (req, res) => {
  const uploadFolder = 'public/gallery';
  var images = [];
  fs.readdir(uploadFolder, (err, files) => {
    files.forEach(file => {
      images.push(file)
    });
  });
  User.findOne({ email: "joecugini@gmail.com" }, function(err, user){
    if (err) console.log(err);
    if (user === null) {
      res.render('gallery', {
        title: 'Gallery',
        images: images
      });
    } else {
      res.render('gallery', {
        title: 'Gallery',
        images: images,
        twitter: user.twitter,
        facebook: user.facebook,
        instagram: user.instagram
      });
    }
  });
};
