console.log('Array of Cars');

var cars = [
	{
		make : 'ford',
		model : 'Laser',
		registraion : 'sw3712',
		weight : 1134,
		mileage : 150000,
		year : 1994,
		price : 1600,
		picture : 'assets/fordLaser.jpg'
	},
	{
		make : 'holden',
		model : 'Barina',
		registraion : 'gkl101',
		weight : 1256,
		mileage : 65785,
		year : 2012,
		price : 8000,
		picture : 'assets/holdenBarina.jpg'
	},
	{
		make : 'holden',
		model : 'Commodore',
		registraion : 'sti934',
		weight : 1662,
		mileage : 100568,
		year : 2006,
		price : 8000,
		picture : 'assets/holdenCommodore.jpg'
	},
	{
		make : 'mazda',
		model : '3',
		registraion : 'qie783',
		weight : 1292,
		mileage : 80456,
		year : 2008,
		price : 6275,
		picture : 'assets/mazda3.jpg'
	},
	{
		make : 'mazda',
		model : 'BT-50',
		registraion : 'yt9347',
		weight : 1876,
		mileage : 184568,
		year : 2007,
		price : 12599,
		picture : 'assets/mazdaBT50.jpg'
	},
	{
		make : 'mazda',
		model : 'Demio',
		registraion : 'ggo395',
		weight : 1058,
		mileage : 33595,
		year : 2015,
		price : 12300,
		picture : 'assets/mazdaDemio.jpg'
	},
	{
		make : 'mazda',
		model : 'RX-7 FB',
		registraion : 'pd7456',
		weight : 1100,
		mileage : 63897,
		year : 1979,
		price : 17000,
		picture : 'assets/mazdaRX7.jpg'
	},
	{
		make : 'mitsubishi',
		model : 'Outlander',
		registraion : 'gyk384',
		weight : 1745,
		mileage : 42789,
		year : 2013,
		price : 14000,
		picture : 'assets/mitsubishiOutlander.jpg'
	},
	{
		make : 'nissan',
		model : 'Skyline GTR',
		registraion : 'fiu847',
		weight : 1430,
		mileage : 22458,
		year : 2014,
		price : 100000,
		picture : 'assets/nissanGTR.jpg'
	},
	{
		make : 'nissan',
		model : 'Leaf',
		registraion : 'oei463',
		weight : 1493,
		mileage : 33594,
		year : 2014,
		price : 26900,
		picture : 'assets/nissanLeaf.jpg'
	},
	{
		make : 'nissan',
		model : 'Silvia',
		registraion : 'yu584',
		weight : 1250,
		mileage : 99842,
		year : 2006,
		price : 26000,
		picture : 'assets/nissanSilvia.jpg'
	},
	{
		make : 'suzuki',
		model : 'Swift',
		registraion : 'lks971',
		weight : 1050,
		mileage : 56324,
		year : 2013,
		price : 12998,
		picture : 'assets/suzukiSwift.jpg'
	},
	{
		make : 'tesla',
		model : 'Model S',
		registraion : 'mhr18',
		weight : 1611,
		mileage : 7000,
		year : 2017,
		price : 125000,
		picture : 'assets/teslaModelS.jpg'
	},
	{
		make : 'toyota',
		model : 'Corolla',
		registraion : 'pj6437',
		weight : 1095,
		mileage : 250456,
		year : 1998,
		price : 1000,
		picture : 'assets/toyotaCorolla.jpg'
	},
	{
		make : 'toyota',
		model : 'Hilux',
		registraion : 'rly749',
		weight : 1795,
		mileage : 125984,
		year : 2002,
		price : 13000,
		picture : 'assets/toyotaHilux.jpg'
	}
];

// --- Functions
// Clears output field
function clear(){
	document.getElementById('results').innerHTML = '';
}

// Resets form fields
function clearField(){
	document.getElementById('searchMake').value = '';
}

