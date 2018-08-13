'use strict';

/*******************************************************
 *                  Global Constants 
 ******************************************************/
var productCount = 20; //Should be set to equal the initial number of products

//Product info to load
var productInfo = [['r2d2 bag', 'img/bag.jpg'], ['banana slicer', 'img/banana.jpg'],
  ['ipad toilet paper holder', 'img/bathroom.jpg'], ['breakfast bot', 'img/breakfast.jpg'],
  ['useless boots', 'img/boots.jpg'], ['meatball gum', 'img/bubblgum.jpg'], 
  ['scared chair', 'img/chair.jpg'], ['cthulhu', 'img/cthulhu.jpg'],
  ['duck snout', 'img/dog-duck.jpg'], ['dragon meat', 'img/dragonmeat.jpg'],
  ['utensil pen', 'img/pen.jpg'], ['mop slippers', 'img/pet-sweep.jpg'],
  ['pizza shears', 'img/scissors.jpg'], ['shark sleeping bag', 'img/shark.jpg'],
  ['baby mop', 'img/sweep.png'], ['tauntaun bag', 'img/tauntaun.jpg'],
  ['unicorn meat', 'img/unicorn.jpg'], ['tentacle usb', 'img/usb.gif'],
  ['self-watering can', 'img/water-can.jpg'], ['impossible wine glass', 'img/wine-glass.jpg']
];


/*******************************************************
 *                  Object Definitions 
 ******************************************************/
function Product(name, filepath, description){
  this.name = name;
  this.filepath = filepath;
  this.description = description;
  this.voteCount = 0; //initialized to zero
  this.displayCount = 0; //initialized to zero
  Product.listOfProducts.push(this); //Add Product to listOfProducts
}

Product.listOfProducts = []; //Stores all Product objects created
Product.totalVotes = 0; //Tracks total votes made, reset to zero on page refresh
Product.currentProductsDisplayed = [-1, -1, -1]; //Tracks which products are currently displayed



/*******************************************************
 *                 Function Definitions 
 ******************************************************/

//Generates three random numbers, checking that each number
//is unique and is not in Product.currentProductsDisplayed.
//Then replaces the contents of Product.currentProductsDisplayed
//with those numbers, and adds the corresponding products in 
//Product.listOfProducts to the page for voting
function displayThreeNewProducts(){
  //Generate 3 unique random numbers
  // in range of 0 - productCount
  var newProducts = [];
  var randIndex;
  console.log('starting random number gen');
  for(var i=0; i < 3; i++){
    do{
      randIndex = Math.floor(Math.random() * productCount);
      console.log('random index = ' + randIndex);
    }while(newProducts.includes(randIndex) || Product.currentProductsDisplayed.includes(randIndex));
    //add random number to randomNumbers
    newProducts.push(randIndex);
  }

  console.log(`newProducts has indices: ${newProducts}`);

  //Display each of the products and update respective display counts
  for(var j=0; j < 3; j++){
    var product = document.getElementsByTagName('img')[j];
    var newProductIndex = newProducts[j];
    product.src = Product.listOfProducts[newProductIndex].filepath;
    Product.listOfProducts[newProductIndex].displayCount++;
  }
  return;
}

function displayResults(){

}



/*******************************************************
 *                        Main 
 ******************************************************/
//Create Product objects
for(var i=0; i < productCount; i++){
  var j = 0;
  new Product(productInfo[i][j++], productInfo[i][j]);
}
console.log('created product objects');

//On page load/refresh, display 3 pictures
displayThreeNewProducts();

//On image click, display 3 new products (making sure to update
//vote count). If voteCt == 25
// Replace section header to specify results
// Remove content from ul of voting images
// Grab the ordered list element 
// Sort the list of products by total vote count
// For each image in the list of products
// 	Create a list item, and an image item (append to appropriate parents)
// 	Set the image src = to product source 
// 	Set a label with “n votes for the product_name”