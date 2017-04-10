//*--Business Logic--*//
//Mode of Transportation//
function Economic(mode, miles) {
  this.mode = mode;
  this.miles = miles;
}

//Prototype for Mode of Transportation//
Economic.prototype.modeCarbonTotal = function(mode, miles) {
  var transportProduct = this.mode * this.miles;
  return transportProduct;
}

//*--User Interface--*//
$(document).ready(function() {
  var transportation = new Economic();
  $("#input").submit(function(e) {
    e.preventDefault();
    var inputtedMode = $("#mode").val();
    var inputtedMiles = $("#miles").val();
    var getCarbonTotal = new Economic(inputtedMode, inputtedMiles);
    getCarbonTotal.modeCarbonTotal();
    console.log(getCarbonTotal.modeCarbonTotal());
  });
});


// *Reference * //
// Transportation
// Public Transit
// // lightrail: 0.36 lbs co2/mi; 0.14 if full occupancy
// bus: 0.56 lbs co2/mi; 0.18 if full occupancy
