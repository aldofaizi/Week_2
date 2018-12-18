// TUGAS 1 //
function shoutOut() {
    console.log('Halo function!')
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console


// TUGAS 2 //
function calculateMultiply(num1, num2) {
    hasilPerkalian = num1 * num2
    return hasilPerkalian
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

// TUGAS 3 //
function processSentence(name, age, address, hobby) {
    console.log("Nama saya",name,", umur saya ",age," tahun, alamat saya di ",address,", dan saya punya hobby yaitu ",hobby,"!");
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 
// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"