// lists cars
function writeCars(){
	// Takes make of car, starting before the first letter takes the first letter, sets i to capital
	var y = (cars[i].make).slice(0,1).toUpperCase();
	document.getElementById('results').innerHTML += 
	'<div class="card col-md-4">' +
		'<img src="' + cars[i].picture + '" class="card-image" alt="cars">' +
		'<div class="card-body">' + 
			// Takes the make of car and replaces the first letter with a capital of the same letter
			'<h4 class="card-title">' + (cars[i].make).replace(cars[i].make[0],y) + '</h4>' + 
			'<h5 class="card-title">' + cars[i].model + '</h5>' +
			'<p class="card-text"> <b>Car Registraion:</b> ' + cars[i].registraion + '<br> <b>Car Weight: </b>' + cars[i].weight + 'kg<br><b>Car Mileage: </b>' + cars[i].mileage + 'km' + '<br><b>Car Year: </b>' + cars[i].year + '<br> <b>Price: </b>$' + cars[i].price +
		'</div>';
		console.log(cars[i].make); // from array

		//convert first letter to uppercase
		console.log(y);
		// var x= (cars[i].make).slice(0,1);
		console.log((cars[i].make).replace(cars[i].make[0],y));

}

// --- button actions

// Function that is called to display all car info cards
document.getElementById('allCars').addEventListener('click', function(){
	clear();
	// Loops so that all cars are displayed
	for (i = 0;i < cars.length; i++) {
		writeCars();
	}
});

// Function that is called to display all cars high to low
document.getElementById('highLowMileage').addEventListener('click', function(){
	clear();
	// Loops through the whole array
	for (i = 0; i < cars.length; i++) {
		// a function created to sort cars with the lowest mileage to highest mileage
		cars.sort(function(a, b){
			// Takes the mileage from the array and lists the objects in order from least milage to most
			return parseInt(b.mileage) - parseInt(a.mileage);
		});
		writeCars();
	}
	console.log(cars);
});

// Function that sorts from lowest priced car to highest
document.getElementById('lowHighPrice').addEventListener('click', function(){
	clear();
	for (i = 0; i < cars.length; i++) {
		cars.sort(function(a, b){
			return parseInt(a.price) - parseInt(b.price);
		});
		writeCars();
	}
});

// Function that is called to find cars that weigh more than 1.5tons
document.getElementById('moreThan1.5Tons').addEventListener('click', function(){
	clear();
	for (i = 0; i < cars.length; i++) {
		// If the car in the array weighs the same or more than 1.5tons, the car will be displayed 
		if(cars[i].weight >= 1500) {
			writeCars();
		}
	}
});

// Function that takes a user input and searches the array for a matching object
document.getElementById('searchMakeBtn').addEventListener('click', function(){
	clear();
	// Stores the user's input in the 'makeSearch' variable
	var makeSearch = (document.getElementById('searchMake').value).toLowerCase();
	console.log(makeSearch);
	for (i = 0; i < cars.length; i++) {
		if(makeSearch === cars[i].make) {
			writeCars();
		} 
		// else {
		// 	document.getElementById('results').innerHTML = 
		// 	'<div class="col-12">' +
		// 		'<h3>Please Ensure Propper Query Syntax</h3>' + 
		// 		'<p>You wrote: <b>' + makeSearch + '</b></p>' + 
		// 		'<h4>Proper Syntax</h4>' + 
		// 		'<p>Propper spelling and with a capital at the start of the name</p>' +
		// 		'<p>Try <b>Mazda</b></p>' +
		// 	'</div>';
		// }
	} 
	console.log(makeSearch);
	clearField();
});

// Function that allows the user to be able to select a price range for the cars
document.getElementById('priceRangeDropDownBtn').addEventListener('click', function(){
	clear();
	// Stores the value that has been taken from the drop down selction box in the variable
	var userPriceRange = document.getElementById('priceRangeDropDown').value;
	for(i = 0; i < cars.length; i++) {
		/*
			* This statement begins by taking the input from the drop down menu that the user selects
			* Next, it compares the price of the car to a pre determined set of paramaters
			* Finally, once the query fits within a certain set of parameters, the corelating cars from the object array will be displayed
		*/
		if ((userPriceRange == 1 )  &&  (cars[i].price < 1500)){
			writeCars();
		} else if ((userPriceRange == 2) && (cars[i].price >= 1500) && (cars[i].price < 5000)) { // if there are cars between the range of 1500 inclusive and 5000, then display those cars
			writeCars();
		} else if ((userPriceRange == 3) && (cars[i].price >= 5000) && (cars[i].price < 10000)) {
			writeCars();
		} else if ((userPriceRange == 4) && (cars[i].price >= 10000) && (cars[i].price < 30000)) {
			writeCars();
		} else if ((userPriceRange == 5 )  &&  (cars[i].price >= 30000)){
			writeCars();
		}
	}
});





































