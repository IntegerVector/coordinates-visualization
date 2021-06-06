import { Board } from './board.js';

const CANVAS_ELEMENT = 'main';

const scaleFactor = prompt('Specify scale factor: ', 0.1);
const dotsCount = prompt('Specify amount of dots: ', 100000);
const board = new Board(CANVAS_ELEMENT, scaleFactor);

board.filter(isPrime);
board.draw(10000, 10000, dotsCount);

function isPrime(number) {
  if(number == 2)
        return true;

    if(number < 2 || number % 2 == 0)
        return false;

    /*
     * we only need to check until the sqrt
     * and we can omit the even numbers as well
     */
    for(let i = 3; i*i <= number; i += 2)
        if(number % i == 0)
            return false;

    return true;
}
