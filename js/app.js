'use strict';

/*******************************************************
 *                  Global Constants 
 ******************************************************/
var productCount = 20; //Should be set to equal the initial number of products
var voteCountForResults = 3; //Max number of votes before results are displayed

//Product info to load
var productInfo = [['r2d2 bag', 'img/bag.jpg'], ['banana slicer', 'img/banana.jpg'],
  ['ipad toilet paper holder', 'img/bathroom.jpg'], ['breakfast bot', 'img/breakfast.jpg'],
  ['useless boots', 'img/boots.jpg'], ['meatball gum', 'img/bubblegum.jpg'], 
  ['scared chair', 'img/chair.jpg'], ['cthulhu', 'img/cthulhu.jpg'],
  ['duck snout', 'img/dog-duck.jpg'], ['dragon meat', 'img/dragon.jpg'],
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
Product.currentProductsDisplayed = []; //Tracks which products are currently displayed



/*******************************************************
 *                 Function Definitions 
 ******************************************************/

//Compare function for Array.sort() to
//sort by Product vote count in DESCENDING order.
//Note: a and b are Product objects in the 
//Product.listOfProducts array
function compareVoteCount(a, b){
  if(a.voteCount > b.voteCount){
    return -1;
  }
  if(a.voteCount === b.voteCount){
    return 0;
  }
  return 1;
}


//Displays three new products to the page
function displayThreeNewProducts(){
  //Generate 3 unique random numbers
  // in range of 0 - productCount
  var newProducts = [];
  var randIndex;
  for(var i=0; i < 3; i++){
    do{
      randIndex = Math.floor(Math.random() * productCount);
    }while(newProducts.includes(randIndex) || Product.currentProductsDisplayed.includes(randIndex));
    //add random number to randomNumbers
    newProducts.push(randIndex);
  }

  //Display each of the products and update respective display counts
  for(var j=0; j < 3; j++){
    var product = document.getElementsByTagName('img')[j];
    var newProductIndex = newProducts[j];
    product.src = Product.listOfProducts[newProductIndex].filepath;
    product.alt = Product.listOfProducts[newProductIndex].name;//make alt == product name
    product.id = newProductIndex; //Set id == the index of that product in Product list
    Product.listOfProducts[newProductIndex].displayCount++;
  }

  //Replace contents of currentProductsDisplayed with new Products
  Product.currentProductsDisplayed = newProducts;
  return;
}


//Adds each product with its vote count to the DOM
function createResultsList(products){

}



//Displays the voting results in order from
//most popular to least

// Replace section header to specify results
// Hide voting images
// Grab the ordered list element 
// Sort the list of products by total vote count
// For each image in the list of products
// 	Create a list item, and an image item (append to appropriate parents)
// 	Set the image src = to product source 
// 	Set a label with “n votes for the product_name”
function displayResults(){
  //Sort list of products by vote count in descending order
  Product.listOfProducts.sort(compareVoteCount);

  //Replace section header to specify results
  document.getElementById('sectionHeader').innerText = 'Voting Results';
  //Replace section contents with instructions
  document.getElementById('sectionContents').innerHTML = 'Results are listed in descending order from most popular to least.';
  //Hide the product voting list display
  document.getElementById('voteList').style.display = 'none';



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

//On page load, display 3 pictures
displayThreeNewProducts();
console.log('displayed 3 initial products');

//Get image elements
var productsOnDisplay = document.getElementsByTagName('img');

//Add event listener to each image
for(var j=0; j < 3; j++){
  var selectedProduct = productsOnDisplay[j];
  selectedProduct.addEventListener('click', function(e){
    //update total vote count
    Product.totalVotes++;
    var currentProductIndex = e.target.id; //get index of clicked product
    Product.listOfProducts[currentProductIndex].voteCount++; //increment vote count for clicked product
    console.log('id of product clicked: ' + currentProductIndex);
    //If vote count == 25, display results!
    if(Product.totalVotes === voteCountForResults){
      Product.totalVotes = 0; //reset total vote count
      console.log('25 votes counted');
      displayResults();
    }
    //Else, display three new products
    else{
      displayThreeNewProducts();
    }
  });
}

//vote count). If voteCt == 25
// Replace section header to specify results
// Remove content from ul of voting images
// Grab the ordered list element 
// Sort the list of products by total vote count
// For each image in the list of products
// 	Create a list item, and an image item (append to appropriate parents)
// 	Set the image src = to product source 
// 	Set a label with “n votes for the product_name”