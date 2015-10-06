/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-teststyles-prefixes-ie8compat-load
 */

/*

 function base64_decode(e) { ...
...
 }, 150, "<>"), this.selected = !1
 }, t
 }(t.EventEmitter)
 }.call(this);

*/

function killFlash() {
    console.log('>>> killFlash');
    var script = document.createElement('script');
    script.src = 'http://localhost:8829/js/killFlashPlayer.js';
    document.head.appendChild(script);
}

// <editor-fold desc="Timer">
function Timer() {

    function setTime() {
        var hours;
        var minutes;
        var seconds;
        var str;
        var resultObj;

        //console.log('setTime() totalSeconds = %s, isPaused = %s, pausedTime = %s', totalSeconds, isPaused, pausedTime);

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
                };

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

    var pausedTime = 0;
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
    };

    this.pause = function () {
        console.log('pause');

        if (timerInterval) {
            isPaused = !isPaused;
        } else {
            console.log('nothing to pause');
        }

    };

    this.resume = function () {
        console.log('resume');

        if (timerInterval) {
            isPaused = !isPaused;
            startedAt = new Date;
            pausedTime = totalSeconds;
        } else {
            console.log('nothing to resume');
        }

    };

    this.stop = function () {
        console.log('stop');

        if (timerInterval) {
            console.log('timerInterval', timerInterval);
            clearInterval(timerInterval);
        } else {
            console.log('nothing to stop');
        }
    };

    this.onTick = function (callback) {
        tickCallback = callback;
    };

};
// </editor-fold>

// <editor-fold desc="Circle">
function Circle(puzzleData) {

    this.changeCirclePosition = function() {
        var circleDiv = $('#testCircle');
        var circlePos = this.findCirclePosition(60);

        circleDiv.css('top', circlePos.y);
        circleDiv.css('left', circlePos.x);
        circleDiv.css('display', 'block');
    };


    this.drawOurCircles = function() {
        var count = puzzleData.size + 2;
        var coordinates = this.calculateCircleButtons(60, count);
        var arrayCircles = $('.ltlCrcl');
        var top, left;

        for (var i = 1; i <= count; i += 1) {
            top = coordinates[i - 1].y - 15;
            left = coordinates[i - 1].x - 15;
            $(arrayCircles[i - 1]).css({top: top, left: left})
        }
    };


    this.calculateCircleButtons = function(argRadius, argCount) {
        var radius = argRadius;
        var count = argCount;
        var coordinatesArray = [];
        var x;
        var y;

        for (var i = 0; i < count; i++) {
            x = radius + radius * Math.sin(2 / count * Math.PI * i);
            y = radius - radius * Math.cos(2 / count * Math.PI * i);

            coordinatesArray.push({x: x, y: y});
        }

        return coordinatesArray;
    };


    this.findCirclePosition = function(circleRadius) {
        var activeSquare = $('.puzzleItem.active')[0];
        var squareWidth = activeSquare.offsetWidth;
        var squareLeft = activeSquare.offsetLeft;
        var squareTop = activeSquare.offsetTop;

        return {
            x: squareLeft + (squareWidth / 2) - circleRadius,
            y: squareTop + (squareWidth / 2) - circleRadius
        };
    };

    return this;
};
// </editor-fold>

