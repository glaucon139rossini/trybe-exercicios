const xadrez = 'KING';

switch (xadrez.toLowerCase()) {
    case 'king':
        console.log('A house just for any direction.');
        break;
    case 'bishop':
        console.log('Diagonals');
        break;
    case 'queen':
        console.log('Diagonal, horizontal and vertical.');
        break;
    case 'horse':
        console.log('"L" movement can jump over the pieces.');
        break;
    case 'tower':
        console.log('Horizontal and vertical.');
        break;
    case 'pawn':
        console.log('Only one space forward, in the first move it can be two spaces.');
        break;          
    default:
        console.log('Invalid piece');
        break;
}