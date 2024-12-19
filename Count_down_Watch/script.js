const endDate = new Date("20 Dec, 2024 20:00:00").getTime();
const startDate = new Date().getTime();

function updateTimer(){
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const pendingDistance = endDate - now

    //calculate days min hrs sec
    // 1day = 24*60*60*1000ms
    const oneDayInMillis = (24*60*60*1000);
    const oneHoursInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const oneSecondInMillis = (1000);
    const days = Math.floor(pendingDistance / (oneDayInMillis));
    const hrs  = Math.floor((pendingDistance % (oneDayInMillis)/ (oneHoursInMillis)));
    const mins = Math.floor((pendingDistance % (oneHoursInMillis))/(oneMinInMillis));
    const secs = Math.floor((pendingDistance%(oneMinInMillis))/oneSecondInMillis);

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //Calcuating widht parcentage for progress bar
    const totalDistance = endDate - startDate;
    const parcentageDistance = (distanceCovered/totalDistance) *100;

    //set width for progress bar
    document.getElementById('progress-bar').style.width = parcentageDistance + "%";

    if(distancePending < 0){
        clearInterval();
        document.getElementById('countdown').innerHTML = "EXPEIRED";
        document.getElementById('progress-bar').style.width = "100%";
    }
}

let x = setInterval(function updateTimer(){
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const pendingDistance = endDate - now

    //calculate days min hrs sec
    // 1day = 24*60*60*1000ms
    const oneDayInMillis = (24*60*60*1000);
    const oneHoursInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const oneSecondInMillis = (1000);
    const days = Math.floor(pendingDistance / (oneDayInMillis));
    const hrs  = Math.floor((pendingDistance % (oneDayInMillis)/ (oneHoursInMillis)));
    const mins = Math.floor((pendingDistance % (oneHoursInMillis))/(oneMinInMillis));
    const secs = Math.floor((pendingDistance%(oneMinInMillis))/oneSecondInMillis);

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //Calcuating widht parcentage for progress bar
    const totalDistance = endDate - startDate;
    const parcentageDistance = (distanceCovered/totalDistance) *100;

    //set width for progress bar
    document.getElementById('progress-bar').style.width = parcentageDistance + "%";

    if(distancePending < 0){
        clearInterval();
        document.getElementById('countdown').innerHTML = "EXPEIRED";
        document.getElementById('progress-bar').style.width = "100%";
    }
}
    ,1000);

