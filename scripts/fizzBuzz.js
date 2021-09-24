const eventListenerFizzBuzz = () => {
  const btnContainer = document.querySelector(".button-container");
  const btnCalculate = document.querySelector("#button-fizz-calculate");
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
    if(e.target.id === 'fizz'){
      const fizzContainer = document.querySelector('#fizz-container');
      fizzContainer.style.display= 'flex';
      document.querySelector("#roman-numerals-container").style.display = 'none';
      document.querySelector("#prime-factor-container").style.display = 'none';

      //Reset button classes and apply new one
      resetBtns();
      allBtns[0].className = "kata-buttons-active";

      //Opacity
      // resetOpacity();
      // setTimeout(() => {
      //   fizzContainer.style.opacity = '1';
      // }, 50)

    }
  });
  
  btnCalculate.addEventListener('click', () => {
    const fizzInput = document.querySelector("#input-fizz-calculate").value;
    const fizzResults = document.querySelector('#fizz-results');
    const fizzArr = [Number(fizzInput)];
    fizzResults.innerHTML = '';

    const fizzNum = fizzBuzz(fizzArr);
  
    const div = document.createElement('div');
    div.classList.add('fizzes');
    div.innerText = fizzNum;
    if (fizzNum[0].toString().includes("Please")){
      div.setAttribute('id', 'fizzError');
      console.log('errR?')
    }
    fizzResults.appendChild(div);
    
  });

}

function mainFizz(){
  eventListenerFizzBuzz();
}

mainFizz();

function fizzBuzzer (num) {
  let val = num;
  let str = '';
  if (val % 3 === 0){
    str += 'Fizz';
  }
   
  if (val % 5 === 0){
    str += 'Buzz';
  } 
  
  if (str.length > 0) {
    return str;
  }
  return val;
}

function fizzBuzz (arr){
  if(!Array.isArray(arr)){
    return "Please enter an array"
  }
  for (let i = 0; i < arr.length; i++) {
    if(!Number.isInteger(arr[i]) || arr[i] < 1 || arr[i] > 100) {
      arr[i] = "Please enter integers between 1 and 100"
    }
    arr[i] = fizzBuzzer(arr[i]);
  }

  return arr;
}