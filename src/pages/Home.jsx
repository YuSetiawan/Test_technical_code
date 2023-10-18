import React, {useState} from 'react';
import ModalSegitiga from '../components/modal/ModalSegitiga';
import ModalGanjil from '../components/modal/ModalGanjil';
import ModalPrima from '../components/modal/ModalPrima';

const Home = () => {
  // Input number
  const [num, setNum] = useState();
  const inputAngka = (i) => {
    setNum({
      ...num,
      [i.target.name]: i.target.value,
    });
    console.log(num);
  };

  // Rumus Segitiga
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

  // Rumus Angka Ganjil
  const evenNum = (inputAngka) => {
    if (inputAngka % 2 !== 0) {
      console.log(`Merupakan angka Ganjil`);
    } else {
      console.log(`bukan angka Ganjil`);
    }
  };

  // Rumus Angka Prima
  const primeNum = (inputAngka) => {
    for (let i = 1; i <= inputAngka; i++) {
      let flag = 0;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 1;
          break;
        }
      }
      if (i > 1 && flag == 0) {
        console.log(i);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Contoh: 12345" aria-describedby="basic-addon2" onChange={inputAngka} />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            Input Bilangan{' '}
          </span>
        </div>
      </div>
      <div className="d-flex ">
        <ModalSegitiga hasil={TriangleButton} />
        <ModalGanjil hasil={evenNum} />
        <ModalPrima hasil={primeNum} />
      </div>
      <div className="Hasil Pertanyaan">
        <p></p>
      </div>
    </div>
  );
};

export default Home;
