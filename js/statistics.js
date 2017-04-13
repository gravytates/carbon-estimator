// BUSINESS LOGIC

// CONSTRUCTOR TO HOLD ALL CLASS DATA
function Statistics(){
  this.cohorts = [];
}

// T-TEST FOR INTRO VS JAVA
Statistics.prototype.runTTest1 = function() {
  var tTest = 0;
  var introAvg = this.cohorts[0].averageCarbon();
  var introSD = this.cohorts[0].standardDeviation();
  var introSDsq = introSD * introSD;
  var introN = this.cohorts[0].emissions.length;
  var javaAvg = this.cohorts[1].averageCarbon();
  var javaSD = this.cohorts[1].standardDeviation();
  var javaSDsq = javaSD * javaSD;
  var javaN = this.cohorts[1].emissions.length;

  tTest = Math.abs(introAvg - javaAvg) / (Math.sqrt((introSDsq + javaSDsq)/introN));

  console.log(introAvg);
  return tTest;
}


// T-TEST FOR INTRO VS JAVASCRIPT
Statistics.prototype.runTTest2 = function() {
  var tTest = 0;
  var introAvg = this.cohorts[0].averageCarbon();
  var introSD = this.cohorts[0].standardDeviation();
  var introSDsq = introSD * introSD;
  var introN = this.cohorts[0].emissions.length;
  var jSAvg = this.cohorts[2].averageCarbon();
  var jSSD = this.cohorts[2].standardDeviation();
  var jSSDsq = jSSD * jSSD;
  var jSN = this.cohorts[2].emissions.length;

  tTest = Math.abs(introAvg - jSAvg) / (Math.sqrt((introSDsq + jSSDsq)/jSN));

  return tTest;
}

// T-TEST FOR JAVA VS JAVASCRIPT
Statistics.prototype.runTTest3 = function() {
  var tTest = 0;
  var javaAvg = this.cohorts[1].averageCarbon();
  var javaSD = this.cohorts[1].standardDeviation();
  var javaSDsq = javaSD * javaSD;
  var javaN = this.cohorts[1].emissions.length;
  var jSAvg = this.cohorts[2].averageCarbon();
  var jSSD = this.cohorts[2].standardDeviation();
  var jSSDsq = jSSD * jSSD;
  var jSN = this.cohorts[2].emissions.length;

  tTest = Math.abs(javaAvg - jSAvg) / (Math.sqrt((javaSDsq + jSSDsq)/jSN));

  return tTest;
}

// P-VALUE FOR INTRO VS JAVA
Statistics.prototype.pValue1 = function(){
  let pValue = 0;
  var dF = (this.cohorts[0].emissions.length - 1) + (this.cohorts[1].emissions.length -1);
  var tValue = this.runTTest1();
  console.log(dF);

  return dF;
}

// P-VALUE FOR INTRO VS JAVASCRIPT
Statistics.prototype.pValue2 = function(){
  let pValue = 0;
  var dF = (this.cohorts[0].emissions.length - 1) + (this.cohorts[2].emissions.length -1);
  var tValue = this.runTTest1();
  console.log(dF);

  return dF;
}

// P-VALUE FOR JAVA VS JAVASCRIPT
Statistics.prototype.pValue3 = function(){
  let pValue = 0;
  var dF = (this.cohorts[1].emissions.length - 1) + (this.cohorts[2].emissions.length -1);
  var tValue = this.runTTest1();
  console.log(dF);

  return dF;
}


// COHORT CONSTRUCTOR WITH EMISSION DATA
function Cohort(){
  this.emissions = [];
  this.empty = [];
}

// FIND COHORTS TOTAL CO2
Cohort.prototype.totalCarbon = function() {
  totalCarbon = 0;
  this.emissions.forEach(function(student){
    totalCarbon += student;
  });
  return totalCarbon;
}

// FIND COHORTS AVERAGE CO2
Cohort.prototype.averageCarbon = function() {
  var average = this.totalCarbon() / this.emissions.length
  return average;
}

// FIND COHORTS STANDARD DEVIATION
Cohort.prototype.standardDeviation = function() {
  var sum = 0;
  var avg = this.averageCarbon();
  this.emissions.forEach(function(student){
    sum += (Math.abs(student - avg) ** 2);
  });

  beforeSQRT = sum / (this.emissions.length -1);
  stDev = Math.sqrt(beforeSQRT);
  return stDev;
}



