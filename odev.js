import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

const $populationBigger = document.querySelector("#populationBigger");
$populationBigger.addEventListener("click", function() {
    const newData = data.filter(item => item.population > 500000);
    createTableElements(newData, "allcities");
})

const $landAreaLess = document.querySelector("#landAreaLess");
$landAreaLess.addEventListener("click", function() {
    const newData = data.filter(item => item.landArea < 1000);
    createTableElements(newData, "allcities");
})

const $isPopulationLess = document.querySelector("#isPopulationLess");
$isPopulationLess.addEventListener("click", function() {
    const newData = data.some(item => item.population < 100000);
    newData ? alert("Yes") : alert("No");
})

const $isLandBigger = document.querySelector("#isLandBigger");
$isLandBigger.addEventListener("click", function() {
    const newData = data.every(item => item.landArea > 100);
    newData ? alert("Yes") : alert("No");
})

const $singlecity = document.querySelector("#singlecity");
const $inputGroupSelect01 = document.querySelector("#inputGroupSelect01");
data.forEach(item => {
    const $option = document.createElement("option");
    $option.textContent = item.name;
    $option.setAttribute("value", item.name);
    $inputGroupSelect01.appendChild($option);
})

$inputGroupSelect01.addEventListener("change", function() {
    const newData = data.find(item => item.name === this.value);
    createTableElements([newData], "singlecity")
})
