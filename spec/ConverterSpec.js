describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("converts 100 Fahrenheit to 37.8 Celsius", function() {
      var result = convertFahrenheitToCelsius(100);

      expect(result).toEqual('37.8');
    });

    it("converts 50 Fahrenheit to 10 Celsius", function() {
      var result = convertFahrenheitToCelsius(50);

      expect(result).toEqual('10.0');
    });

    it("converts 250 celsius to 482 fahrenheit ", function(){
      var result = convertCelsiusToFahrenheit(250);

      expect(result).toEqual('482.0');

    });

  });

  describe("Weight", function() {

    it("converts 1 Pounds to 0.4 Kilos", function(){
      var result = convertPoundsToKilos(1);

      expect(result).toEqual('0.45');

    });
  });


});
