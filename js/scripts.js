//*--Business Logic--*//
//Mode of Transportation//
function Economic(mode, miles, electric, natGas, fuel, wasteProduct) {
  this.mode = mode;
  this.miles = miles;
  this.electric = electric;
  this.natGas = natGas;
  this.fuel = fuel;
  this.recyclingArray = [];
  this.foodArray = [];
  this.wasteProduct = wasteProduct;
}

//Prototype for Mode of Transportation//
Economic.prototype.modeCarbonTotal = function(mode, miles) {
  var transportProduct = this.mode * this.miles;
  console.log("trans: " + transportProduct);
  return transportProduct;
}

Economic.prototype.homeCarbonTotal = function(electric) {
  var electricEnergyProduct = this.electric * 10.546;
  if (this.natGas <= 9.5) {this.natGas = 9.5};
  var natGasProduct = (this.natGas - 9.5) * 8.846;
  var fuelProduct = this.fuel * 7.59
  var homeEnergyProduct = electricEnergyProduct + natGasProduct + fuelProduct;
  console.log("home: " + homeEnergyProduct);
  return homeEnergyProduct;
}

// this works as of 10am 4/11
Economic.prototype.recyclingTotal = function() {
  var wasteProduct = 692;
  this.recyclingArray.forEach(function(recyclable) {
    wasteProduct -= recyclable;
    console.log("recycle: " + wasteProduct);
  });
  return wasteProduct;
};

// this works as of 10am 4/11
Economic.prototype.foodTotal = function(foodArray) {
  var foodProduct = 0;
  this.foodArray.forEach(function(item) {
    foodProduct += item;
    console.log("food: " + typeof foodProduct);
    return foodProduct;
  });
};

Economic.prototype.overallTotal = function(mode, miles, electric, natGas, fuel, recyclingArray) {
  var bigResult = this.modeCarbonTotal(mode, miles) + this.homeCarbonTotal(electric, natGas, fuel) + this.recyclingTotal(recyclingArray);
  // console.log(this.recyclingTotal(recyclingArray));
  return bigResult;
}

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
    var getCarbonTotal = new Economic(inputtedMode, inputtedMiles, inputtedElectric, inputtedNatGas, inputtedFuel);
    $("input:checkbox[name=recycling]:checked").each(function(){
        let inputtedRecycling = parseFloat($(this).val());
        getCarbonTotal.recyclingArray.push(inputtedRecycling);
    });
    $("input:checkbox[name=food]:checked").each(function(){
      let inputtedFood = parseFloat($(this).val());
      recycleNFood.foodArray.push(inputtedFood);
    });


    getCarbonTotal.modeCarbonTotal();
    getCarbonTotal.homeCarbonTotal();
    recycleNFood.foodTotal();
    finalResult = getCarbonTotal.overallTotal(inputtedMode, inputtedMiles, inputtedElectric, inputtedNatGas, inputtedFuel);
    console.log("final total: " + finalResult);
    console.log(getCarbonTotal.modeCarbonTotal());
    console.log(getCarbonTotal.homeCarbonTotal());
    // console.log(recycleNFood.recyclingArray);
  });
});
