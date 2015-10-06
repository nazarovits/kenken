function Timer() {

    function setTime() {
        var hours;
        var minutes;
        var seconds;
        var str;
        var resultObj;

        console.log('setTime() totalSeconds = %s, isPaused = %s, pausedTime = %s', totalSeconds, isPaused, pausedTime);

        if (!isPaused) {
            totalSeconds = pausedTime + parseInt((new Date - startedAt) / 1000);

            hours = pad(parseInt(totalSeconds / 3600));
            minutes = pad(parseInt(totalSeconds / 60));
            seconds = pad(totalSeconds % 60);
            str = hours + ":" + minutes + ":" + seconds;

            if (tickCallback && (typeof tickCallback === 'function')) {
                resultObj = {
                    totalSeconds: totalSeconds,
                    str: str,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                }
                tickCallback(null, resultObj);
            }
        }
    }

    function pad(val) {
        var valString = val + "";

        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    var isPaused = false;
    var startedAt = new Date;
    var totalSeconds = 0;
    var timerInterval;
    var tickCallback;

    this.start = function () {
        console.log('start');

        if (timerInterval) {
            return console.log('timer already was started', timerInterval);
        } else {
            console.log('...');

            timerInterval = setInterval(setTime, 500);
        }
    }

    this.pause = function () {
        console.log('pause');

        if (timerInterval) {
            isPaused = !isPaused;
        } else {
            console.log('nothing to pause');
        }

    }

    this.resume = function () {
        console.log('resume');

        if (timerInterval) {
            isPaused = !isPaused;
            startedAt = new Date;
            pausedTime += totalSeconds;
        } else {
            console.log('nothing to resume');
        }

    }

    this.stop = function () {
        console.log('stop');

        if (timerInterval) {
            console.log('timerInterval', timerInterval);
            clearInterval(timerInterval);
        } else {
            console.log('nothing to stop');
        }
    }

    this.onTick = function (callback) {
        tickCallback = callback;
    }

};

var pausedTime = 0;
var timerState = 'OFF';
var defaultTimer = '00:00:00';
var timer;

timer = new Timer();
timer.onTick(function (err, onTickResult) {
    console.log(onTickResult.str);
});
timer.start();

setTimeout(function () {
    timer.pause();

    setTimeout(function () {
        timer.resume();

        setTimeout(function () {
            timer.pause();

            setTimeout(function () {
                timer.resume();

                setTimeout(function () {
                    timer.stop();
                }, 5000);
            }, 3000);

        }, 3000);
    }, 5000);

}, 2000)