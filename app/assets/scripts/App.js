//for hiding all h1 ement
var $ = require('jquery');

var Person = require('./modules/Person');

var amit = new Person("Amit Kumar", "Red");
amit.greet();

var susy = new Person("Susy Khan", "Pink");
susy.greet();


//jquery
$("h1").remove();