import { Board } from './board.js';

const dotsCount = prompt('Specify amount of dots: ', 1000000);
const board = new Board('main', 0.05);

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
