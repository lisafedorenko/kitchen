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

/************************* MAIN BODY ***************************/
// Display text
document.write('What\'s in your Kitchen?<br/><div id="foo"></div>');

// Choose utensils
var mytools = makeIntoOptionList(document.getElementById('foo'), tools, true);
var btn = document.createElement("BUTTON");
btn.appendChild(document.createTextNode("Next"));
document.body.appendChild(btn);

btn.onclick = function () {
  document.write('What do you feel like today?<br/><div id="foo"></div>');
  document.write('you have the following tools:');
  myTools = getMultiple(mytools);
  document.write(myTools);

	// identify possible meats and carbs - PRESENTLY DONE WITH BASE LIST

	
var btn1 = document.createElement("BUTTON");
	btn1.appendChild(document.createTextNode("Next"));
	document.body.appendChild(btn1);

  btn1.onclick = function () {
		// choose a meat
		var mymeat = makeIntoOptionList(document.getElementById('foo'), baseMeat, false);
		document.write('Now choose a base<br/><div id="foo"></div>');
		myMeat = getMultiple(mymeat);
 		var mycarb = makeIntoOptionList(document.getElementById('foo'), baseCarb, false);
	  myCarb = getMultiple(mycarb);
		document.write('Let\'s add some veggies');
	  var myveg = makeIntoOptionList(document.getElementById('foo'), veg, true);
	  myVeg = getMultiple(myveg);
 		document.write('And something for a bit of flavour');
 		var myyum = makeIntoOptionList(document.getElementById('foo'), yum, true);
  	myYum = getMultiple(myyum);
  
		
    document.write(myTools);
    document.write(myMeat);
    document.write(myCarb);
    document.write(myVeg);
    document.write(myYum);
		/*var btn1 = document.createElement("BUTTON");
		btn1.appendChild(document.createTextNode("Next"));
		document.body.appendChild(btn1);*/
  };

//  nick();
};


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


