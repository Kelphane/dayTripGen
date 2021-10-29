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

//VARIBLES//////////////////////////////////////

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

//FUNCTIONS///////////////////////////////////////

//Produces a random number.
function randomSelect(array){
    let  randomNum = Math.floor(Math.random() * array.length);
    randomNum = array[randomNum]
    return randomNum; 
}

//Reselects Trip Options.
function reSelect(){
    let loop = true;

    while(loop){
        let userInput = prompt("Would you like to reselect this option? Y/N");
        if(userInput == "Y"){
            menuSelect = 0;
            loop = false;
        }else if(userInput == "y"){
            menuSelect = 0;
            loop = false;
        }else if(userInput == "Yes"){
            menuSelect = 0;
            loop = false;
        }else if(userInput == "yes"){
            menuSelect = 0;
            loop = false;
        }else if(userInput == "N"){
            menuSelect = 3;
            loop = false;
        }else{
            alert("I'm sorry, I didn't quite catch that.");
        }
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
        menuSelect = 2;
    }else if(userInput == "n"){
        menuSelect = 2;
    }else if(userInput == "No"){
        menuSelect = 2;
    }else if(userInput == "no"){
        menuSelect = 2;
    }
}

//When All Selection is Confirmed. Console Log or Alert the Entire trip.
function showTrip(){
    //Confirm 
}

//FRAMEWORK///////////////////////////////
//While loop which holds:
//if statements to Select Option.
//AND Switch statement to Slect Menu Options.