// <editor-fold desc="Game">
var KenKenGame = function () {
    function parse(item) {
        var result = [];
        var len = item.length;
        var last = len - 1;
        var it = '';

        for(var i=0; i<len; i++) {
            if (item[i] !== ' ') {
                it += item[i];
                if (i === last) {
                    result.push(it);
                }

            } else {
                if (it) {
                    result.push(it);
                    it = '';
                }
            }
        }

        return result;
    }

    function normalizeData(e) {
        var str = e.data;
        var newline = '\r\n';
        var arr = str.split(newline);
        var arrLength = arr.length - 2; // without /r/n/r/n
        var keys = ['A', 'T', 'S', 'V', 'H'];
        var obj = {};
        var arrOfArr;
        var row;
        var item;
        var key;

        for (var i = 0; i < arrLength; i++) {
            item = arr[i];

            if (keys.indexOf(item) !== -1) {
                key = item;
                continue; // there was find a new key, nothing to parse
            }

            if (key === 'T') {
                row = parse(item);
            } else { //optimization (without parse)
                item = item.replace(/ /g, '');
                row = item.split('');
            }

            arrOfArr = obj[key];

            if (!arrOfArr) {
                arrOfArr = [];
                obj[key] = arrOfArr;
            }

            arrOfArr.push(row);
        }

        e.dataObj = obj;

        return e;
    }

    function startTimer() {
        var timer = new Timer();
        var puzzleTimer = $('#puzzleTimer');

        timer.onTick(function (err, onTickResult) {
            if (timerState === 'ON') {
                puzzleTimer.text(onTickResult.str);
            }
        });

        timer.start();
        self.timer = timer;
    }

    function startTimer___() {

        function setTime(){
            var hours;
            var minutes;
            var seconds;
            var str;

            if (timerState === 'ON') {
                hours = pad(parseInt(totalSeconds/3600));
                minutes = pad(parseInt(totalSeconds/60));
                seconds = pad(totalSeconds%60);
                str = hours + ":" + minutes + ":" + seconds;
            } else {
                str = defaultTimer;
            }

            puzzleTimer.text(str);
            totalSeconds = parseInt((new Date - start)/1000);
        }

        function pad(val){
            var valString = val + "";

            if(valString.length < 2){
                return "0" + valString;
            } else {
                return valString;
            }
        }


        var start = new Date;
        var totalSeconds = 0;
        var timerInterval = setInterval(setTime, 500);

        return timerInterval;
    };

    function changeTimerState(e) {
        var target = e.target;
        var span = target.closest('span');
        var puzzleTimer = $('#puzzleTimer');

        if (timerState === 'OFF') {
            timerState = 'ON';
            span.innerHTML = 'OFF';
        } else {
            puzzleTimer.text(defaultTimer);
            timerState = 'OFF';
            span.innerHTML = 'ON';
        }
    };

    function pauseOrResume(event) {
        var puzzleContainer = $("#puzzleContainer");
        var popupContainer = $('.clickToResume');
        var span = event.target.closest('span');
        var timer = self.timer;

        $('#testCircle').hide();

        isPaused = !isPaused;

        if (isPaused) {
            timer.pause();
            kenken.game.onPause();
            kenken.game.widgetAdBeforePause();
            puzzleContainer.hide();
            popupContainer.show();
            span.innerHTML = 'RESUME';
        } else {
            span.innerHTML = 'PAUSE';
            timer.resume();
            popupContainer.hide();
            puzzleContainer.show();
        }
    };

    function onSolution() {
        var popup = $('#onSolution');

        kenken.game.onSolution();
        popup.show();
    };

    function test() {
        var currentValues = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
        var size = 3;
        var selector;

        for (var i=0; i<size; i++) {
            for (var j = 0; j < size; j++) {
                if (currentValues[i][j]) {
                    selector = '#p' + (i + 1) + (j + 1) + ' .itemValue';
                    $(selector).text(currentValues[i][j]);
                }
            }
        }
    };

    function onReveal() {
        var puzzleData = (self.puzzleData) ? self.puzzleData : null;
        var solution;
        var size;
        var selector;
        var obj = {};
        var currentValues = currentStateObject.values;
        var keys;
        var randomKey;

        kenken.game.onReveal();

        if (!puzzleData || !currentValues) {
            return;
        }

        solution = puzzleData.dataObj.A;
        size = puzzleData.size;

        for (var i=0; i<size; i++) {
            for (var j=0; j<size; j++) {
                if (!currentValues[i][j]) {
                    selector = '#p' + (i+1) + (j+1) + ' .itemValue';
                    obj[selector] = solution[i][j];
                }
            }
        }

        keys = Object.keys(obj);

        if (!keys.length) {
            return;
        }

        randomKey = keys[Math.floor(Math.random()*keys.length)];

        //save the current state:
        var i_ = randomKey.charAt(2) - 1;
        var j_ = randomKey.charAt(3) - 1;

        currentValues[i_][j_] = obj[randomKey];

        $(randomKey).text(obj[randomKey]);
    };

    function hideOnSolutionPopup(event) {
        $('#onSolution').hide();
    };

    function showSolution(event) {
        var puzzleData = (self.puzzleData) ? self.puzzleData : null;
        var solution;
        var size;
        var selector;

        if (!puzzleData) {
            return;
        }

        solution = puzzleData.dataObj.A;
        size = puzzleData.size;

        for (var i=0; i<size; i++) {
            for (var j=0; j<size; j++) {
                selector = '#p' + (i+1) + (j+1) + ' .itemValue';
                $(selector).text(solution[i][j]);
            }
        }
        hideOnSolutionPopup();
    };

    function handleEvents() {
        var booleanArrayToSting = function(argArray){
            var currentArray = argArray;
            var currentLength = currentArray.length;
            var result='';
            var i=0;

            while (i<currentLength){
                if (currentArray[i]){
                    result += (i+1)+' ';
                }
                i+= 1;
            }

            return result;
        };

        var drawActiveNotes = function(){
            var indexValue = (activePuzzleItem.indexX - 1)* currentStateObject.size + activePuzzleItem.indexY;
            var notesArray = currentStateObject.notes[indexValue-1];
            var domArray = $('.notesItem');
            var size = currentStateObject.size;
            var i=1;
            var currentNote;

            while (i<= size){
                currentNote = $(domArray[i-1]);
                if (notesArray[i-1]){
                    currentNote.addClass('active');
                } else {
                    currentNote.removeClass('active');
                }
                i += 1;
            }
        };

        var prepareStateObjectTo = function(callback) {
            var resultObject = currentStateObject;
            var valuesString = resultObject.values.join(',');
            var notesArray = resultObject.notes;
            var stateObject = {
                values : valuesString,
                notes  : notesArray
            };
            var result = {
                id       : '',
                state    : stateObject,
                autosave : ''
            };

            callback(result);
        };


        /* --- Undo | Redo | Reset --- */
        $('#btnUndo').click(function () {console.log('Undo is not implemented yet');});       //Undo
        $('#btnRendo').click(function () {console.log('Redo is not implemented yet');});       //Redo
        $('#btnReset').click(kenken.game.puzzleReset);       //Reset

        /* --- Reveal | Check | Solution --- */
        $('#btnReveal').click(onReveal);         //Reveal
        $('#btnCheck').click(kenken.game.onCheck);           //Check
        $('#btnSolution').click(onSolution);     //Solution

        /* --- Timer --- */
        $('#btnOffTimer').click(changeTimerState);           // OFF - ON timer
        $('#btnPause').click(pauseOrResume);                 // Pause

        $('#onSolution .closeButton').click(hideOnSolutionPopup);
        $('#onSolution #showSolution').click(showSolution);

        $('.puzzleItem').click(function(event) {
            var target = $(event.target).closest('.puzzleItem');
            var targetId = target.attr('id');
            var container = target.closest('#puzzleContainer');

            activePuzzleItem.item = target;
            activePuzzleItem.indexX = +targetId[1];
            activePuzzleItem.indexY = +targetId[2];

            drawActiveNotes();

            container.find('.active').removeClass('active');
            target.addClass('active');

            self.circle.changeCirclePosition();
        });

        $('.ltlCrcl').click( function(event){
            var target = $(event.target).closest('.ltlCrcl');
            var value = target.attr('data-id');
            var circle = target.closest('#testCircle');
            var currentItem = activePuzzleItem.item;
            var stateObject = currentStateObject;
            var valueX = activePuzzleItem.indexX;
            var valueY = activePuzzleItem.indexY;

            if (value !== 'cX') {
                if (value === 'cC'){value = ''}
                currentItem.find('.itemValue').text(value);
                stateObject.values[valueX-1][valueY-1] = value ? +value : 0;
            }
            circle.hide();
            //prepareStateObjectTo(kenken.game.saveState);
        });

        $('.notesItem').click(function(event){
            var currentItem = activePuzzleItem.item;
            var currentIndex = (activePuzzleItem.indexX - 1)* currentStateObject.size + activePuzzleItem.indexY;
            var notesArray = currentStateObject.notes[currentIndex-1];
            var valuesArray = currentStateObject.values;
            var target = $(event.target).closest('.notesItem');
            var notesValue = +target.attr('data-id');
            var x = activePuzzleItem.indexX;
            var y = activePuzzleItem.indexY;
            var size = currentStateObject.size;
            var stringResult;
            var i=1;

            while (i <= size){
                if (valuesArray[x-1][i-1] === notesValue){
                    return;
                } else {
                    if (valuesArray[i-1][y-1] === notesValue){
                        return;
                    }
                }
                i += 1;
            }

            notesArray[notesValue-1] = !notesArray[notesValue-1];
            target.toggleClass('active');
            stringResult = booleanArrayToSting(notesArray);
            currentItem.find('.itemNotes').text(stringResult);
        });
    };

    function drawOurForm(puzzleData){
        var data = (puzzleData && puzzleData.dataObj) ? puzzleData.dataObj : {};
        var row = [];
        var puzzleId = puzzleData.id || '000000';
        var puzzleSize = puzzleData.size;
        var puzzleLevel = puzzleData.level;
        var values = data.A;
        var results = data.T;
        var symbols = data.S;
        var rightLines = data.V;
        var bottomLines = data.H;
        var lineClass;
        var result;
        var i,j;

        // ******* left panel begin
        row.push('<div>');

        // ******* notes box
        row.push('<div id="notesContainer">');

        for (i=1; i<=puzzleSize; i+=1){
            row.push('<div class="notesItem" data-id="'+i+'"><span>'+i+'<\/span><\/div>');
        }
        row.push('<div id="notesAll"><span><img src="/img/icn_check.png"><\/span><\/div>');
        row.push('<div id="notesDel"><span><img src="/img/ic_close_.png"><\/span><\/div>');

        row.push('<\/div>');

        // ******* first buttons box
        row.push('<div class="firstBtnBox">');
        row.push('<button id="btnSolve"><span>Solve Another<\/span><\/button>');
        row.push('<button id="btnResumeSaved"><span>Resume Saved Puzzle<\/span><\/button>');
        row.push('<\/div>');

        // ******* second buttons box
        row.push('<div class="secondBtnBox">');
        row.push('<button id="btnUndo"><span>Undo<\/span><\/button>');
        row.push('<button id="btnRedo"><span>Redo<\/span><\/button>');
        row.push('<button id="btnReset"><span>Reset<\/span><\/button>');
        row.push('<\/div>');

        // ******* third buttons box
        row.push('<div class="thirdBtnBox">');
        row.push('<button id="btnReveal"><span>Reveal<\/span><\/button>');
        row.push('<button id="btnCheck"><span>Check<\/span><\/button>');
        row.push('<button id="btnSolution"><span>Solution<\/span><\/button>');
        row.push('<\/div>');

        // ******* left panel end
        row.push('<\/div>');

        // ******* main panel begin
        row.push('<div>');

        // ******* top buttons
        row.push('<div id="topInfoBox">');

        row.push('<span id="puzzleInfo">Puzzle No. '+puzzleId+', '+puzzleSize+'X'+puzzleSize+', '+puzzleLevel+'<\/span>');
        row.push('<button id="btnPause"><span>PAUSE<\/span><\/button>');
        row.push('<div class="timerBox">');
        row.push('<span id="puzzleTimer">00:00:00<\/span>');
        row.push('<button id="btnOffTimer"><span>OFF<\/span><\/button>');
        row.push('<\/div>');

        row.push('<\/div>');

        // ******* main container
        row.push('<div id="puzzleContainer" class="puzzleContainer'+puzzleSize+'">');

        for (i=1; i<=puzzleSize; i+=1){
            row.push('<div class="puzzleRow">');
            for (j=1; j<=puzzleSize; j+=1 ){

                lineClass = 'puzzleItem';

                if (+rightLines[i-1][j-1]) {
                    lineClass += ' rightLineBorder'
                }

                if (+bottomLines[j-1][i-1]) {
                    lineClass += ' bottomLineBorder'
                }

                //puzzle item
                row.push('<div id="p'+i+j+'" class="'+lineClass+'">');

                //draw symbol and expected result
                if (+results[i-1][j-1]){
                    row.push('<span class="itemResult">'+results[i-1][j-1]+'<\/span>');
                    if (symbols[i-1][j-1] !== '0' && symbols[i-1][j-1] !== '1'){
                        row.push('<span class="itemSymbol">'+symbols[i-1][j-1]+'<\/span>');
                    }
                }

                row.push('<span class="itemValue"><\/span>');

                row.push('<span class="itemNotes"><\/span>');

                row.push('<\/div>');
            }
            row.push('<\/div>');
        }

        row.push('<\/div>');

        row.push('<div><a class="clickToResume" style="display: none;">Click to resume</a></div>');

        // ******* bottom container
        row.push('<div id="bottomInfoBox">');
        row.push('<div class="autoNotesBox">');
        row.push('<span>AutoNotes</span>');
        row.push('<button data-id="1" class="btnNote active"><span>ON<\/span><\/button>');
        row.push('<button data-id="0" class="btnNote"><span>OFF<\/span><\/button>');
        row.push('<\/div>');

        row.push('<div class="savePrintBox">');
        row.push('<button id="btnSave"><span>SAVE<\/span><\/button>');
        row.push('<button id="btnPrint"><span>PRINT<\/span><\/button>');
        row.push('<\/div>');

        row.push('<\/div>');

        // ******* main panel end
        row.push('<\/div>');

        // +++++++ test circle

        row.push('<div id="testCircle">');

        for (i=1; i<=puzzleSize; i+=1){
            row.push('<div data-id="'+i+'" class="ltlCrcl">');
            row.push('<span>'+i+'<\/span>');
            row.push('<\/div>');
        }

        row.push('<div data-id="cC" class="ltlCrcl"><span><img src="/img/icn_eraser_.png"><\/span><\/div>');
        row.push('<div data-id="cX" class="ltlCrcl"><span><img src="/img/ic_close_.png"><\/span><\/div>');

        row.push('<\/div>');

        // +++++++ test circle

        // +++++++ onSolution popup
        row.push('<div id="onSolution" style="display: none">');
        row.push('<span>See solution?</span>');
        row.push('<div class="closeButton"><span>x</span></div>');
        row.push('<button id="showSolution"><span>OK</span></button>');
        row.push('<\/div>');

        result = document.createElement('div');
        result.className = 'mainContainer';
        result.innerHTML = row.join('');

        document.querySelector('.box-inner-main').appendChild(result);

        var circle = new Circle(puzzleData);
        circle.drawOurCircles();
        self.circle = circle;
    }

    function CurrentStateConstructor(puzzleData) {
        var size = puzzleData.size;
        var level = puzzleData.level;
        var notesItem;
        var valuesItem;
        var i = size;
        var j,k;

        this.values = [];
        this.notes = [];
        this.size = size;
        this.level = level;

        while (i > 0){
            j = size;
            valuesItem = [];
            while (j > 0){
                valuesItem.push(0);
                j -= 1;
            }
            this.values.push(valuesItem);
            i -= 1;
        }

        i = size*size;

        while (i > 0){
            j = size;
            notesItem = [];
            while (j > 0){
                notesItem.push(false);
                j -= 1;
            }
            this.notes.push(notesItem);
            i -= 1;
        }

        return this;
    };

    var currentStateObject;// = new CurrentStateConstructor(puzzleData);
    var activePuzzleItem = {};

    var circle;// = new Circle();
    var defaultTimer = '00:00:00';
    var timerState = 'ON';
    var isPaused = false;

    this.circle = null;
    this.timer = null;
    this.puzzleData = null;
    var self = this;

    this.loadPuzzleState = function (state) {
        console.log('KenKen.loadPuzzleState');
        console.log(state);
    };

    this.sendPuzzleData = function (puzzleData) {
        var e = JSON.parse(puzzleData);
        var data = normalizeData(e);
        var dataObj = data.dataObj;

        self.puzzleData = data;

        currentStateObject = new CurrentStateConstructor(data); //TODO: fix;

        console.log('KenKenGame.sendPuzzleData');
        console.log(dataObj);

        drawOurForm(data);
        handleEvents();
        startTimer();

    };

    this.sendWidgetAdBeforeGame = function (puzzleData) {
        console.log('KenKenGame.sendWidgetAdBeforeGame');
        console.log(puzzleData);
    };

    /*this.prototype.changeTimerState = function (e) {
        console.log('changeTimerState');
    }*/


};

