(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (dummy_index = 0; dummy_index < names.length; dummy_index++) {  
        var firstLetter = names[dummy_index].charAt(0).toLowerCase();
        if (firstLetter == "j") {
          byeSpeaker.speak(names[dummy_index]);
        }
        else {
          helloSpeaker.speak(names[dummy_index]);
        }
    }
})();


