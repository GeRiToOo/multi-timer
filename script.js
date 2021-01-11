const addCounterEl = document.querySelector('#new_timer');
const timersContainerEl = document.querySelector('.timers');

let timersCount = 0;

addCounterEl.addEventListener('click', (event) => {
  if (timersContainerEl.childElementCount <= 4) {
    timersCount++;
    timersContainerEl.appendChild(createTimerEl(timersCount));
    addCounterEl.disabled = false;
    timerForAll(timersCount);
    removeButton(timersCount);
  } else if (timersContainerEl.childElementCount == 4) {
    addCounterEl.disabled = true;
  }
});

function createTimerEl(timersCount) {
  let newTimer = document.createElement('div');
  newTimer.setAttribute('class', `timer timer_${timersCount}`);

  let removeDiv = document.createElement('div');
  removeDiv.className = 'remove';
  newTimer.appendChild(removeDiv);

  let h3 = document.createElement('h3');
  let spanH = document.createElement('span');
  newTimer.appendChild(h3);
  h3.appendChild(spanH);

  let buttonDiv = document.createElement('div');
  buttonDiv.className = 'btn';
  newTimer.appendChild(buttonDiv);

  let buttonReset = document.createElement('button');
  buttonReset.className = 'reset';
  buttonReset.innerText = 'Reset';
  buttonDiv.appendChild(buttonReset);

  let buttonStop = document.createElement('button');
  buttonStop.className = 'stop';
  buttonStop.innerText = 'Stop';
  buttonDiv.appendChild(buttonStop);

  return newTimer;
}

function removeButton(timersCount) {
  let newTimer = document.querySelector(`.timer_${timersCount}`);
  let removeDiv = newTimer.querySelector('.remove');
  removeDiv.onclick = (event) => {
    timersContainerEl.removeChild(newTimer);
  };
}

function timerForAll(timersCount) {
  let newTimer = document.querySelector(`.timer_${timersCount}`);
  let h3 = newTimer.querySelector('h3');
  let spanH = h3.querySelector('span');

  let interval;
  let startTime = 0;
  interval = setInterval(() => {
    startTime += 1;
    const sec = Math.floor(startTime / 100);
    const millSec = startTime % 100;
    h3.innerHTML = `${sec} <span> ${millSec} </span>`;
  }, 10);

  let buttonStop = newTimer.querySelector('.stop');
  buttonStop.onclick = (event) => {
    clearInterval(interval);
  };

  let buttonReset = newTimer.querySelector('.reset');

  buttonReset.onclick = (event) => {
    clearInterval(interval);
    let startTime = 0;
    interval = setInterval(() => {
      startTime += 1;
      const sec = Math.floor(startTime / 100);
      const millSec = startTime % 100;
      h3.innerHTML = `${sec} <span> ${millSec} </span>`;
    }, 10);
  };
}
