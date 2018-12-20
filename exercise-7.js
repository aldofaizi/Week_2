var rows1 = 5;
var rows2 = 5;
var rows3 = 5;


for (var i = 0; i < rows1; i++) {
        console.log('*')
}

console.log('')

for (var j = 0; j < rows2; j++) {
        var tampung = ''
        for (k = 0; k < rows2; k++) {
                tampung += '*'
        }
        console.log(tampung)
}

console.log('')

for (var l = 0; l < rows3; l++) {
        var nampung = ''
        for (var m = 0; m <= l; m++) {
                nampung += '*'
        }
        console.log(nampung)
}