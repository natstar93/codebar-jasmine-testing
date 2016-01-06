/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  var celsius = (temperature - 32)/1.8
  return celsius.toFixed(1);
};
function convertCelsiusToFahrenheit(temp){
  var fehrenheit = (temp * 1.8 + 32)

  return fehrenheit.toFixed(1);
};
function convertPoundsToKilos(pound){
  var kilos = (pound * 0.4536)

  return kilos.toFixed(2);
}
