
//Variables so we can determine the time
let min = 9;
let sec = 59;

let counter = 0; //Used to switch back and forth 

let lastClick = 0;
let delay = 10000000;


//Refrence to our html
const button = document.querySelector('href')
const mintext = document.getElementById("min");
const sectext = document.getElementById("sec");
const breathtext = document.getElementById("breath");

//The Timer function calls set interval function for timedo and
//textinstrcut. It also Intialzies the text.
function timer() {
    //Added a delay to stop user from clicking multiple times
    if (lastClick >= (Date.now() - delay)) {
        return;

    }
    lastClick = Date.now();


    timedo = setInterval(calcsec, 1000);
    breathtext.textContent = "Breath in";
    textinstruct = setInterval(changeText, 5000);

}

//Change text changes the text by switching on each set interval call.
function changeText() {
    if (counter == 0) {
        breathtext.textContent = "Breath out";
        counter = 1;
        if (min == 0) {
            breathtext.textContent = "Great job! I hope you feel better!";
        }
    }
    else if (counter == 1) {
        breathtext.textContent = "Breath in";
        counter = 0;
    }
}


//Calcsec, calcualates the second that is left. If seconds is greater than zero
//we subtract by 1. Otherwise we move on the the Calc Min.
function calcsec() {
    sectext.textContent = sec;
    mintext.textContent = min;

    if (sec > 0) {
        sec -= 1;
    }
    else if (sec <= 0) {
        console.log("checking if min is 0")
        calcMin();

    }

}

//Caclcmin Calculates the minutes that are left.
//If the min value is greater than zero we reset the seconds
//counter value and subtract by one.
//If min value ever reaches zero, then we know our timer
//is over. Once we know that we stop all the intervals
// and exit out.
function calcMin() {
    console.log("min is currently: " + min);
    if (min > 0) {
        min -= 1;
        sec = 59;

    }
    else if (min <= 0) {
        console.log("Reached the end");
        clearInterval(timedo);
        clearInterval(textinstruct);
        return;
    }

}


