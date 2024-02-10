let totalSeconds;

let id

function start(){
    totalSeconds = 
    Number(document.getElementById("Hours").value)*3600 +
    Number(document.getElementById("Minutes").value)*60 +
    Number(document.getElementById("Seconds").value);

    if(totalSeconds <= 0){
        alert("please enter valid a valid time");

        return
    }

    id = setInterval(updateTimer,1000)
}

function updateTimer(){
    if(totalSeconds <= 0){
        clearInterval(id)
        alert("time is up");
        return
    }

    let Hours = Math.floor(totalSeconds/3600);

    let Minutes = Math.floor((totalSeconds%3600)/60);

    let Seconds = totalSeconds%60

    document.getElementById("Hours").value = Hours
    document.getElementById("Minutes").value = Minutes
    document.getElementById("Seconds").value = Seconds

    totalSeconds--
}
function pause(){
    clearInterval(id)
}

function reset(){
    clearInterval(id)
    Hours.value = "0";
    Minutes.value = "0";
    Seconds.value = "0";
}

// function formatTime(time) {
//     return time < 10 ? "0" + time : time;
// }