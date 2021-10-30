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
let foodArray = ["McDonalds", "Burger King", "Carls Jr", "Five Guys"];
let transArray = ["Rental Car", "Airplane", "Boat", "Rocket"];
let funArray = ["Scuba Diving", "Sky Diving", "Hiking", "Surfing"];

//Holds the randomly picked item from our arrays.
let randomDestination = "";
let randomRestaurant = "";
let randomTransport = "";
let randomEntertainment = "";
let menuSelect = 0;
let optionSelect = 0;
console.log(randomDestination);

//Confirmed Options.
let confirmDestination = false;
let confirmRestaurant = false;
let confirmTransport = false;
let confirmEntertainment = false;

//FUNCTIONS///////////////////////////////////////
//MENU OPTIONS:
//0: Randomly Select Option.
//1: Confirm Option.
//2: Reselect Option.
//3: Show Trip Options.
/////////////////
//OPTION SELECT:
//0: Destination.
//1: Restaurant.
//2: Transportation.
//3: Entertainment.

//Function Randomly Selects Activities.
function randomOption(){
    let loop = true;

    while(loop){
        switch(optionSelect){
            //Case for Destination Options.
            case"0":
                randomDestination = randomSelect(desArray);
                alert(`${randomDestination} was selected!`);
                menuSelect = 1;
                break;
            //Case for Restaurant Options.
            case"1":
                randomRestaurant = randomSelect(foodArray);
                alert(`${randomRestaurant} was selected!`);
                menuSelect = 1;
                break;
            //Case for Transportation Options.
            case"2":
                randomTransport = randomSelect(transArray);
                alert(`${randomTransport} was selected!`);
                menuSelect = 1;
                break;
            //Case for Entertainment Options.
            case"3":
                randomEntertainment = randomSelect(funArray);
                alert(`${randomEntertainment} was selected!`);
                menuSelect = 1;
                break;
        }
    }
}

//Produces a random number.
function randomSelect(array){
    let  randomNum = Math.floor(Math.random() * array.length);
    randomNum = array[randomNum];
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
function confirm(strng){
    let loop = true;

    while(loop){
        let userInput = prompt(`Would you like to confirm ${strng}? Y/N`);

        //Load Selected Option into Confirm.
        if(userInput == "Y" || userInput == "y" || userInput == "Yes" || userInput == "yes"){
            switch(optionSelect){
                case"0":
                    confirmDestination = true;
                    console.log("you entered 0")
                    break;
                case"1":
                    confirmRestaurant = true;
                    break;
                case"2":
                    confirmTransport = true;
                    break;
                case"3":
                    confirmEntertainment = true;
                    break;
            }
        }else if(userInput == "N" || userInput == "n" || userInput == "No" || userInput == "no" || userInput == "nO" || userInput == "NO"){
            menuSelect = 2;
            loop = false;
        }else{
            alert("I'm sorry, I didn't quite catch that.");
        }
    }
    
}

//When All Selection is Confirmed. Console Log or Alert the Entire trip.
function showTrip(){
    //Confirm 
}

//FRAMEWORK///////////////////////////////
//While loop which holds:
//if statements to Select Option.
//AND Switch statement to Select Menu Options.

/* while(confirmDestination && confirmRestaurant && confirmTransport && confirmEntertainment != true){
    alert("Welcome to Trip Planner!");

    switch(menuSelect){
        case"0":
            randomOption();
            break;
        case"1":
            confirm();
            break;
        case"2":
            reSelect();
            break;
        case"3":
            showTrip();
            break;
    }
} */

