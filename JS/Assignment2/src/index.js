let properties1 = {               // object to initialize the class
  imgWrapperId : "wrapper",     // id of the wrapper
  imgContainer : "images",      // id of the image container
  imageWidth : 500,              // width of image
  requiredTime : 5,              // animation time in seconds
  delay: 5                       // amount of delay
};

let properties2 = {               // object to initialize the class
  imgWrapperId : "wrapper1",     // id of the wrapper
  imgContainer : "images1",      // id of the image container
  imageWidth : 500,              // width of image
  requiredTime : 5,              // animation time in seconds
  delay: 4                       // amount of delay
};

let c1 = new Carousel(properties1);
let c2 = new Carousel(properties2);