var rows1 = 5;
var rows2 = 5;
var rows3 = 5;
var bin = '';

//for (var i = 0; i < rows1; i++) {
//   console.log('*');
//}

for (var i = 0; i < rows1; i++) {
        console.log('*')
}

for (var i = 0; i <= rows2; i ++) {
        for (var j = 0; j <= i; i++) {
                console.log('tes')
        }
}
for (var i = 0; i <= rows3; i++) {
        console.log('*'.repeat(i));
}
