//<script language="JavaScript" type="text/javascript">

// META VARIABLES
var tools = [
  "Hot Water",
 	"Toaster",
	"Microwave",
	"Sandwich Press",
  "None"
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
function getMultiple(select) {
	var chosen = [];
	var options = select && select.options;
	var opt;
	for (var i=0; i<options.length; i++) {
		opt = options[i];
		if (opt.selected) {
			chosen.push(opt.value || opt.text);
		}
	}
	return chosen;
}

// outputs an single chosen
function chooseSingle() {

}

function nick() {
  alert('Hi Nick');
} 

function makeIntoOptionList(where, list, multi) {
  var root = document.createElement('select');
	if (multi) {
		root.multiple = true;
	}
  for (var i = 0; i < list.length; ++i) {
    var e = list[i];
    var item = document.createElement('option');
    item.value = e;
    item.innerHTML = e;
    root.appendChild(item);
  }
  where.appendChild(root);
	return root;
}

/***************************************************************/
/*******************       MAIN BODY       *********************/
/***************************************************************/

// Body makers
var content = document.getElementById('body');
var content1 = document.getElementById('body1');
var content2 = document.getElementById('body2');
var content3 = document.getElementById('body3');

document.getElementById('title').innerHTML = "What\'s in your Kitchen?";

// Choose utensils
var mytools = makeIntoOptionList(content, tools, true);
var btn = document.createElement("BUTTON");
btn.innerHTML = "Next";
content.appendChild(btn);

// Choose the meal
btn.onclick = function () {
  document.getElementById('title').innerHTML = "What do you feel like today?";
  document.getElementById('title1').innerHTML = "Now choose a base";
  document.getElementById('title2').innerHTML = "Let's add some veggies";
  document.getElementById('title3').innerHTML = "And some yum";
  myTools = getMultiple(mytools);
  content.innerHTML = myTools;

	// identify possible meats and carbs - PRESENTLY DONE WITH BASE LIST

	var mymeat = makeIntoOptionList(content, baseMeat, false);
	var mycarb = makeIntoOptionList(content1, baseCarb, false);
	var myveg = makeIntoOptionList(content2, veg, true);
	var myyum = makeIntoOptionList(content3, yum, true);

	// Save selection 
  var btn1 = document.createElement("BUTTON");
	btn1.innerHTML = "Next";
	document.getElementById('body3').appendChild(btn1);

	// Generate a recipe
  btn1.onclick = function () {
		
    document.getElementById('title').innerHTML = "Great - today we are making - MYSTERY FOOD!";
	  myMeat = getMultiple(mymeat);
		myCarb = getMultiple(mycarb);
		myVeg = getMultiple(myveg);
  	myYum = getMultiple(myyum);
    
		content.innerHTML = myMeat;
		content1.innerHTML = myCarb;
		content2.innerHTML = myVeg;
		content3.innerHTML = myYum;
		document.getElementById('title1').innerHTML = "";
		document.getElementById('title2').innerHTML = "";
		document.getElementById('title3').innerHTML = "";
  };

};

