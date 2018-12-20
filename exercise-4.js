var tanggal = '1';
var bulan = 3;
var tahun = '2006';
var mo = '';

if (tanggal >= 1 && tanggal <= 31 && bulan >= 1 && tanggal <= 12 && tahun >= 1900 && tahun <= 2200) {
    switch(bulan){
        case 1: mo = 'Januari'; break;
        case 2:  mo = "Februari"; break;
        case 3: mo = "Maret"; break;
        case 4: mo = "April"; break;
        case 5:  mo = "Mei"; break;
        case 6:  mo = "Juni"; break;
        case 7:  mo = "Juli"; break;
        case 8:  mo = "Agustus"; break;
        case 9:  mo = "September"; break;
        case 10:  mo = "Oktober"; break;
        case 11:  mo = "November"; break;
        case 12:  mo = "Desember"; break;
    }
    console.log(tanggal, mo, tahun);
}
else {
    console.log("Tanggal belum tersedia")
}

