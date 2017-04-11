//*--Business Logic--*//
//Mode of Transportation//
function Economic(mode, miles, electric, natGas, fuel) {
  this.mode = mode;
  this.miles = miles;
  this.electric = electric;
  this.natGas = natGas;
  this.fuel = fuel;
  this.recyclingArray = [];
  this.foodArray = [];
}

//Prototype for Mode of Transportation//
Economic.prototype.modeCarbonTotal = function(mode, miles) {
  var transportProduct = this.mode * this.miles;
  return transportProduct;
}

Economic.prototype.homeCarbonTotal = function(electric) {
  var electricEnergyProduct = this.electric * 10.546;
  var natGasProduct = (this.natGas - 9.5) * 8.846;
  var fuelProduct = this.fuel * 7.59
  var homeEnergyProduct = electricEnergyProduct + natGasProduct + fuelProduct;
  return homeEnergyProduct;
}

Economic.prototype.recyclingTotal = function(recyclingArray) {
  var wasteProduct = 692;
  this.recyclingArray.forEach(function(recyclable) {
    wasteProduct -= recyclable;
    return wasteProduct;
  });
};

Economic.prototype.foodTotal = function(foodArray) {
  var foodProduct = 0;
  console.log(foodArray);
  this.foodArray.forEach(function(item) {
    foodProduct += item;
    console.log(foodProduct);
    return foodProduct;
  });
};


//natural gas
// take the price of the bill, subtract 9.50, multiply by .7323. that's how many therms 12.08 pounds per therm. src: nwNatural

// fuel oil
// 22.40lbsCO2/gallon, $2.95 per gallon (if you buy 100 gallons)
//http://best-heating-oil.com/heating-oil-pricing/

//electricity
// 8.63 kWh per $1 spent in a day, 1.222 lbs co2 per/kwh https://carbonfund.org/how-we-calculate/    https://www.epa.gov/sites/production/files/2015-10/documents/egrid2012_summarytables_0.pdf PG&E customer bill portland




//*--User Interface--*//
$(document).ready(function() {
  $("#input").submit(function(e) {
    e.preventDefault();
    var recycleNFood = new Economic();
    var inputtedMode = $("#mode").val();
    var inputtedMiles = $("#miles").val();
    var inputtedElectric = $("#electricity").val();
    var inputtedNatGas = $("#natgas").val();
    var inputtedFuel = $("#fuel").val();
    $("input:checkbox[name=recycling]:checked").each(function(){
        let inputtedRecycling = parseFloat($(this).val());
        recycleNFood.recyclingArray.push(inputtedRecycling);
    });
    $("input:checkbox[name=food]:checked").each(function(){
        let inputtedFood = parseFloat($(this).val());
        recycleNFood.foodArray.push(inputtedFood);
    });
    var getCarbonTotal = new Economic(inputtedMode, inputtedMiles, inputtedElectric, inputtedNatGas, inputtedFuel);
    getCarbonTotal.modeCarbonTotal();
    getCarbonTotal.homeCarbonTotal();
    recycleNFood.recyclingTotal();
    recycleNFood.foodTotal();
    // console.log(getCarbonTotal.modeCarbonTotal());
    // console.log(getCarbonTotal.homeCarbonTotal());
    // console.log(recycleNFood.recyclingArray);
    // console.log(recycleNFood.foodArray);
    // console.log(newCarbonTotal.recyclingTotal());
  });
});
