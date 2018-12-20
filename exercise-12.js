function konversiMenit(menit) {
    var minute;
    if (menit < 60) {
        return '0:' + menit
    }
    else {
        minute = menit / 60
    }
    sec = menit % 60
    rMinute = Math.round(minute)
    if (sec.toString().length === 1) {
        return rMinute + ":0" + sec
    }
    else {
        return rMinute + ":" + sec
    }
  }
  
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00