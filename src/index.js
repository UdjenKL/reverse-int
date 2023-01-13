module.exports = function reverse (n) {

    let result = Math.abs(n); // абсолютное значение

    if (n) {
       return result.toString().split('').reverse().join('');
    } else {
        console.log('Hello RSS!');
    }
}
