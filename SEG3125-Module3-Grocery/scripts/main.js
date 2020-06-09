
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, accordianName) {
	// Hides/Shows the content for the relevant 
	if (document.getElementById(accordianName).style.display == "block"){
		document.getElementById(accordianName).style.display = "none";
	}else{
		document.getElementById(accordianName).style.display = "block";	
	}
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbox

function populateListProductChoices(slct2) {
	// if the user checked None box (all other options should not be considered (unchecked))
	if (document.getElementById("None").checked){
		document.getElementById("Vegetarian").checked = false;
		document.getElementById("GlutenFree").checked = false;
		document.getElementById("Organic").checked = false;
	}
    var s2 = document.getElementById(slct2);
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";	
	
	// sorts products by price 
	products.sort(function(a,b){
		return a.price - b.price;
	});
	
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products);
	
	// removes all previous information (so they're arent any duplicates)
	while(s2.childNodes.length > 0){
		s2.removeChild(s2.childNodes[0]);
	}
	

	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i][0];
		var productPrice = optionArray[i][1];
		// create the checkbox and add in HTML DOM
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName +": $"+productPrice));
		s2.appendChild(label);
		
		var view = document.createElement('img');
		view.src = "../images/"+productName+".jpg";
		s2.appendChild(view);
		// Uses a number text input to allow users to select how many of each product they want
		var numberBox = document.createElement("input");
		numberBox.type = "number";
		numberBox.name = "product";
		numberBox.id = productName;
		s2.appendChild(numberBox);
		

		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].value > 0) { // only show the objects for which the user entered a value 
			console.log(ele[i]);
			para.appendChild(document.createTextNode(ele[i].value +" "+ele[i].id));
			para.appendChild(document.createElement("br"));
			chosenProducts.push([ele[i].id,ele[i].value]);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}

