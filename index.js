function convertToCelsius(FahrenheitTemperature) {
  return (FahrenheitTemperature - 32) * (5 / 9);
}

// console.log(convertToCelsius(32));

function describeTemperature(degreesFahrenheit) {
  if (degreesFahrenheit < 0) {
    return "very cold";
  } else if (degreesFahrenheit < 20) {
    return "cold";
  } else if (degreesFahrenheit < 30) {
    return "warm";
  } else if (degreesFahrenheit < 40) {
    return "hot";
  } else if (degreesFahrenheit >= 40) {
    return "very hot";
  }
}

// console.log(describeTemperature(50));

let tempInput = prompt("Input temperature in Fahrenheit");
{
  let result = convertToCelsius(tempInput);
  let formattedresult = result.toFixed(2);
  //   console.log(formattedresult);
  alert(
    "It is currently " +
      tempInput +
      " degrees Fahrenheit, which is equivalent to " +
      formattedresult +
      " degrees Celsius." +
      " Based on the temperature description scale provided, it should feel " +
      describeTemperature(tempInput) +
      "."
  );
}
