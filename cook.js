//<script language="JavaScript" type="text/javascript">

function utensils() {
  alert('Hi Nick');
} 


// test button
function myFunction() {
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

