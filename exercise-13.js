function xo(tulisan) {
    var jumlahX = 0
    var jumlahO = 0
    for (i = 0; i < tulisan.length; i++) {
        if (tulisan[i] === 'x') {
            var jumlahX = jumlahX + 1;
        }
        else if (tulisan[i] === 'o') {
            var jumlahO = jumlahO + 1;
        }
    }
    if (jumlahX === jumlahO) {
        return true
    }
    else {
        return false
    }
  }

  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
