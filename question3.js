function rokket(string, times) {
    var repetir = "";
    while (times > 0) {
      repetir += string;
      times--;
    }
    return repetir;
  }
console.log(rokket('node', 3));
console.log(rokket('abc', 3));

