//convert value from Fahrenheit to celsius//
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
  }
  //insert value, calculate the outputCelcius by subtraciting 32 from input value, and then dividing it by 1.8//