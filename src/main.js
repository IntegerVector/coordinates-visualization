import { Board } from './board.js';
import { isPrime } from './is-prime.js';

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
