function calculate() {
  var age = document.getElementById("age").value;
  
  var planets = [
	{planet: 'earth', orbit:1},
	{planet: 'mercury', orbit:0.2408467},
	{planet: 'venus', orbit: 0.61519726},
	{planet: 'mars', orbit: 1.888158},
	{planet: 'jupitor', orbit:11.862615},
	{planet: 'saturn', orbit:29.447498},
	{planet: 'neptune', orbit:164.79132},
	{planet: 'pluto', orbit: 248},
	]
  
  for (i=0; i< planets.length; i++) {
	  var planetAge = age / planets[i].orbit;
    console.log("On " + planets[i].planet + " you are " + planetAge);
}
}