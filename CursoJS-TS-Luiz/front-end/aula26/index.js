function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('x e y precisam ser números');
    }

    return x + y;
}


try {
    console.log(soma('s', 2));
} catch (error) {
    // console.log(error)
    console.log('Algum erro mais amigavel para o usuario')
} 