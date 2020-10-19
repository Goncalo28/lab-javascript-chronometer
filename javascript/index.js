const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {  
  minDec.innerText = printMinutes()[0];
  minUni.innerText = printMinutes()[1];
  secDec.innerText = printSeconds()[0];
  secUni.innerText = printSeconds()[1];
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splitList = document.createElement('li');
  splitList.innerHTML = chronometer.splitClick();
  splits.appendChild(splitList)
}

function clearSplits() {
  splits.innerText = '';
}

function setStopBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
}

function setStartBtn() {
  btnLeft.innerText = 'START';
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerText === 'START'){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);  
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerText === 'RESET'){
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
