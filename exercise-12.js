function konversiMenit(menit) {
    var minute;
    if (minute === menit || menit < 60) {
        minute = 0
    }
    else {
        minute = menit / 60
    }
    sec = menit % 60
    rMinute = Math.round(minute)
    console.log(rMinute, ":", sec)
  }
  
  konversiMenit(63)
  konversiMenit(124)
  konversiMenit(53)
  konversiMenit(88)
  konversiMenit(120)


  /* TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  */