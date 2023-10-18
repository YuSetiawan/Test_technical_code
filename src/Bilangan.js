let inputAngka = 'tiga';

const TriangleButton = (inputAngka) => {
  if (typeof inputAngka !== 'number') {
    console.log('input harus berupa angka');
  } else if (typeof inputAngka === 'number') {
    for (let i = inputAngka; i >= 1; i--) {
      let baris = '';
      for (let j = 0; j <= i; j++) {
        baris += j + '';
      }
      console.log(baris);
    }
  }
};

console.log(segitiga);
