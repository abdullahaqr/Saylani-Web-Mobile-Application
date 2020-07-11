// var min = 0;
// var sec = 0;
// var msec = 0;
// var minHeading = document.getElementById("min");
// var secHeading = document.getElementById("sec");
// var msecHeading = document.getElementById("msec");
// var interval;

// function timer() {
//     msec++
//     msecHeading.innerHTML = msec;
//     if (msec >= 100) {
//         sec++
//         secHeading.innerHTML = sec;
//         msec = 0;
//     } else if (sec >= 60) {
//         min++
//         minHeading.innerHTML = min
//         sec = 0
//     }
// }

// function start() {
//     interval = setInterval(timer, 10)

// }

// function stop(){
//     clearInterval(interval)
// }

// function reset(){
//     min = 0;
//     sec = 0;
//     msec = 0;
//     minHeading.innerHTML = min
//     secHeading.innerHTML = sec
//     msecHeading.innerHTML = msec
// }




var min = 0;
var sec = 0;
var msec = 0;
var hour = 0;
// var displaymin = 0;
// var displaysec = 0;
// var displaymsec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var hourHeading = document.getElementById("hour");
var interval;
var status = "stopped";
var Laps = document.getElementById('laps');
var counter = 1;

function stopWatch(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec > 99){
        sec++
        msec = 0;

        if(sec > 59){
            min++
            sec = 0;

            if(min > 59){
                hour++
                min = 0;

            }
        }
    }

    if(msec < 10){
        msecHeading.innerHTML = "0" + msec.toString();
    }else{
        secHeading.innerHTML = sec;
    }

    if(sec < 10){
        secHeading.innerHTML = "0" + sec.toString();
    }else{
        secHeading.innerHTML = sec;
    }

    if(min < 10){
        minHeading.innerHTML = "0" + min.toString();
    }else{
        minHeading.innerHTML = min;
    }

    if(hour < 10){
        hourHeading.innerHTML = "0" + hour.toString();
    }else{
        hourHeading.innerHTML = hour;
    }
}

function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        document.getElementById("startStop").className = "btn btn-danger mx-2";
        status = "started";
        

    }
    else{

        clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        document.getElementById("startStop").className = "btn btn-success mx-2";
        status = "stopped";

    }

}




function reset(){

    clearInterval(interval);
    min = 0;
    sec = 0;
    msec = 0;
    hour = 0;
    msecHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    minHeading.innerHTML = "00";
    hourHeading.innerHTML = "00";
    document.getElementById("startStop").innerHTML = "Start";
    Laps.innerHTML = null;
    counter = 1;

}


function lap() {
    Laps.innerHTML += "<li>" + "Lap#"+(counter++).toString() + "&nbsp&nbsp&nbsp&nbsp&nbsp" + hourHeading.innerHTML + ":"  + minHeading.innerHTML + ":" + secHeading.innerHTML + ":" + msecHeading.innerHTML + "</li>";
  }



















































