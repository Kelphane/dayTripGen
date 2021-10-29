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

//Holds the randomly picked item from our arrays.
let randomDestination = randomSelect(desArray)
console.log(randomDestination)
let selectedFood = [];
let selectedTrans = [];
let selectedFun = [];
let menuSelect = 0;
let optionSelect = 0;

//Confirmed Options.
let confirmDes = "";
let confirmFood = "";
let confirmTrans = "";
let confirmFun = "";

//Produces a random number.
function randomSelect(array){
    let  randomNum = Math.floor(Math.random() * array.length);
    randomNum = array[randomNum]
    return randomNum; 
}

//Reselects Trip Options.
function reSelect(array){
    let userInput = prompt("Would you like to reselect this option? Y/N");

    if(userInput == "Y"){
        menuSelect = 0;
    }else if(userInput == "y"){
        menuSelect = 0;
    }else if(userInput == "Yes"){
        menuSelect = 0;
    }else if(userInput == "yes"){
        menuSelect = 0;
    }else if(userInput == "N"){
        menuSelect = 3;
    }
}

//User Confirms Trip Information and is given the option to Reselect.
function confirm(array){
    let userInput = prompt("Would you like to confirm this option? Y/N");

    //Load Selected Option into Confirm.
    if(userInput == "Y"){
        //Load Selected into Confirm
    }else if(userInput == "y"){
        //Load Selected into Confirm
    }else if(userInput == "Yes"){
        //Load Selected into Confirm
    }else if(userInput == "yes"){
        //Load Selected into Confirm
    }else if(userInput == "N"){
        //Return to Reselect.
    }else if(userInput == "n"){
        //Return to Reselect.
    }else if(userInput == "No"){
        //Return to Reselect.
    }else if(userInput == "no"){
        //Return to Reselect.
    }
}

//When All Selection is Confirmed. Console Log or Alert the Entire trip.
function showTrip(){
    //Console Log Trip.
}

