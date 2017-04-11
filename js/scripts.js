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
  return (transportProduct * 4.33);
}

Economic.prototype.homeCarbonTotal = function(electric) {
  var electricEnergyProduct = this.electric * 10.55;
  if (this.natGas <= 9.5) {this.natGas = 9.5};
  var natGasProduct = (this.natGas - 9.5) * 8.85;
  var fuelProduct = this.fuel * 7.59;
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
  return (wasteProduct / 12);
};

// this works as of 10am 4/11
Economic.prototype.foodTotal = function() {
  var foodProduct = 0;
  this.foodArray.forEach(function(item) {
    foodProduct += item;
    console.log("food: " + typeof foodProduct);
  });
  return foodProduct;
};

Economic.prototype.overallTotal = function(mode, miles, electric, natGas, fuel, recyclingArray, foodArray) {
  var bigResult = this.modeCarbonTotal(mode, miles) + this.homeCarbonTotal(electric, natGas, fuel) + this.recyclingTotal(recyclingArray) + this.foodTotal(foodArray);
  return bigResult.toFixed(2);
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
      getCarbonTotal.foodArray.push(inputtedFood);
    });

    getCarbonTotal.modeCarbonTotal();
    getCarbonTotal.homeCarbonTotal();
    recycleNFood.foodTotal();
    finalResult = getCarbonTotal.overallTotal(inputtedMode, inputtedMiles, inputtedElectric, inputtedNatGas, inputtedFuel);
    $("#finalTotal").html("You are responsible for emitting " + finalResult + 'lbs of CO<sub>2</sub> per month!');
    console.log("final total: " + finalResult);
    console.log(getCarbonTotal.modeCarbonTotal());
    console.log(getCarbonTotal.homeCarbonTotal());
  });
});
