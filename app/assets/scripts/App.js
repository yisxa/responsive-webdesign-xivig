//for hiding all h1 ement
var $ = require('jquery');

var Person = require('./modules/Person');

var amit = new Person("Amit Kumar", "Red");
amit.greet();

var susy = new Person("Susy Khan", "Pink");
susy.greet();


//jquery for removing h1 h2 and h3 heading
$("h1").remove();
$("h2").remove();
$("h3").remove();