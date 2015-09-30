
/*
 var script = document.createElement('script');
 script.src = 'http://localhost:8829/js/killFlashPlayer.js';
 document.head.appendChild(script);
*/

var flashWarn = document.querySelector('#flash_warn');
var KenKenFlash = document.querySelector('#KenKen');

if (flashWarn) flashWarn.remove();
if (KenKenFlash) KenKenFlash.remove();

console.log('>>> killFlashPlayer');

function getScriptContent() {
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        var content = script.innerHTML;
        var searchValue = 'base64_decode';

        if (content.indexOf(searchValue) !== -1) {
            //console.log('i=', i);
            //console.log(content);
            return script;
        }
    }
}

console.log('document.appendChild(script); //http://localhost:8829/assets/application-46ff1d85b5a49c36e4ba2c20ea1dd4da.js');
var script = document.createElement('script');
script.src = 'http://localhost:8829/assets/application-46ff1d85b5a49c36e4ba2c20ea1dd4da.js';
document.head.appendChild(script);

delete kenken.game;

setTimeout(function removeOld() {
    console.log('re-run the create game script');
    var createGameScript = getScriptContent();
    createGameScript.innerHTML += '//my custom script';
    eval(createGameScript.innerHTML);
}, 1000);


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