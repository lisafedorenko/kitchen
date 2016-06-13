// ------------------------------------------------------------------
// Types of things, useful instead of the strings as it means a typo
// will print a useful error [and helps later if you wish to process
// the list of all tools, for example].
// They might even become a class of their own!
// ------------------------------------------------------------------
var NONE = "";

// Types of food
var PROTEIN = "protein";
var CARB = "carb";

// Types of tool.
var HOT_WATER = "hotWater";
var MICROWAVE = "microwave";
var SANDWICH_PRESS = "sandwichPress";

// Data representation for a single food item.
function Food(name, type, tools, method, image) {
  this.name = name;
  this.type = type;
  this.tools = tools;
  this.method = method;
  this.image = image || "Image not found";
};

Food.prototype.eat = function() {
  alert("Yum! I hoped you used a " + this.tools);
};

// ALL_FOODS list filled in later.
var ALL_FOODS = [];

// The pantry represents the collection of food available, and has
// methods to simplify choosing by type.
function Pantry() {
  this.contents = ALL_FOODS;
};

Pantry.prototype.getType = function(type) {
  var results = [];
  for (var i = 0; i < this.contents.length; ++i) {
    var food = this.contents[i];
    if (food.type == type) {
     results.push(food);
    }
  }
  return results;
};

Pantry.prototype.chooseRandom = function(type) {
  var all = this.getType(type);
  return all[0];
};

// Examples: 
// pantry.getType('protein')

// for (var food in foods) {
//  food.eat();
// }

// ------------------------------------------------------------------
// After this point it's just a list of food:
// ------------------------------------------------------------------

