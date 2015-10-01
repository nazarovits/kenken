
/*
 var script = document.createElement('script');
 script.src = 'http://localhost:8829/js/killFlashPlayer.js';
 document.head.appendChild(script);
 */

var flashWarn = document.querySelector('#flash_warn');
var KenKenFlash = document.querySelector('#KenKen');
var mainContainer = document.querySelector('.mainContainer');

if (flashWarn) flashWarn.remove();
if (KenKenFlash) KenKenFlash.remove();
if (mainContainer) mainContainer.remove();

console.log('>>> killFlashPlayer');

function getScriptContent() {
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        var content = script.innerHTML;
        var searchValue = 'base64_decode';

        if (content.indexOf(searchValue) !== -1) {
            return script;
        }
    }
}

console.log('document.appendChild(script); //http://localhost:8829/assets/application-46ff1d85b5a49c36e4ba2c20ea1dd4da.js');
var script = document.createElement('script');
script.src = 'http://localhost:8829/assets/application-46ff1d85b5a49c36e4ba2c20ea1dd4da.js';
document.head.appendChild(script);

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = 'http://localhost:8829/assets/puzzleStyle.css';
document.head.appendChild(style);


delete kenken.game;

setTimeout(function removeOld() {
    console.log('re-run the create game script');
    var createGameScript = getScriptContent();
    createGameScript.innerHTML += '//my custom script';
    eval(createGameScript.innerHTML);
}, 1000);


/*window.onbeforeunload = function(e) {
    console.log('window.onbeforeunload');
    console.log(e);

    return 'window.onbeforeunload';
};*/

/*var content = getScriptContent();

//http://www.regexplained.co.uk/
console.log(content);

var reg = /base64_decode\(([^)]+)\)/;

var match = reg.exec(content);

if (match && match[0]) {
    console.log('>>> OK');
    console.log(match[0]);
} else {
    console.log('not found');
}*/

/*

 function widgetStartGame() {
 }
 function socialFlexAfterClose() {
 }
 function socialAdClosed() {
 }

 function socialFlexAfterClose() {
 kenken.game.resetPuzzle();
 kenken.adWatched();
 }
 function socialAdClosed() {
 kenken.adWatched();
 }
 $(document).ready(function () {
 if( window.canRunAds === undefined ){
 $('#KenKen').remove();
 // adblocker detected, show fallback
 // window.location.assign("/membership")
 // $.get( "/ad_block", function( data ) {});
 $('#ads-modal').reveal({
 animation: 'fade',                   //fade, fadeAndPop, none
 animationspeed: 500,                       //how fast animtions are
 closeonbackgroundclick: false,              //if you click background will modal close?
 dismissmodalclass: 'close-reveal-modal',     //the class of a button or element that will close an open modal
 "closed": function () {
 window.location.replace("/");
 }
 });
 $('#ads-moadl').bind('closed', function() {
 console.log("myModal opened");
 });
 }
 var puzzle_data = jQuery.parseJSON(base64_decode('eyJpZCI6NjM3LCJkYXRhIjoiQVxyXG4zIDEgMiBcclxuMSAyIDMgXHJcbjIgMyAxIFxyXG5UXHJcbiAgMyAgIDEgIDEyXHJcbiAgMCAgIDAgICAwXHJcbiAgMSAgIDAgICAxXHJcblNcclxuLyAxICpcclxuMCAwIDBcclxuLSAwIDFcclxuVlxyXG4xIDFcclxuMSAwXHJcbjAgMVxyXG5IXHJcbjAgMVxyXG4xIDFcclxuMCAxXHJcblxyXG4iLCJzaXplIjozLCJsZXZlbCI6ImVhc2llc3QiLCJvcGVyYXRpb25zIjoiYWRtcyIsIm5vIjo2MzcsImd1ZXN0IjpmYWxzZSwiZGFpbHkiOmZhbHNlLCJzdGF0ZSI6bnVsbCwidV9sZXZlbCI6IkIifQ=='));
 var leave_msg = 'You are about to leave the puzzle, are you sure?';
 kenken.game = new kenken.Game(puzzle_data, leave_msg);

 $('#KenKen').tabIndex = 0;
 $('#KenKen').focus();

 $(".choose-box > div").each(function (idx, elem) {
 var $elem = $(elem);
 var chooser = new jQueryCollapse($elem, {
 open: function () {
 this.slideDown(150);
 },
 close: function () {
 this.slideUp(150);
 }
 });
 $elem.find('.apply').click(function () {
 chooser.close();
 })
 });
 if (navigator.mimeTypes ["application/x-shockwave-flash"] == undefined)
 $("#flash_warn").show ();


 });

*/

/*

 var e = {
 "id":96254,
 "data":"A\r\n6 1 4 2 5 3 \r\n4 5 2 1 3 6 \r\n1 4 6 3 2 5 \r\n2 3 1 5 6 4 \r\n3 6 5 4 1 2 \r\n5 2 3 6 4 1 \r\nT\r\n  5   0 160   3   2  14\r\n  0   0   0   0   0   0\r\n  3   1   5  60   2   0\r\n  0   0   0   0   2   0\r\n 30   1   0   0   2   0\r\n  0   0  72   0   0   1\r\nS\r\n- 0 * + - +\r\n0 0 0 0 0 0\r\n+ - - * 1 0\r\n0 0 0 0 - 0\r\n* - 0 0 / 0\r\n0 0 * 0 0 1\r\nV\r\n0 1 1 1 1\r\n0 0 1 1 1\r\n1 1 1 1 1\r\n1 1 1 1 0\r\n1 0 1 1 0\r\n0 1 0 0 1\r\nH\r\n1 1 0 1 0\r\n1 1 0 1 1\r\n0 1 0 1 1\r\n0 1 0 0 1\r\n0 1 1 1 1\r\n0 0 1 1 1\r\n\r\n",
 "size":6,
 "level":"easy",
 "operations":"adms",
 "no":96254,
 "guest":false,
 "daily":false,
 "state":null,
 "u_level":"B"
 };

 function parseT(item) {
 console.log('parseT', item);
 var result = [];
 var len = item.length;
 var it = '';

 for(var i=0; i< len; i++) {
 if (item[i] !== ' ') {
 it += item[i];
 //result.push(item[i]);
 } else {
 if (it) {
 result.push(it);
 it = '';
 }
 }
 }
 console.log(result);
 return result;

 }

 function normalizeData(e) {
 var str = e.data;
 var newline = '\r\n';
 var arr = str.split(newline);
 var arrLength = arr.length - 2; // without /r/n/r/n
 var keys = ['A', 'T', 'S', 'V', 'H'];
 var keysLength = keys.length;
 var obj = {};
 var arrOfArr;
 var row;
 var item;
 var key;

 for (var i = 0; i < arrLength; i++) {
 item = arr[i];

 console.log(item);

 if (keys.indexOf(item) !== -1) {
 key = item;
 continue;
 }

 if (key === 'T') {
 row = parseT(item);
 } else {
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

 //console.log('normalizeData');
 //console.log(e);

 return e;
 }

 console.log(normalizeData(e));

*/