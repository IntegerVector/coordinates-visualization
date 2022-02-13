import { Board } from './board.js';

const CANVAS_ELEMENT_ID = 'main';
const CANVAS_WIDTH = 10000;
const CANVAS_HEIGHT = 10000;

const scaleFactor = prompt('Specify scale factor: ', 0.1);
const dotsCount = prompt('Specify amount of dots: ', 100000);

const drawParams = {
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  count: dotsCount,
  scale: scaleFactor
};

const board = new Board(CANVAS_ELEMENT_ID);

board.filter(isPrime);
board.draw(drawParams);

function isPrime(number) {
  if(number == 2) return true;
  if(number < 2 || number % 2 == 0) return false;

  for(let i = 3; i*i <= number; i += 2)
    if(number % i == 0) return false;

  return true;
}