// USER INTERFACE
$(function(){

// OBJECT TO STORE ALL THREE COHORTS
  let all3Cohorts = new Statistics();

// BUTTON FUNCTION TO DISPLAY INTRO DATA
  $("#introBtn").click(function(){
    let introCohort = new Statistics();
    let introData = new Cohort();
    $("#intro-class input").each(function(){
      input = $(this).val();
      if (input.match(/^[0-9]+([,.][0-9]+)?$/g)) {
        emission = parseFloat(input);
        introData.emissions.push(emission);
      } else {
        introData.empty.push(emission);
      }
    });
    all3Cohorts.cohorts.push(introData);
    console.log(all3Cohorts.cohorts[0].totalCarbon());
    console.log(introData.emissions.length);
    let totalC = introData.totalCarbon();
    let averageC = (introData.averageCarbon()).toFixed(2);
    let stdDev = (introData.standardDeviation()).toFixed(2);
    $("#introTotal").text(totalC);
    $("#introAverage").text(averageC);
    $("#introStDev").text(stdDev);
  })


// BUTTON FUNCTION TO DISPLAY JAVA DATA
  $("#javaBtn").click(function(){
    let javaCohort = new Statistics();
    let javaData = new Cohort();
    $("#java-class input").each(function(){
      input = $(this).val();
      if (input.match(/^[0-9]+([,.][0-9]+)?$/g)) {
        emission = parseFloat(input);
        javaData.emissions.push(emission);
      } else {
        javaData.empty.push(emission);
      }
    });
    all3Cohorts.cohorts.push(javaData);
    console.log(all3Cohorts.cohorts[1].totalCarbon());
    let totalC = javaData.totalCarbon();
    let averageC = (javaData.averageCarbon()).toFixed(2);
    let stdDev = (javaData.standardDeviation()).toFixed(2);
    $("#javaTotal").text(totalC);
    $("#javaAverage").text(averageC);
    $("#javaStDev").text(stdDev);
  })


// BUTTON FUNCTION TO DISPLAY JAVASCRIPT DATA
  $("#jSBtn").click(function(){
    let jSCohort = new Statistics();
    let jSData = new Cohort();
    $("#jS-class input").each(function(){
      input = $(this).val();
      if (input.match(/^[0-9]+([,.][0-9]+)?$/g)) {
        emission = parseFloat(input);
        jSData.emissions.push(emission);
      } else {
        jSData.empty.push(emission);
      }
    });
    all3Cohorts.cohorts.push(jSData);
    console.log(all3Cohorts.cohorts[2].averageCarbon());
    let totalC = jSData.totalCarbon();
    let averageC = (jSData.averageCarbon()).toFixed(2);
    let stdDev = (jSData.standardDeviation()).toFixed(2);
    $("#jSTotal").text(totalC);
    $("#jSAverage").text(averageC);
    $("#jSStDev").text(stdDev);
  })

// BUTTON FUNCTION TO CALL T TEST BETWEEN INTRO AND JAVA
  $("#intro-v-java").click(function(){
    tValue = (all3Cohorts.runTTest1()).toFixed(3);
    console.log(tValue);
    $("#intro-java-T-result").text(tValue);
    dF = all3Cohorts.pValue1();
    console.log(dF);
    $("#intro-java-dF-result").text(dF);
    if (tValue >= 2.021) {
      $("#nullTrue1").show();
    } else {
      $("#nullFalse1").show();
    }
  })

// BUTTON FUNCTION TO CALL T TEST BETWEEN INTRO AND JAVASCRIPT
  $("#intro-v-jS").click(function(){
    tValue = (all3Cohorts.runTTest2()).toFixed(3);
    console.log(tValue);
    $("#intro-jS-T-result").text(tValue);
    dF = all3Cohorts.pValue2();
    console.log(dF);
    $("#intro-jS-dF-result").text(dF);
    if (tValue >= 2.021) {
      $("#nullTrue2").show();
    } else {
      $("#nullFalse2").show();
    }
  })

// BUTTON FUNCTION TO CALL T TEST BETWEEN JAVA AND JAVASCRIPT
  $("#java-v-jS").click(function(){
    tValue = (all3Cohorts.runTTest3()).toFixed(3);
    console.log(tValue);
    $("#java-jS-T-result").text(tValue);
    dF = all3Cohorts.pValue3();
    console.log(dF);
    $("#java-jS-dF-result").text(dF);
    if (tValue >= 2.021) {
      $("#nullTrue3").show();
    } else {
      $("#nullFalse3").show();
    }
  })

});
