import colors from './colors';

const refs = {
  body : document.querySelector('body'),
  start : document.querySelector('[data-action="start"]'),
  stop : document.querySelector('[data-action="stop"]')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let setRandomColor = () => {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(randomColor);
  refs.body.style.background = `${randomColor}`;
};

let intervalId = null;

const stopColorChange = () =>{
  clearInterval(intervalId);
  intervalId = null;
  refs.start.disabled = false;
}

const startColorChange = () =>{ 
  if (intervalId){
    return
  }
  intervalId = setInterval(() =>{
    // console.log('start');
    refs.start.disabled = true;
    setRandomColor ()
  }, 1000);
}

refs.start.addEventListener('click', startColorChange)
refs.stop.addEventListener('click', stopColorChange)