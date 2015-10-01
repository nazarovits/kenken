function startTimer() {
    function setTime(){
        var hours = pad(parseInt(totalSeconds/3600));
        var minutes = pad(parseInt(totalSeconds/60));
        var seconds = pad(totalSeconds%60);
        var str = hours + ":" + minutes + ":" + seconds;

        //puzzleTimer.text(str);
        //puzzleTimer.innerHTML = str;
        totalSeconds = parseInt((new Date - start)/1000);
        postMessage(str);
    }

    function pad(val){
        var valString = val + "";

        if(valString.length < 2){
            return "0" + valString;
        } else {
            return valString;
        }
    }

    //var puzzleTimer = $('#puzzleTimer');
    //var puzzleTimer = document.getElementById('puzzleTimer');
    var start = new Date;
    var totalSeconds = 0;

    setInterval(setTime, 500);
};

console.log('start timer');
startTimer();