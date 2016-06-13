function Food(name, type, tools, method, image) {
  this.name = name;
  this.type = type;
  this.tools = tools;
  this.method = method;
  this.image = image;
};

Food.prototype.eat = function() {
  alert("Yum! I hoped you used a " + this.tools);
};

// Proteins
var foods = [
  new Food("poachedEgg", "protein"),
]

Recipe = function(ingredients) {
  this.ingredients = ingredients;
};

function Pantry() {
  this.contents = [];
};

Pantry.prototype.addFoods = function(foods) {
  for (var food in foods) {
    this.contents.append(food);
  }
};

Pantry.prototype.getType = function(type) {
  var results = [];
  for (var food in this.contents) {
    if (food.type == type) {
     results.append(food);
    }
  }
  return results;
};

Pantry.prototype.chooseRandom = function(type) {
  var all = this.getType(type);
  return all[0];
};

// 
pantry.getType('protein')

for (var food in foods) {
  food.eat();
}

var poachedEgg = {
	tools: "microwave", 
	method: "Place in mug, cover the top of the mug  with a paper towel. Microwave for 30 seconds, stir and microwave another 20 secs if needed",
	img: "INSERT_IMG_REF_HERE"
}
var friedEgg = {
	tools:"sandwichPress", 
	method: "Heat up sandwich press and line the base with Al foil. Add some oil to avoid sticking. Crack an egg and fry until cooked through. Remove foil and slide egg onto plate from foil. Cool the press and throw out the al foil"
}
var scrambledEgg = {
	tools: "microwave", 
	method: "Crack two eggs in a bowl. Add a splash of water. Beat thoroughly with a fork. Place in the microwave for 30 seconds, remove and stir, place in microwave another 20 seconds if necessary"
}
var tofu = {
	tools: "sandwichPress", 
	method: "Heat up sandwich press and line the base and top with Al foil. Add some oil to avoid sticking. Slice up the tofu into thin strips. Place the tofu strips onto the foil and close the press. Tofu should be cooked and golden within 2-3 mins. Remove the tofu when at your liking, use this as an opportunity to grill any vegetables you would like by chopping up some mushrooms/ zuchini/ capsicum and placing on the sandwich press for 30 seconds, turning then removing."
}
var bbqChicken = {
	tools: "", 
	method: "Either serve whole on your carb or pull into small bite size pieces"
}
var tunaCan = {
	tools: "", 
	method: "Remove from packet and mix in"
}
var smokedSalmon = {
	tools: "", 
	method: "Remove from packet serve the slices"
}
var leftOver = {tools: "microwave", method: "Heat in microwave for 1-2 minutes, serve on top"
}
var steak = {tools: "sandwichPress", method: "Heat up sandwich press and line the base and top with Al foil. Dress the steak with salt/ pepper/ chilli (whatever you keep on hand and feel in the mood for). Then rub both sides in oil. Place into the press and close the lid. Steak should be cooked to medium rare within c3 minutes (it cooks from both sides so is very fast). Remove the steak, make a small incision to ensure it is cooked through to your liking. Serve either whole or cut into strips. Use this as an opportunity to grill any vegetables you would like by chopping up some mushrooms/ zuchini/ capsicum and placing on the sandwich press for 30 seconds, turning then removing."}}
var lamb = {tools: "sandwichPress", method: "Heat up sandwich press and line the base and top with Al foil. Dress the lamb with salt/ pepper/ chilli (whatever you keep on hand and feel in the mood for). Then rub both sides in oil. Place into the press and close the lid. Lamb should be cooked to medium rare within c3 minutes (it cooks from both sides so is very fast). Remove the lamb, make a small incision to ensure it is cooked through to your liking. Serve either whole or cut into strips. Use this as an opportunity to grill any vegetables you would like by chopping up some mushrooms/ zuchini/ capsicum and placing on the sandwich press for 30 seconds, turning then removing."}}
var fish = {tools: "sandwichPress", method: "Heat up sandwich press. Take your fish fillet and rub both sides with oil, dress with salt pepper/ spices to your liking. Lay salmon onto a sheet of al foil skin side down. Cut lemon slices and lay over the fish. Wrap up the al foil from both sides then seal the edges to create a parcel. Place this in the sandwich press. Fish will be cooked rare within 3 minutes, and cooked thoroughly within 6 minutes. Remove at a point to suit your tastes, unwrap the salmon and serve."}}

// Carbs 
var salad = {tools:"", method: "Wash all vegies. Line a large bowl with torn up leafy veggies. Chop up fresh veggies. Add your chosen protein. Dress with lemon juice and a table spoon of olive oil. If you'd like to make this more filling - try adding some crutons (make your own by crunching toast), crushed papdums (30secs in a microwave), corn, pumpkin, cheese - parmeson and goats cheese both work great"}
var udonSoup = {tools:"hotWater", method: "Place 1 or 2 stock cubes in a large bowl and fill with boiling water. Stir through thoroughly until disolved. Add udon noodles and cover with a plate or tea towel, set aside for 2 minutes. Chop up some veggies - try mushrooms, radish, sprouts, shallots, capsicum. Once 2 minutes has passed stir through to break up the udon and add the veggies. Top up with your chosen protein. Note at this point you can add thinly sliced raw beef if you have used boiling water."}
var potato = {tools:"microwave", method: "Wash potato, poke holes into it with a fork at least 6 times from different angles. Wrap in a wet paper towel and put on a plate. Microwave for 3 minutes, turn over and microwave another 3 minutes. Remove and unwrap, poke with a fork to ensure it is soft and cooked through. If not cook for another minute or 2. Note add a minute each side if you are using sweet potato. Serve on a plate or bowl. Cut open in an X shape and pull all 4 sides appart. Add a spoon of butter to melt through, now add grated cheese to melt on top. At this stage add your meat of choice then top with chopped veggies and sour-cream/ spices if on hand"}
var rice = {tools:"microwave", method: "Open pack, strip back plastic to half way. Microwave for 40 seconds. Serve either as a bed of rice on the plate or using a mug or cup to make a neat heap."}
var quinoa = {tools:"microwave", method: "Pour 1/4 of a cup of quinoa in a bowl. Cover with 1/2 a cup of water. Microwave for 8 minutes, check that all water has not evaporated, if it has add some more. Continue to microwave for 2 minutes. Serve as a bed of quinoa or on top."}
var cousCous = {tools:"hotWater", method: "Pour 1/4 of a cup of cous cous into a bowl. Cover with 1/3 a cup of water. Cover with a tea towel or a plate and set aside for 2-3 minutes. Remove and serve as a bed of cous cous or on top."}
var toast = {tools:"sandwichPress", method: "Put bread in sandwich press. Close, remove in 2-3 minutes when cooked to your liking."}
// var vermicelli = {tools:"hotWater", method: ""}
// var riceNoodles = {tools:"hotWater", method: ""}
// var angelHair = {tools:"hotWater"}
