//EXERCICIO 01
// function max (x, y) {
//     return x > y ? x : y;
// };

// const max2 = (x, y) => x > y ? x : y;

// console.log(max(10, 12));
// console.log(max2(10, 12))


//EXERCICIO 02
// const ePaisagem = (x, y) => x > y ? 'Paisagem' : 'Retrato'

// console.log(ePaisagem(1000, 200))
// console.log(ePaisagem(300, 500))

//EXERCICIO 03
function FizzBuzz (x) {
    if (typeof x !== 'number')
        return x;
    if (x % 3 === 0 && x % 5 === 0)
        return 'FizzBuzz';
    if (x % 3 === 0)
        return 'Fizz';
    if (x % 5 === 0)
        return 'Buzz';
    return x;
}

console.log('a', FizzBuzz('a'))

for (let i = 0; i <= 100; i++)
    console.log(i, FizzBuzz(i))

