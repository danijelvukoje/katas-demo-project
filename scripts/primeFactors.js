const eventListenerPrime = () => {
  const btnContainer = document.querySelector(".button-container");
  const btnCalculate = document.querySelector("#button-prime-calculate");
  
  btnContainer.addEventListener('click', (e) => {
    if(e.target.id === 'prime-factors'){
      document.querySelector("#fizz-container").style.display = 'none';
      document.querySelector("#roman-numerals-container").style.display = 'none';
      document.querySelector("#prime-factor-container").style.display = 'flex';
    }
  });
  
  btnCalculate.addEventListener('click', () => {
    const primeInput = document.querySelector("#input-prime-calculate").value;
    const primeResults = document.querySelector('#prime-results');
    const primeArr = primeFactors(Number(primeInput));

    primeResults.innerHTML = '';

    if (primeArr[0] !== -1){
      primeArr.forEach(elem => {
        const div = document.createElement('div');
        div.classList.add('primes');
        div.innerText = elem;
        primeResults.appendChild(div);
      });
    } else {
      const div = document.createElement('div');
        div.classList.add('primes-error');
        div.innerText = primeArr[1];
        primeResults.appendChild(div);
    }
  });

}


function mainPrime(){
  eventListenerPrime();
}

mainPrime();

function isPrime(num, lastPrime) {
  if(num ===2) {
    return true;
  }
  if(num % 2 ===0) {
    return false;
  }
  for(let i = 3; i < lastPrime; i+=2) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

function primes(num) {
  let primesArray = [];

  for(let i = 2; i <= num; i++){
    if(isPrime(i, primesArray[primesArray.length - 1])){
      primesArray.push(i);
    }
  }

  return primesArray;
}

function getFirstPrime(val, primesArray){
  for (let i = 0; i < primesArray.length; i++){
    if(val % primesArray[i] === 0){
      return primesArray[i];
    }
  }
}

function primeFactors(num){
  let factorsArray = [];
  let primesArray = primes(num);
  if(num <= 1 || !Number.isInteger(num)){
    return [-1, "Please, enter an integer greater than 1."];
  }

  let remainder = num;
  while(remainder > 1){
    let prime = getFirstPrime(remainder, primesArray);
    factorsArray.push(prime);
    remainder = remainder/prime;
  }
  
  return factorsArray;
}