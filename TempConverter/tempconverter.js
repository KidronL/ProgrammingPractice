let tempCel = 70;
let tempFar = 0;

function celToFar() {
  let newTemp  = tempCel * 1.8 + 32;
  tempFar = newTemp;
  return console.log(tempFar);  
}

function farToCel() {
  let newTemp = (tempFar - 32) / 1.8;
  tempCel = newTemp;
  return console.log(tempCel);
}

celToFar();
farToCel();