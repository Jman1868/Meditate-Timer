
var min=9;
var sec=59;
var counter=0;

const button = document.querySelector('href')
const mintext = document.getElementById("min");
const sectext = document.getElementById("sec");
const breathtext = document.getElementById("breath");

///TODO: DOCUMENT THIS CODE
function timer()
{
   
    console.log("help HELP"); 
    timedo = setInterval(calcsec, 1000);
    breathtext.textContent = "Breath in";
    textinstruct = setInterval(changeText, 5000);
}

function changeText()
{
    if(counter==0)
    {
        breathtext.textContent="Breath out";
        counter=1;
    }else if(counter==1)
    {
        breathtext.textContent = "Breath in";
        counter=0;
    }
}

function calcsec()
{
    sectext.textContent = sec;
    mintext.textContent=min;
    console.log(sec);
    if(sec>0)
    {
        sec -= 1;
    }
    else if(sec<=0)
    {   console.log("checking if min is 0")
        calcMin();
        
    }
 
}

function calcMin()
{
    console.log("min is currently: "+min);
    if(min>0)
    {
        min -= 1;
        sec=59;

    }
    else if(min <= 0)
    {
        console.log("Reached the end");
        clearInterval(timedo);
        clearInterval(textinstruct);
        return;
    }
    
}