ALL_FOODS = [
new Food("poachedEgg", 
  PROTEIN,
	MICROWAVE, 
	"Place in mug, cover the top of the mug  with a paper towel. Microwave for 30 seconds, stir and microwave another 20 secs if needed",
	"INSERT_IMG_REF_HERE"
),
new Food("friedEgg", 
  PROTEIN,
	SANDWICH_PRESS, 
	"Heat up sandwich press and line the base with Al foil. Add some oil to avoid sticking. Crack an egg and fry until cooked through. Remove foil and slide egg onto plate from foil. Cool the press and throw out the al foil"
),
new Food("scrambledEgg", 
  PROTEIN,
	MICROWAVE, 
	"Crack two eggs in a bowl. Add a splash of water. Beat thoroughly with a fork. Place in the microwave for 30 seconds, remove and stir, place in microwave another 20 seconds if necessary"
),
new Food("tofu", 
  PROTEIN,
	SANDWICH_PRESS, 
	"Heat up sandwich press and line the base and top with Al foil. Add some oil to avoid sticking. Slice up the tofu into thin strips. Place the tofu strips onto the foil and close the press. Tofu should be cooked and golden within 2-3 mins. Remove the tofu when at your liking, use this as an opportunity to grill any vegetables you would like by chopping up some mushrooms/ zuchini/ capsicum and placing on the sandwich press for 30 seconds, turning then removing."
),
new Food("bbqChicken", 
  PROTEIN,
	NONE, 
	"Either serve whole on your carb or pull into small bite size pieces"
),
new Food("tunaCan", 
  PROTEIN,
	NONE, 
	"Remove from packet and mix in"
),
new Food("smokedSalmon", 
  PROTEIN,
	NONE, 
	"Remove from packet serve the slices"
),
new Food("leftOver",
  PROTEIN,
  MICROWAVE,
  "Heat in microwave for 1-2 minutes, serve on top"
),
new Food("steak",
  PROTEIN,
  SANDWICH_PRESS,
  "Heat up sandwich press and line the base and top with Al foil. Dress the steak with salt/ pepper/ chilli (whatever you keep on hand and feel in the mood for). Then rub both sides in oil. Place into the press and close the lid. Steak should be cooked to medium rare within c3 minutes (it cooks from both sides so is very fast). Remove the steak, make a small incision to ensure it is cooked through to your liking. Serve either whole or cut into strips. Use this as an opportunity to grill any vegetables you would like by chopping up some mushrooms/ zuchini/ capsicum and placing on the sandwich press for 30 seconds, turning then removing."),
new Food("lamb",
  PROTEIN,
  SANDWICH_PRESS,
  "Heat up sandwich press and line the base and top with Al foil. Dress the lamb with salt/ pepper/ chilli (whatever you keep on hand and feel in the mood for). Then rub both sides in oil. Place into the press and close the lid. Lamb should be cooked to medium rare within c3 minutes (it cooks from both sides so is very fast). Remove the lamb, make a small incision to ensure it is cooked through to your liking. Serve either whole or cut into strips. Use this as an opportunity to grill any vegetables you would like by chopping up some mushrooms/ zuchini/ capsicum and placing on the sandwich press for 30 seconds, turning then removing."),
new Food("fish",
  PROTEIN,
  SANDWICH_PRESS,
  "Heat up sandwich press. Take your fish fillet and rub both sides with oil, dress with salt pepper/ spices to your liking. Lay salmon onto a sheet of al foil skin side down. Cut lemon slices and lay over the fish. Wrap up the al foil from both sides then seal the edges to create a parcel. Place this in the sandwich press. Fish will be cooked rare within 3 minutes, and cooked thoroughly within 6 minutes. Remove at a point to suit your tastes, unwrap the salmon and serve."),
new Food("salad",
  CARB,
  NONE,
  "Wash all vegies. Line a large bowl with torn up leafy veggies. Chop up fresh veggies. Add your chosen protein. Dress with lemon juice and a table spoon of olive oil. If you'd like to make this more filling - try adding some crutons (make your own by crunching toast), crushed papdums (30secs in a microwave), corn, pumpkin, cheese - parmeson and goats cheese both work great"),
new Food("udonSoup",
  CARB,
  HOT_WATER,
  "Place 1 or 2 stock cubes in a large bowl and fill with boiling water. Stir through thoroughly until disolved. Add udon noodles and cover with a plate or tea towel, set aside for 2 minutes. Chop up some veggies - try mushrooms, radish, sprouts, shallots, capsicum. Once 2 minutes has passed stir through to break up the udon and add the veggies. Top up with your chosen protein. Note at this point you can add thinly sliced raw beef if you have used boiling water."),
new Food("potato",
  CARB,
  MICROWAVE,
  "Wash potato, poke holes into it with a fork at least 6 times from different angles. Wrap in a wet paper towel and put on a plate. Microwave for 3 minutes, turn over and microwave another 3 minutes. Remove and unwrap, poke with a fork to ensure it is soft and cooked through. If not cook for another minute or 2. Note add a minute each side if you are using sweet potato. Serve on a plate or bowl. Cut open in an X shape and pull all 4 sides appart. Add a spoon of butter to melt through, now add grated cheese to melt on top. At this stage add your meat of choice then top with chopped veggies and sour-cream/ spices if on hand"),
new Food("rice",
  CARB,
  MICROWAVE,
  "Open pack, strip back plastic to half way. Microwave for 40 seconds. Serve either as a bed of rice on the plate or using a mug or cup to make a neat heap."),
new Food("quinoa",
  CARB,
  MICROWAVE,
  "Pour 1/4 of a cup of quinoa in a bowl. Cover with 1/2 a cup of water. Microwave for 8 minutes, check that all water has not evaporated, if it has add some more. Continue to microwave for 2 minutes. Serve as a bed of quinoa or on top."),
new Food("cousCous",
  CARB,
  HOT_WATER,
  "Pour 1/4 of a cup of cous cous into a bowl. Cover with 1/3 a cup of water. Cover with a tea towel or a plate and set aside for 2-3 minutes. Remove and serve as a bed of cous cous or on top."),
new Food("toast",
  CARB,
  SANDWICH_PRESS,
  "Put bread in sandwich press. Close, remove in 2-3 minutes when cooked to your liking."),
//   new Food("vermicelli", HOT_WATER, NONE),
//   new Food("riceNoodles", HOT_WATER, NONE),
//   new Food("angelHair", HOT_WATER),
];
