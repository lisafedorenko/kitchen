//<script language="JavaScript" type="text/javascript">

// META VARIABLES
var tools = [
  "Hot Water",
 	"Toaster",
	"Microwave",
	"Sandwich Press"
]; 								// possible tools	
/*var fullMeat = [
	"Vego",
	"BBQ Chicken",
	"Smoked Salmon",
	"Fresh fish",
	"Lamb",
	"Beef",
	"I have leftover meat!"
];								// possible meat 
var fullCarb = [
	"Brown Rice",
	"Quinoa",
	"Cous Cous",
	"Potato",
	"Salad",
	"Sandwich",
	"Toastie",
	"Angel Hair Pasta"
];	*/							// possible carbs 
var veg = [
	"Mushrooms",
	"Capsicum",
	"Tomato",
	"Cucumber",
	"Avacado",
	"Beans",
	"Green Salad",
	"Carrot",
	"Brocolli"
];			// possible vegetables 
var yum = [
	"Avacado",
	"Olive oil",
	"Seasoning",
	"Chilli Flakes",
	"Cheese"
];			// possible flavour additions 

// no appliance necessary
var baseMeat = [
	"Vego",
	"BBQ Chicken",
	"Smoked Salmon",
];				
var baseCarb = [
	"Salad",
	"Sandwich",
];

// with a microwave
var microMeat = [
	"I have leftover meat!"
];								// possible meat 
var microCarb = [
	"Brown Rice",
	"Quinoa",
	"Potato",
];

// with a toaster
var toastMeat = [
];								// possible meat 
var toastCarb = [
	"Toastie",
];

// with a sandwich press
var sandMeat = [
	"Fresh fish",
	"Lamb",
	"Beef",
];								// possible meat 
var sandCarb = [
	"Toastie",
];

// with hot water
var hotMeat = [
];								// possible meat 
var hotCarb = [
	"Cous Cous",
	"Angel Hair Pasta"
];

// MY VARIABLES
var myTools = [];
var myMeat;
var myCarb;
var myVeg = [];
var myYum = [];



// FUNCTIONS
// outputs an array of chosen variables
function chooseMultiple() {
	
}

// outputs an single chosen
function chooseSingle() {

}

function utensils() {
  alert('Hi Nick');
} 

function makeIntoOptionList(where, list) {
  var root = document.createElement('select');
  for (var i = 0; i < list.length; ++i) {
    var e = list[i];
    var item = document.createElement('option');
    item.value = e;
    item.innerHTML = e;
    root.appendChild(item);
  }
  where.appendChild(root);
}

// MAIN BODY
document.write('What\'s in your Kitchen?<br/><div id="foo"></div>');
makeIntoOptionList(document.getElementById('foo'), tools);

/*
document.write('Great! What do you feel like?'<br/>);
document.write(carb);
document.write('Now choose a base'<br/>);
document.write(meat);
document.write('Let's add some veggies'<br/>);
document.write(veg);
document.write('And something for a bit of flavour'<br/>);
document.write(yum);
*/



// learning blah
// test button
/*function myFunction() {
document.getElementById("demo").innerHTML = "Paragraph changed.";
}

// selects multiple items
function getSelectValues(select) {
var result = [];
var options = select && select.options;
var opt;

for (var i=0, iLen=options.length; i<iLen; i++) {
  opt = options[i];
  if (opt.selected) {
  result.push(opt.value || opt.text);
  }
}
alert(result);
return result;
}

// selects utensils 
// function utensils() {
// var selected = document.getElementById('items');
// var myitems = new Array();
// var selObj = document.getElementById('
//}
*/
