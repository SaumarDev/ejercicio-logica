let parImpar = () => {
  let numeroX = 7;
  let contador = 0;
  while (contador < 3) {
    numeroX += 1;
    if (numeroX % 2 != 0) {
      numeroX += 1;
    } else {
      return numeroX;
    }
    numeroX -= 3;
    contador += 1;
  }
  return numeroX;
};

console.log(parImpar());
// 2 --> 2
// 3 --> 4
// 5 --> 6
// 6 --> 6
// 7 --> 8
