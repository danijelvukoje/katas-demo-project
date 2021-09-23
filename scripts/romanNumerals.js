const eventListenerRoman = () => {
  const btnContainer = document.querySelector(".button-container");
  const btnCalculate = document.querySelector("#button-roman-calculate");
  
  btnContainer.addEventListener('click', (e) => {
    if(e.target.id === 'roman-numerals'){
      document.querySelector("#fizz-container").style.display = 'none';
      document.querySelector("#roman-numerals-container").style.display = 'flex';
      document.querySelector("#prime-factor-container").style.display = 'none';
    }
  });
  
  btnCalculate.addEventListener('click', () => {
    const romanInput = document.querySelector("#input-roman-calculate").value;
    const romanResults = document.querySelector('#roman-results');

    romanResults.innerHTML = '';

    const numeral = toRoman(Number(romanInput));
    console.log(romanInput, numeral);
    const div = document.createElement('div');
    div.classList.add('romans');
    div.innerText = numeral;
    if (numeral === 'Please, enter an integer between 1 and 3000.'){
      div.setAttribute('id', 'romanError');
    }
    romanResults.appendChild(div);
    
  });

}

function mainRoman(){
  eventListenerRoman();
}

mainRoman();

function toRoman(num) {
  let number = num;
  let result = '';

  if (number < 1 || number > 3000 || !Number.isInteger(number)) {
    return 'Please, enter an integer between 1 and 3000.';
  }
  
  const charArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i < numberArray.length; i++) {
    while (number >= numberArray[i]) {
      result += charArray[i];
      number -= numberArray[i];
    }
  }
  return result;
}