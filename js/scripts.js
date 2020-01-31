$(document).ready(function() { 
  $('#form').submit(function(){
  var groceries = [
  $('#item1').val(),
  $('#item2').val(),
  $('#item3').val(),
  ];
  
const newArray = groceries.map(items => items.toUpperCase());
const sortedArray = newArray.sort();
  $('#form').hide();
  sortedArray.forEach(function(items) {
  $('body').append(`<div><ul>${items}</ul></div>`)

});
event.preventDefault();
});


});
// {
//   items.toUpperCase();
//   console.log(newArray);
 




// icecream = ["chocolate","vanilla","coffee"];
// icecream.forEach(function(name) {
//   $('body').append(`<div><h1>${name}</h1></div>` )

//   });
//   $('body').append(`<br>${icecream[0]} Is my favorite flavor` )

// });

// numbers.map(function(number){
//   return number * 2
