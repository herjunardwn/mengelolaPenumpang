var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    // jika angkot kosong
    penumpang.push(namaPenumpang);
    // tambah penumpang di awal array
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // else
    // telusuri seluruh kursi dari awal
    // jika ada kursi kosong
    // tambah penumpang di kursi tersebut
    // kembalikan isi array & keluar dari function
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        // jika ada nama yang sama
        // tampilkan pesan kesalahannya
        // kembalikan isi array dan keluar dari function
        console.log(namaPenumpang + ' sudah ada di dalam angkot');
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika seluruh kursi terisi
        // tambah penumpang di akhir array
        // kembalikan isi array & keluar dari function
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
}

// HAPUS PENUMPANG
var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    console.log('Angkot Kosong Brayyy...!')
    // tampilkan pesan bahwa angkotnya kosong, dan
    // tidak mungkin ada penumpang yang turun
    return penumpang;
    // kembalikan isi array & keluar dari function
  } else {
    // else
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < namaPenumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah namanya
        // menjadi undefined
        penumpang[i] = undefined;
        // kembalikan isi array & keluar dari function
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika tidak ada nama yang sesuai
        // tampilkan pesan kesalahannya
        // kebalikan isi array & eluar dari function
        console.log(namaPenumpang + ' tidak ada di dalam angkot!')
        return penumpang;
      }
    }
  }
}



