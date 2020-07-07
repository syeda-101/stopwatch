var hr=0;
var min=0;
var sec=0;
var msec=0;

var hrHeading= document.getElementById("hr");
var minHeading= document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");


var interval;

function timer(){
    msec++
    msecHeading.innerHTML=msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec = 00
    }else if(sec >= 60){
        min++
        sec=00
        minHeading.innerHTML = min
        sec = 00
    }else if(min >= 60){
        hr++
        min=00
        hrHeading.innerHTML = hr
        min = 00
    }
    document.getElementById("myBtn").disabled = true;
    
}
function start(){
interval = setInterval(timer,10)
    
}

function stop(){
    clearInterval(interval)
    document.getElementById("myBtn").disabled= false;
}

function reset(){
    hr = "00";
    min = "00";
    sec = "00";
    msec = "00";
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
//    clearInterval(interval)
    stop()
    document.getElementById("myBtn").disabled= false;
}
