$(function() {
//Market Report Table //

function Property(street, city, state, price, posted) {

	this.constructor.all.push(this);

	this.street = street;
	this.city = city;
	this.state = state;
	this.price = price;
	this.posted = new Date(posted);

	var self = this;

	function isNew() {
		var currentDate = new Date(),
			daysListed = (((((currentDate - self.posted)/1000)/60)/60)/24);
		if (daysListed < Property.maxDays) {
			return '<span class="new">&#9733;</span>'; }
		else {
			return '';
		}
	}

	this.el = "<tr>"+
	"<td>"+isNew()+this.street+"</td>"+
	"<td>"+this.city+"</td>"+
	"<td>"+this.state+"</td>"+
	"<td>"+this.price+"</td>"+
	"</tr>";

}

Property.all = [];
Property.maxDays = 10;

Property.displayContent = function () {
	$('.property-count').text(Property.all.length);
	$('.max-days').text(Property.maxDays);
	$.each(Property.all, function(i, property) {
		$('table').find('tbody').append(property.el);
	});
	$('table').stupidtable();
};

//create properties

var property1 = new Property("2345 Fairview Ln", "Brooklyn", "New York", 
	"1200000", "2014 December 1");
var property2 = new Property("974 Clapton St", "Queens", "New York", 
	"1100000", "2014 March 14");
var property3 = new Property("14A Belmont Way", "Bronx", "New York", 
	"874000", "2014 March 28");
var property4 = new Property ("455 Crazy Lane", "Queens", "New York", "5000", "2014 November 30");

//console.log(Property.all);
Property.displayContent();


});