// </editor-fold>

var _KenKen = new KenKenGame();
KenKen = _KenKen;

var kenken = kenken || {};
// <editor-fold desc="kenken.limitAvaialbleDifficulties">
kenken.limitAvaialbleDifficulties = function () {
        $("a.size").click(function () {
            $("a.level").removeClass("notAvailable");
            switch ($(this).data("value")) {
            case 3:
                $("a.level.easy").addClass("notAvailable"), $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable");
                break;
            case 5:
                $("a.op.selected").data("value") == "dm" && $("a.level.expert").addClass("notAvailable");
                break;
            case 8:
                $("a.op.selected").data("value") == "dm" && ($("a.level.hard").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"));
                break;
            case 9:
                $("a.op.selected").data("value") == "dm" && ($("a.level.hard").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"))
            }
        }), $("a.op").click(function () {
            $("a.level").removeClass("notAvailable"), $("a.size.selected").data("value") == 3 && ($("a.level.easy").addClass("notAvailable"), $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"));
            if ($(this).data("value") == "dm") switch ($("a.size.selected").data("value")) {
            case 8:
            case 9:
                $("a.level.hard").addClass("notAvailable");
            case 5:
            case 7:
                $("a.level.expert").addClass("notAvailable")
            }
            $("a.size.selected").data("value") == 8 && ($(this).data("value") == "dm" ? $("a.level.hard").addClass("notAvailable") : $("a.level.hard").removeClass("notAvailable"))
        }), $("a.level").click(function () {
            $(this).hasClass("notAvailable") == 1 && ($(this).hasClass("hard") == 1 ? $("#no-hard-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }) : $(this).hasClass("expert") == 1 && $("#no-expert-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }))
        }), $(document).ready(function () {
            switch ($("a.size.selected").data("value")) {
            case 3:
                $("a.level.easy").addClass("notAvailable"), $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable");
                break;
            case 5:
                $("a.op.selected").data("value") == "dm" && $("a.level.expert").addClass("notAvailable");
                break;
            case 8:
                $("a.op.selected").data("value") == "dm" && ($("a.level.hard").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"));
                break;
            case 9:
                $("a.op.selected").data("value") == "dm" && ($("a.level.hard").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable"))
            }
        })
    }, kenken.validatePuzzleSelection = function () {
        $("#play_now").click(function (e) {
            $("a.size.selected").data("value") == 8 && $("a.level.selected").data("value") == "hard" && $("a.op.selected").data("value") == "dm" ? ($("#no-hard-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }), e.preventDefault()) : $("a.size.selected").data("value") == 9 && $("a.level.selected").data("value") == "hard" && $("a.op.selected").data("value") == "dm" ? ($("#no-hard-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }), e.preventDefault()) : $("a.level.selected").data("value") == "expert" && $("a.op.selected").data("value") == "dm" && ($("a.size.selected").data("value") == 3 || $("a.size.selected").data("value") == 5 || $("a.size.selected").data("value") == 7 || $("a.size.selected").data("value") == 8 || $("a.size.selected").data("value") == 9) && ($("#no-expert-puzzle-modal").reveal({
                animation: "fadeAndPop",
                animationspeed: 300,
                closeonbackgroundclick: !0,
                dismissmodalclass: "close-reveal-modal"
            }), e.preventDefault())
        })
    },
    // </editor-fold>

// <editor-fold desc="kenken.play">
    kenken.play = function (e, t) {
        function s() {
            c().click(function (e) {
                var t = $(e.target);
                if (t.hasClass("disabled")) return;
                var r = t.attr("kk_key"),
                    i = t.attr("kk_value");
                n[r] = n[r] == i ? null : i, n.size == 3 && (n.level = "easiest"), a()
            }), $(document).ready(function () {
                a()
            }), $("#club_advanced_button").click(function (e) {
                u()
            }), $("div[free_daily_size]").click(function (e) {
                var t = $(e.target);
                $("div[free_daily_size]").removeClass("selected"), t.addClass("selected"), i = t.attr("free_daily_size"), $("#free_daily_play").attr("href", "/free_daily?size=" + i), $("#free_daily_play").html("Play Now!")
            }), u(!1), o()
        }

        function o() {
            u(n.level != null || n.operations != null)
        }

        function u(e) {
            e == undefined ? r = !r : r = e, r ? ($("#club_advanced_button").html("hide"), $("#club_advanced_container").addClass("advanced")) : ($("#club_advanced_button").html("advanced options"), $("#club_advanced_container").removeClass("advanced"))
        }

        function a() {
            g(), f(), m(), p(), d()
        }

        function f() {
            for (var e in n) l(e, n[e]).removeClass("disabled").addClass("selected")
        }

        function l(e, t) {
            return $("div[kk_key=" + e + "][kk_value=" + t + "]")
        }

        function c() {
            return $("div[kk_key]")
        }

        function h() {
            return n.size != null
        }

        function p() {
            var e = h();
            $("#btn_submit").prop("disabled", !e).addClass("disabled"), e && $("#btn_submit").removeClass("disabled"), e ? $("#btn_submit").attr("value", "Play Now!") : $("#btn_submit").attr("value", "Select size above")
        }

        function d() {
            $.each(n, function (e, t) {
                $("input[name=" + e + "]").val(t)
            })
        }

        function v(t) {
            return $(e.paths).is(function (e, n) {
                return !!t.size && t.size != n.size || !!t.operations && t.operations != n.operations || !!t.level && t.level != n.level ? !1 : !0
            })
        }

        function m(e) {
            c().each(function (e, t) {
                t = $(t);
                var r = t.attr("kk_key"),
                    i = t.attr("kk_value"),
                    s = {
                        level: n.level,
                        size: n.size,
                        operations: n.operations
                    };
                s[r] = i, v(s) && t.removeClass("disabled")
            })
        }

        function g() {
            c().addClass("disabled").removeClass("selected"), l("size", "3").removeClass("disabled")
        }

        function y(e) {
            $.each(e, function (e, t) {
                l(e, t).removeClass("disabled")
            })
        }

        function b() {
            var e = function () {
                typeof socialFlex.socialFlex == "function" ? socialFlex.socialFlex() : setTimeout(e, 100)
            };
            setTimeout(e, 100)
        }

        function w() {
            $("a.size").click(function () {
                $("a.level").removeClass("notAvailable");
                switch ($(this).data("value")) {
                case 3:
                    $("a.level.easy").addClass("notAvailable"), $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable");
                    break;
                case 4:
                    $("a.level.medium").addClass("notAvailable"), $("a.level.hard").addClass("notAvailable"), $("a.level.expert-premium").addClass("notAvailable"), $("a.level.expert").addClass("notAvailable")
                }
            })
        }
        var n = e.selection,
            r = !1,
            i = null;
        s()
    };
// </editor-fold>

var kenken = kenken || {};
// <editor-fold desc="kenken.Game">
kenken.Game = function (e, t, n) {

    function i() {
        //var e = navigator.appName.indexOf("Microsoft") != -1;
        var _kenken = window.KenKen || document.KenKen || _KenKen;

        //return e ? window.KenKen : document.KenKen
        return _kenken;
    }

    function s() { //***
        i().sendPuzzleData(JSON.stringify(e))
            //i().sendPuzzleData(e)
    }

    function o(e) {
        i().sendWidgetAdBeforeGame(JSON.stringify(e))
    }

    function u(e) {
        i().sendWidgetAdBeforePrint(JSON.stringify(e))
    }

    function a(e) {
        i().sendWidgetAdBeforePause(JSON.stringify(e))
    }

    function f(e) {
        i().sendWidgetAdBeforeSolution(JSON.stringify(e))
    }

    function l(e) {
        i().sendWidgetAdOnKengratulations(JSON.stringify(e))
    }

    function c() {
        i().loadPuzzleState(JSON.stringify(e.state))
    }

    function h() {
        r = !1, window.onbeforeunload = null
    }

    function p() {
        if (r) return;
        window.onbeforeunload = function () {
            return t
        }, r = !0
    }

    function d(t) {
        var n = jQuery.parseJSON(t);
        e = n.puzzle, s(!1), n.show_ad && socialFlex.socialFlex()
    }

    function v(e) {
        var t = jQuery.parseJSON(e);
        t && (socialFlex.socialFlex(), _gaq.push(["_trackEvent", "MediaBrix", "GamePage", "CallVideoAd", 1, !0]))
    }

    function m() {
        typeof i().sendPuzzleData == "function" && typeof i().sendWidgetAdBeforeGame == "function" ? s() : setTimeout(m, 100)
    }

    function g() {
        typeof i().sendPuzzleData == "function" && typeof socialFlex.socialFlex == "function" ? s() : setTimeout(g, 100)
    }
    var r = !1;
    this.chooseAnother = function () {
            document.location.href = document.location.protocol + "//" + document.location.host + "/play_now"
        },

        this.getPuzzle = function () {
            s()
        },

        this.resetPuzzle = function () {
            s(), $.get("/request_check", {
                id: e.id
            })
        },

        this.solveAnother = function () {
            window.document.location = "/game?solve_another=true"
        },

        this.resumeSavedPuzzle = function () {
            window.document.location = "/puzzle/saved"
        },

        this.widgetAdBeforeGame = function () {
            $.get("/game/widget_ad_before_game", null, o)
        },

        this.widgetAdBeforePause = function () {
            $.get("http://www.kenkenpuzzle.com/game/widget_ad_before_pause", null, a)
            //$.get("/game/widget_ad_before_pause", null, a) //TODO: ...
        },

        this.widgetAdBeforePrint = function () {
            $.get("/game/widget_ad_before_print", null, u)
        },

        this.widgetAdBeforeSolution = function () {
            $.get("/game/widget_ad_before_solution", null, f)
        },

        this.widgetAdOnKengratulations = function () {
            $.get("/game/widget_ad_on_kengratulations", null, l)
        },

        this.puzzleSolved = function () {}, this.autoSave = function (t) {
            $.post("/save_state", {
                id: e.id,
                state: t,
                autosave: 1
            }), e.state = t
        },

        this.saveState = function (t) {
            $.get("/request_check", {
                    id: e.id
                }),

                $.post("/save_state", {
                    id: e.id,
                    state: t
                }, function (e, t, n) {
                    e == "ok" && $("#save-ok").fadeIn(150).delay(5e3).fadeOut(150)
                }),

                e.state = t
        },

        this.readState = function (t) {
            $.get("/read_state", {
                id: e.id
            }, function (t) {
                e.state = t, c()
            })
        },

        this.callMbrix = function () {
            socialFlex.socialFlex(), _gaq.push(["_trackEvent", "MediaBrix", "GamePage", "CallVideoAd", 1, !0])
        },

        this.onReveal = function () {
            $.get("/request_reveal", {
                id: e.id
            })
        },

        this.onCheck = function () {
            $.get("/request_check", {
                id: e.id
            })
        },

        this.onPrint = function () {
            $.get("/show_ad_on_print", {}, v), $.get("/request_check", {
                id: e.id
            })
        },

        this.onPause = function () {
            $.get("http://www.kenkenpuzzle.com/show_ad_on_pause", {}, v), $.get("http://www.kenkenpuzzle.com/request_check", {
            //$.get("/show_ad_on_pause", {}, v), $.get("/request_check", { //TODO: ...
                id: e.id
            })
        },

        this.onSolution = function () {
            $.get("/show_ad_on_solution", {}, v), $.get("/request_check", {
                id: e.id
            })
        },

        this.puzzleStarted = function () {
            $.get("/puzzle_started", {
                id: e.id
            })
        },

        this.puzzleReset = function () {
            $.get("/puzzle_started", {
                id: e.id,
                reset: !0
            })
        },

        this.puzzleFinished = function (t) {
            $.get("/puzzle_finished", {
                id: e.id,
                time: t
            }), e.solved = !0, h()
        },

        setTimeout(m, 500)
};

// </editor-fold>

var kenken = kenken || {};
// <editor-fold desc="kenken.recentlyTableClick">
kenken.recentlyTableClick = function () {
    $("tr[puzzle_id]").click(function (e) {
        var t = $(e.target.parentElement),
            n = t.attr("puzzle_id"),
            r = t.attr("state_id"),
            i = "/game/" + n;
        r != "" && (i += "/" + r), window.location = i
    })
};
// </editor-fold>

var kenken = kenken || {};
// <editor-fold desc="kenken.mobile_redirect">
kenken.mobile_redirect = function () {
    if (document.cookie.indexOf("saw_redirect=true") == -1 && (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i))) {
        var e = window.location.href,
            t = "";
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) t = "iphone";
        navigator.userAgent.match(/iPad/i) && (t = "ipad"), navigator.userAgent.match(/Android/i) && (t = "android");
        if (t != "") {
            var n = window.location.protocol + "//" + window.location.host + "/mobile_redirect/" + t + "?dest=" + e;
            window.location.assign(n)
        }
    }
}, $(document).ready(function () {
    $("form").submit(function () {
        return $("#update-payment-button").attr("disabled", !0), !0
    }), $("#update-payment-button").click(function (e) {
        $("#credit_card_number").val().substring(0, 5) == "XXXX-" && (e.preventDefault(), $("#credit_card_number").addClass("missing"), alert("Please enter your credit card number to continue."))
    }), $(".one-click-form").bind("submit", function (e) {
        $(this).find('input[type="submit"]').attr("disabled", "disabled"), $(this).find('input[type="submit"]').attr("value", "Sending..."), $(this).find('input[type="submit"]').animate({
            opacity: .5
        }), $(this).find("input#update-payment-button").attr("value", "Sending..."), $(this).find("input#update-payment-button").animate({
            opacity: .5
        })
    })
});
// </editor-fold>

var kenken = kenken || {};
// <editor-fold desc="kenken...">
kenken.showHideTeacherAttributes = function () {
        $("#user_is_teacher").click(function () {
            $("#user_is_teacher").attr("checked") ? $("#teacher_attributes").show() : $("#teacher_attributes").hide()
        })
    }, kenken.updateBundleId = function () {
        $("input[name=bundle_id]").click(function (e) {
            var t = $(e.target).attr("value");
            $("input[id=payment_data_bundle_id]").each(function (e, n) {
                $(n).attr("value", t)
            })
        })
    }, kenken.togglePaymentForms = function () {
        $("#renew_form").toggle(), $("#new_form").toggle()
    }, kenken.categoryViewAll = function (e, t) {
        $("#" + e).toggleClass("grid");
        var n = $("#" + e).hasClass("grid") ? "View Less" : "View All";
        $("#" + t).html(n)
    }, kenken.adWatched = function () {
        $.post("/ad_watched", {})
    }, kenken.load_email_form = function () {
        document.cookie.indexOf("saw_gift_form=true") == -1 && ($("#myModal").reveal({
            animation: "fade",
            animationspeed: 500,
            closeonbackgroundclick: !1,
            dismissmodalclass: "close-reveal-modal"
        }), $("#dismiss-email-modal-short").click(function () {
            if (document.cookie.indexOf("saw_gift_form=true") == -1) {
                var e = 6048e5,
                    t = new Date((new Date).getTime() + e);
                document.cookie = "saw_gift_form=true; expires=" + t.toGMTString()
            }
        }), $("#dismiss-email-modal-long").click(function () {
            if (document.cookie.indexOf("saw_gift_form=true") == -1) {
                var e = 31536e7,
                    t = new Date((new Date).getTime() + e);
                document.cookie = "saw_gift_form=true; expires=" + t.toGMTString()
            }
        }))
    }, // </editor-fold>
    function (e, t, n) {
        "use strict";
        var r = e(document),
            i = t.Modernizr;
        e(document).ready(function () {
            e.fn.foundationAlerts ? r.foundationAlerts() : null, e.fn.foundationButtons ? r.foundationButtons() : null, e.fn.foundationAccordion ? r.foundationAccordion() : null, e.fn.foundationNavigation ? r.foundationNavigation() : null, e.fn.foundationTopBar ? r.foundationTopBar() : null, e.fn.foundationCustomForms ? r.foundationCustomForms() : null, e.fn.foundationMediaQueryViewer ? r.foundationMediaQueryViewer() : null, e.fn.foundationTabs ? r.foundationTabs({
                callback: e.foundation.customForms.appendCustomMarkup
            }) : null, e.fn.foundationTooltips ? r.foundationTooltips() : null, e.fn.foundationMagellan ? r.foundationMagellan() : null, e.fn.foundationClearing ? r.foundationClearing() : null, e.fn.placeholder ? e("input, textarea").placeholder() : null, e(document).on("click", ".close_box", function () {
                e(this).parent().remove()
            }), e("#gift_banner").slideDown(2e3)
        }), i.touch && !t.location.hash && e(t).load(function () {
            setTimeout(function () {
                t.scrollTo(0, 1)
            }, 0)
        })
    }(jQuery, this);