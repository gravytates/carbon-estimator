# Carbon Estimator

##### Epicodus Section: Intro group week- Carbon Estimator

#### By Grady L Shelton, Dana Weiss,  & Ben Williams

## Description

This group week website takes user input about their day to day activities including how far they travel on a weekly basis, using what modes of transportation, how their house energy is fueled, how much they recycle, and what kind of food they eat to display an estimate for how much carbon dioxide they are responsible for emitting.

Website can be viewed in browser at https://gravytates.github.io/carbon-est

## Specifications

* Program will have the user indicate how many miles they travel per week.
  * **Example Input** User inputs " '100' miles."
  * **Example Output** Program allows user to move on to mode of transportation.

* Program indicates whether they drive a car (sedan/wagon, hybrid, small truck, standard truck), take the bus, lightrail, or walk/bike. Mode has a standard CO2 lbs emission that is multiplied by their miles traveled and their transportation CO2 emissions are displayed.
  * **Example Input** User selects "Bus" and 100 miles.
  * **Example Output** Transportation CO2 emission: 52 lbs per week.

* Program will prompt user to indicate if they recycle the following items:          
    aluminum/steel
    plastic
    glass
    newspaper
    magazines
  * **Example Input** User selects "aluminum/steel, plastic, glass, newspaper, magazines".
  * **Example Output** "waste emission: 7.71 lbs CO2/wk".

* Program will prompt user to indicate how many pounds of certain food types they eat per week to see how much CO2/wk the production of this food creates.
  * **Example Input** User selects "Beef: 2 lbs; Rice: 2 lbs; Vegetables: 5 lbs."
  * **Example Output** "CO2 emission from food: 69.86 lbs CO2/wk"

* Program will prompt user to indicate what kind of fuel their home energy uses, and how much money is spent on utility.
  * **Example Input** User selects either "Electricity" and "$44/month"
  * **Example Output** "CO2 emission from utilities: 941 lbs/wk"

* Upon completion and submission of form, program will return a total CO2 emission in pounds per week
  * **Example Input** User submits form
  * **Example Output** "Your weekly CO2 emission per week is: 1070.57 lbs


Hey guys!

The idea with this program is to take input from a person in regards to how far they travel in a week (in miles and or days per week?), using which kind of transportation(car, bike, bus, lightrail, walk, others?), household energy utilities (natural gas, oil, electricity, propane), waste creation vs recycling, and what kind/how much meat they consume to roughly see how much carbon they emit. A quick google search resulted in a similar calculator being available online at the epa website (their result is CO2, but if we prefer Carbon it's a simple equation): https://www3.epa.gov/carbon-footprint-calculator/

The epa website is pretty in depth. I don't think we should go so far as to ask for how much in dollars people spend on heating and cooling for example. I see our project as being a straight forward, educational tool that can be helpful for our portfolios once we leave epicodus.

 if natural gas: result: oregon is 2.3 thousand cubic feet of gas/ month- resulting co2 output: https://www.eia.gov/pub/oil_gas/natural_gas/feature_articles/2010/ngtrendsresidcon/ngtrendsresidcon.pdf

returning weather adjusted natty gas consumption for pacific western states (Oregon) per customer: 53.2 thousand cubic feet/yr..

if electricity: 5,384 co2 lbs/yr on average

if fuel oil: 4,848 co2 lbs/yr on average


book with reference to economies of scale within a household (epa's calculator indicates a 1:1 for households with multiple people, that for larger households utility cost doesn't decrease per person, which is crazy, so this book shows evidence that utilities can be decreased anywhere from 20-40% on a per person scale with larger households, not definitive but worth a shake- usa is probably on the lower end of these numbers though) additional note: because EPA website lets users input their bill costs, a standard rate is applied and this helps capture economies of scale within a household. https://books.google.com/books?id=Mfe8ukMh_v4C&pg=PA262&lpg=PA262&dq=number+of+people+in+household+effects+utilities&source=bl&ots=YlRgmFSegO&sig=3ZpWTEvLYrS1nNhjto2AvOyCqy0&hl=en&sa=X&ved=0ahUKEwjPsOrC6JXTAhVCyGMKHR8hDIgQ6AEIUDAI#v=onepage&q=utility%20cost&f=false

Home energy reduction techniques:
turn up thermostat in summer
turn down heating in winter
  modest change can save $30/yr and cut co2 by 400lbs.
replace incandescent bulbs with energy star lights:
  $20/yr savings and 150 lbs CO2
cold water wash and hang dry:
  $100/yr savings and 700 lbs co2 reduction
replace fridge: $38 yr, 273 lbs CO2
replace furnace/boiler: $78/yr, 728 lbs co2
**replace windows: $150 yr savings, 2,947 lbs co2**


Transportation

fueleconomy.gov with cars.com
cars:
  2012 truck: 15mpg with 1.32 lbs co2/mi
  newer hybrids: 50mpg avg with 0.39 lbs co2/mi
  new sedans/wagons: 23.7 mpg avg with 0.84 lbs co2/mi
  small pickup: 21 mpg avg with 0.94 lbs co2/mi
  standard pickup: 18 mpg avg with 1.1 lbs co2/mi

https://www.transit.dot.gov/sites/fta.dot.gov/files/docs/PublicTransportationsRoleInRespondingToClimateChange2010.pdf
lightrail: 0.36 lbs co2/mi; 0.14 if full occupancy
bus: 0.56 lbs co2/mi; 0.18 if full occupancy

Transportation co2 reduction techniques:
  * walk or ride a bicycle
  * take the bus or lightrail
  * perform regular maintenance on vehicle: $214 annual   savings and 1,157 lbs co2
  * reduce drive miles: proportional to mpg.

  Waste (from EPA)

  692 lbs co2/ yr per person.
  reduce this via recycling:
    aluminum/steel
    plastic
    glass
    newspaper
    magazines
  saves 291 lbs co2/yr

http://www.greeneatz.com/foods-carbon-footprint.html Ranks food with CO2 output per kilo of food produced. Food is third largest contributor to US household's co2 output. Globally, agriculture contributes to half of our co2 emissions.

kilo multiplied by 2.204 to find pound.



## Setup


## Known Bugs



## Contact

Please contact Grady L Shelton at gradyish@gmail.com if you have any questions.

## Technologies Used

HTML, CSS, JavaScript and jQuery

### Legal

Copyright (c) 2017 **Grady L Shelton, Ben Williams, and Dana Weiss**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
