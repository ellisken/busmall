'use strict';

/*******************************************************
 *                  Global Constants 
 ******************************************************/
var productCount = 15; //Should be set to equal the initial number of products



/*******************************************************
 *                  Object Definitions 
 ******************************************************/
function Product(name, filepath, description){
  this.name = name;
  this.filepath = filepath;
  this.description = description;
  this.voteCount = 0; //initialized to zero
  this.clickCount = 0; //initialized to zero
  Product.listOfProducts.push(this); //Add Product to listOfProducts
}

Product.listOfProducts = []; //Stores all Product objects created
Product.totalVotes = 0; //Tracks total votes made, reset to zero on page refresh
Product.currentProductsDisplayed = []; //Tracks which products are currently displayed



/*******************************************************
 *                 Function Definitions 
 ******************************************************/

//Generates three random numbers, checking that each number
//is unique and is not in Product.currentProductsDisplayed.
//Then replaces the contents of Product.currentProductsDisplayed
//with those numbers, and adds the corresponding products in 
//Product.listOfProducts to the page for voting
function displayThreeNewProducts(){

}

function displayResults(){

}



/*******************************************************
 *                        Main 
 ******************************************************/
//Create Product objects
for(var i=0; i < productCount; i++){
  new Product();
}


//On page load/refresh, display 3 pictures
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