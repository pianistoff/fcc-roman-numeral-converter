function convertToRoman(num) {
    const arrDigits = Array.from(String(num), Number);
    const arrFinal = [];
    const arrSymbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    for (let i = 0; i < arrDigits.length; i++) {
      let j = (arrDigits.length - 1 - i) * 2;
      switch (arrDigits[i]) {
        case 1:
          arrFinal.push(arrSymbols[j]);
          break;
        case 2:
          arrFinal.push(arrSymbols[j]+arrSymbols[j]);
          break;
        case 3:
          arrFinal.push(arrSymbols[j] + arrSymbols[j] + arrSymbols[j]);
          break;
        case 4:
          arrFinal.push(arrSymbols[j] + arrSymbols[j + 1]);
          break;
        case 5:
          arrFinal.push(arrSymbols[j + 1]);
          break;
        case 6:
          arrFinal.push(arrSymbols[j + 1] + arrSymbols[j]);
          break;
        case 7:
          arrFinal.push(arrSymbols[j + 1] + arrSymbols[j] + arrSymbols[j]);
          break;
        case 8:
          arrFinal.push(arrSymbols[j + 1] + arrSymbols[j] + arrSymbols[j] + arrSymbols[j]);
          break;
        case 9:
          arrFinal.push(arrSymbols[j] + arrSymbols[j + 2]);
          break;
      }
    }
    return arrFinal.join('');
  }

  function convert(number) {
    const result = document.getElementById("result");
    result.textContent = convertToRoman(number);
  }

const input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});