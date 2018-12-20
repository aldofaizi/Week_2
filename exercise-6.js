// 1. Melakukan Looping Menggunakan While
var i = 2;
var j = 20;
console.log('While')
console.log('LOOPING PERTAMA')
while (i <= 20) {
    console.log(i,' - I love coding')
    i+=2
}

console.log('LOOPING KEDUA')
while (j >= 2) {
    console.log(j, ' - I will become fullstack developer')
    j-=2
}

// 2. Melakukan Looping Menggunakan For
console.log('')
console.log('For')
console.log('LOOPING PERTAMA')
for (var i = 1; i <= 20; i++) {
    console.log(i, ' - I love coding')
}

console.log('LOOPING KEDUA')
for (var k = 20; k >= 1; k--) {
    console.log(k, ' - I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap
console.log('')
console.log('Angka Ganjil & Genap')
for (var l = 1; l <= 100; l++) {
    if (l % 2 == 0) {
        console.log('GENAP')
    }
    else {
        console.log('GANJIL')
    }
}

console.log('')
console.log('Kelipatan')
for (var m = 0; m <= 100; m+=3) {
    if (m !== 0 && m % 3 === 0) {
        console.log(m, ' KELIPATAN 3')
    }
}

console.log('')
for (var n = 0; n <= 100; n+=5) {
    if (n !== 0 && n % 5 == 0) {
        console.log(n, ' KELIPATAN 5')
    }
}

console.log('')
for (var o = 0; o <= 100; o+=9) {
    if (o !== 0 && o % 9 == 0) {
        console.log(o, ' KELIPATAN 9')
    }
}