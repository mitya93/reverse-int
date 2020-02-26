module.exports = function reverse (n) {
    var str = String(n);
    return parseInt(str.split("").reverse().join(""));    
}
