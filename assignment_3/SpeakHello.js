(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = {};
	helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;

})(window);





/*
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Secur
*/