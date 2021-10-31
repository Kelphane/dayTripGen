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
let desArray = ["Dallas", "NYC", "Salt Lake City", "Los Angeles"];
let foodArray = ["McDonalds", "Burger King", "Carls Jr", "Five Guys"];
let transArray = ["Rental Car", "Airplane", "Boat", "Rocket"];
let funArray = ["Scuba Diving", "Sky Diving", "Hiking", "Surfing"];

//Option Variabes
let randomDestination = "";
let randomRestaurant = "";
let randomTransport = "";
let randomEntertainment = "";

//Navigation Variable.
let menuSelect = 0;
let optionSelect = 0;
let isDone = false;
let isGreeted = false;

//Confirmed Options bool.
let confirmDestination = false;
let confirmRestaurant = false;
let confirmTransport = false;
let confirmEntertainment = false;

//FUNCTIONS///////////////////////////////////////
//MENU OPTIONS:
//0: Randomly Select Option.
//1: Confirm Option.
//2: Reselect Option.
/////////////////
//OPTION MENU:
//0: Destination.
//1: Restaurant.
//2: Transportation.
//3: Entertainment.

//Function Randomly Selects Activities. Menu Option 00.
function randomOption(){

    switch(optionSelect){
        //Case for Destination Options.
        case 0:
            randomDestination = randomSelect(desArray);
            alert(`${showOption()} was selected for Destination!`);
            menuSelect = 1;
            break;
        //Case for Restaurant Options.
        case 1:
            randomRestaurant = randomSelect(foodArray);
            alert(`${showOption()} was selected for Restaurant!`);
            menuSelect = 1;
            break;
        //Case for Transportation Options.
        case 2:
            randomTransport = randomSelect(transArray);
            alert(`${showOption()} was selected for Transportation!`);
            menuSelect = 1;
            break;
        //Case for Entertainment Options.
        case 3:
            randomEntertainment = randomSelect(funArray);
            alert(`${showOption()} was selected for Entertainment!`);
            menuSelect = 1;
            break;
    }
}

//User Confirms Trip Information and is given the option to Reselect. Menu Option 01.
function confirm(){
    let loop = true;

    while(loop){
        let userInput = prompt(`Would you like to confirm ${showOption()}? Y/N`);
        exitListener(userInput);
        userInput = userInput.toLowerCase();

        //Load Selected Option into Confirm.
        if(userInput == "y" || userInput == "yes"){
            switch(optionSelect){
                case 0:
                    confirmDestination = true;
                    router();
                    loop = false;
                    break;
                case 1:
                    confirmRestaurant = true;
                    router();
                    loop = false;
                    break;
                case 2:
                    confirmTransport = true;
                    router();
                    loop = false;
                    break;
                case 3:
                    confirmEntertainment = true;
                    router();
                    loop = false;
                    break;
            }
        }else if(userInput == "n" || userInput == "no"){
            menuSelect = 2;
            loop = false;
        }else{
            alert("I'm sorry, I didn't quite catch that.");
        }
    }
    
}

//Reselects Trip Options. Menu Option 02.
function reSelect(){
    let loop = true;

    while(loop){
        let userInput = prompt(`Would you like to reselect ${showOption()}? Y/N`);
        exitListener(userInput);
        userInput = userInput.toLowerCase();

        if(userInput == "y" || userInput == "yes"){
            menuSelect = 0;
            loop = false;
        }else if(userInput == "n" || userInput == "no"){
            menuSelect = 1;
            loop = false;
        }else{
            alert("I'm sorry, I didn't quite catch that.");
        }
    }    
}

//Console Log or Alert the Entire trip.
function showTrip(){
    alert(
        `   Destination: ${randomDestination},
        Restaurant: ${randomRestaurant},
        Transportation: ${randomTransport},
        Entertainment: ${randomEntertainment}.`
    );

    console.log(`Destination: ${randomDestination}, Restaurant: ${randomRestaurant},
    Transportation: ${randomTransport}, Entertainment: ${randomEntertainment}.`);
}

//Produces a random option.
function randomSelect(array){
    let  randomNum = Math.floor(Math.random() * array.length);
    randomNum = array[randomNum];
    return randomNum;
}

//Returns the Current Selected Option.
function showOption(){
    switch(optionSelect){
        case 0:
            return randomDestination;
            break;
        case 1:
            return randomRestaurant;
            break;
        case 2:
            return randomTransport;
            break;
        case 3:
            return randomEntertainment;
            break;
    }
}

//Finds Options that have not been Selected yet.
function router(){
    if(confirmDestination == false){
        menuSelect = 0;
        optionSelect = 0;
    }else if(confirmRestaurant == false){
        menuSelect = 0;
        optionSelect = 1;
    }else if(confirmTransport == false){
        menuSelect = 0;
        optionSelect = 2;
    }else if(confirmEntertainment == false){
        menuSelect = 0;
        optionSelect = 3
    }
}

function narrator(){
    if(isGreeted == false){
        alert("Welcome to Trip Planner!");
        alert("Let's get started on your trip!");
        alert("At any time you can type 'exit' into the prompt to end the Trip Planner!");
        isGreeted = true;
    }else if(confirmDestination == true && confirmRestaurant == true && confirmTransport == true && confirmEntertainment == true){
        alert("Looks like this wraps up your trip!");
        alert("Let's take a look!");
        showTrip();
        isDone = true;
    }
}

function exitListener(strng){
    strng = strng.toLowerCase();
    if(strng == "exit"){
        isDone = true;
    }
}

//FRAMEWORK///////////////////////////////
//While loop which holds:
//if statements to Select Option.
//AND Switch statement to Select Menu Options.

while(isDone == false){
    narrator();

    switch(menuSelect){
        case 0:
            randomOption();
            break;
        case 1:
            confirm();
            break;
        case 2:
            reSelect();
            break;
    }
} 

