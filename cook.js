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

function contains (j,k) {
	for (var i = 0; i < j.length; i++) {
		if (j[i] === k || (j[i] !== j[i] && k !== k )) {
			return true;
		}
	}
	return false;
};

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

// add an image
var img = document.createElement("img");
img.src = "images/beef2.jpg";
img.style.height = "100px";
img.style.width= "100px";
content1.appendChild(img);

// Choose the meal
btn.onclick = function () {
  document.getElementById('title').innerHTML = "What do you feel like today?";
  document.getElementById('title1').innerHTML = "Now choose a base";
  //document.getElementById('title2').innerHTML = "Let's add some veggies";
  //document.getElementById('title3').innerHTML = "And some yum";
  myTools = getMultiple(mytools);
  content.innerHTML = myTools;

	// Identify possible meats and carbs 
	if(contains(myTools,"Microwave")) {
		baseMeat.push("Left overs");
		baseCarb.push("Brown rice");
		baseCarb.push("Quinoa");
		baseCarb.push("Potato");
		content.innerHTML = baseCarb;
	};

	if(contains(myTools,"Toaster")) {
		baseCarb.push("Toast");
	};
	
	if(contains(myTools,"Sandwich Press")) {
		baseMeat.push("Beef");
		baseMeat.push("Lamb");
		baseMeat.push("Fresh Fish");
		baseCarb.push("Toast");
	};

	if(contains(myTools,"Hot Water")) {
		baseCarb.push("Cous cous");
		baseCarb.push("Angel Hair Pasts");
	};
	
	// print the Meat options
	var mymeat = makeIntoOptionList(content, baseMeat, false);
	//for (var i = 0; i < baseMeat.length; i++) {
	//	document.createElement("img").src(LOOK UP CORRESPONDING ELEMENT)
	//}
// add an image
/*var img = document.createElement("img");
img.src = "images/beef2.jpg";
img.style.height = "100px";
img.style.width= "100px";
content1.appendChild(img);*/


	var mycarb = makeIntoOptionList(content1, baseCarb, false);

	//var myveg = makeIntoOptionList(content2, veg, true);
	//var myyum = makeIntoOptionList(content3, yum, true);

	// Save selection 
  var btn1 = document.createElement("BUTTON");
	btn1.innerHTML = "Next";
	document.getElementById('body3').appendChild(btn1);

	// Generate a recipe
  btn1.onclick = function () {
		
    document.getElementById('title').innerHTML = "Great - today we are making - MYSTERY FOOD!";
	  myMeat = getMultiple(mymeat);
		myCarb = getMultiple(mycarb);
		//myVeg = getMultiple(myveg);
  	//myYum = getMultiple(myyum);
    
		content.innerHTML = myMeat;
		content1.innerHTML = myCarb;
		content2.innerHTML = myVeg;
		content3.innerHTML = myYum;
		document.getElementById('title1').innerHTML = "";
		document.getElementById('title2').innerHTML = "";
		document.getElementById('title3').innerHTML = "";
  };

};

