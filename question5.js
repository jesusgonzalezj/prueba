/* function rokket (a ,b){
    return a.filter(function(n) {
        return b.indexOf(n) != -1;
    });
}
console.log(rokket([1, 2, 5], [2, 1, 6])); */

var a = [1, 2, 5];
var b = [2, 1, 6];
var rokket = [...new Set([...a, ...b])];
console.log(rokket);