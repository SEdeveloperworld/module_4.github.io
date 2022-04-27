



(function (){
  let names = ["Jhon ducket","Umair", "Qasim", "javeed", "ibrar", "jon", "Ali", "Jhon" ,"Frank"];

  for (var person of names) {
    var firstLetter = person.charAt(0).toLowerCase();
    if (firstLetter == "j") {
      byeSpeaker.speak(person);
    } else {
      
      helloSpeaker.speak(person);
    }
  }
  
})();




