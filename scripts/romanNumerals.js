const eventListenerRoman = () => {
  const btnContainer = document.querySelector(".button-container");
  const btnCalculate = document.querySelector("#button-roman-calculate");
  const allBtns = document.querySelectorAll('.button-container > div');
  const allContainers = document.querySelectorAll('.content-container');

  const resetBtns = () => {
    allBtns.forEach(e => {
      e.className = "kata-buttons";
    })
  }

  // const resetOpacity = () => {
  //   allContainers.forEach(e => {
  //     e.style.opacity = 0;
  //   })
  // }
  
  btnContainer.addEventListener('click', (e) => {
    if(e.target.id === 'roman-numerals'){
      const romanContainer = document.querySelector('#roman-numerals-container');
      romanContainer.style.display= 'flex';
      document.querySelector("#fizz-container").style.display = 'none';
      document.querySelector("#prime-factor-container").style.display = 'none';

      //Reset button classes and apply new one
      resetBtns();
      allBtns[2].className = "kata-buttons-active";

       //Opacity
      // resetOpacity();
      // setTimeout(() => {
      //   romanContainer.style.opacity = '1';

      // }, 50)
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
    if (numeral === 'Please enter an integer between 1 and 3000'){
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
    return 'Please enter an integer between 1 and 3000';
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