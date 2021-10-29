"use strict";

//1: Destination (Array)
//2: Restaurant (Array)
//3: Mode of Transportation (Array)
//4: Entertainment (Array)
//5: I want to be able to randomly re-select a destination, 
//restaurant, mode of transportation, and/or form of 
//entertainment if I don’t like one or more of those things (Func)
//6: Be able to Confirm Options (Func)
//7: Display Trip to Console or Alert (Func)

//Trip Options Array.
let desArray = ["Dallas", "NYC", "Salt Lake City", "Oklahoma City"];
let foodArray = [];
let transArray = [];
let funArray = [];

//Holds the randomly piked item from our arrays.
let randomDestination = randomSelect(desArray)
console.log(randomDestination)
let selectedFood = [];
let selectedTrans = [];
let selectedFun = [];

//Produces a random number.
function randomSelect(array){
    let  randomNum = Math.floor(Math.random() * array.length);
    randomNum = array[randomNum]
    return randomNum; 
}

function reSelect(){

}

function confirm(){

}

function showTrip(){

}
