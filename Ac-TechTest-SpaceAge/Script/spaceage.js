function calculate() {
  var age = document.getElementById("age").value;

  var planets = [
    { planet: "earth", orbit: 1 },
    { planet: "mercury", orbit: 0.2408467 },
    { planet: "venus", orbit: 0.61519726 },
    { planet: "mars", orbit: 1.888158 },
    { planet: "jupitor", orbit: 11.862615 },
    { planet: "saturn", orbit: 29.447498 },
    { planet: "uranus", orbit: 84.016846 },
    { planet: "neptune", orbit: 164.79132 },
    { planet: "pluto", orbit: 248 }
  ];

  for (i = 0; i < planets.length; i++) {
    var planetAge = age / planets[i].orbit;

    //This is changing the P tag that is under Mercury as it is the [1] p tag
    //Change to [0] and it changes the first P tag 'Enter you age...'
    document.getElementsByTagName("p")[i].innerHTML = planetAge + " years old";
  }
  document.getElementById("calculate").addEventListener("click", calculate);
}
