	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "tuna",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 16.00
	},
	{
		name: "oats",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.39
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.99
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 8.99
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.99
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 0.99
	},
	{
		name: "orange",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 0.99
	},
	{
		name: "ground pork",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 14.99
	},
	{
		name: "coconut",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 6.99
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
	let product_names = [];
	let veg_restriction = document.getElementById("Vegetarian").checked;
	let gluten_restriction = document.getElementById("GlutenFree").checked;
	let organic_restriction = document.getElementById("Organic").checked;
	let restrictions = getRestrictions(veg_restriction,gluten_restriction,organic_restriction);
	for (let i=0; i<prods.length; i+=1) {
		if (restrictions == "VegGlutenOrganic" && prods[i].vegetarian == true && prods[i].glutenFree == true && prods[i].organic == true){
			product_names.push([prods[i].name,prods[i].price]);
		}else if (restrictions == "VegGluten" && (prods[i].vegetarian == true) && prods[i].glutenFree == true){
			product_names.push([prods[i].name,prods[i].price]);
		}else if (restrictions == "VegOrganic" && (prods[i].vegetarian == true) && prods[i].organic == true){
			product_names.push([prods[i].name,prods[i].price]);
		}else if (restrictions == "GlutenOrganic" && (prods[i].glutenFree == true) && prods[i].organic == true){
			product_names.push([prods[i].name,prods[i].price]);
		}else if (restrictions == "Veg" && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name,prods[i].price]);
		}else if (restrictions == "Gluten" && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name,prods[i].price]);
		}else if (restrictions == "Organic" && (prods[i].organic == true)){
			product_names.push([prods[i].name,prods[i].price]);
		}else if (restrictions == ""){
			product_names.push([prods[i].name,prods[i].price]);
		}
	}
	return product_names;
}
// Returns requirements by checking which boxes were checked (res1 == vegetarian , res2 == glutenFree , res3 == organic)
function getRestrictions(res1,res2,res3){
  let restrictions = "";
  
  if (res1){
	  restrictions += "Veg";
  }
  if (res2){
	  restrictions += "Gluten";
  }
  
  if(res3){
	  restrictions += "Organic";
  }
  
  return restrictions;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
