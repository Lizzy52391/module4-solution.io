(function (window) {
  var byeSpeaker = {};
  var speakWord = "GoodBye ";
  byeSpeaker.speak = function speak(name) {
  console.log(speakWord + name);
}

window.byeSpeaker = byeSpeaker;

})(window);
