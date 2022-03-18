function getRandomRBGa(){
  let red = Math.floor((Math.random() * 256));
  let green = Math.floor((Math.random() * 256));
  let blue = Math.floor((Math.random() * 256));
  let alphaF1 = Math.floor((Math.random() * 10));
  let alphaF2 = Math.floor((Math.random() * 10));
  let alpha = 1;
  let isAlphaSmall = alphaF1.toString().length;
  if (alphaF1 == '0' && alphaF2 == '0'){
    alpha = 1 + '.' + '0';
    alpha = parseFloat(alpha).toFixed(1);
  } else {
    alpha = '0.' + (alphaF1 + '' + alphaF2);
    alpha = parseFloat(alpha).toFixed(2);
  }
  const randomRgbA = `rgba(${red},${green},${blue},${alpha})`;
  //alert(alphaF.toString().length);
  //alert(randomRgbA);
  return randomRgbA;
}
console.log(getRandomRBGa());
console.log(getRandomRBGa());
console.log(getRandomRBGa());
console.log(getRandomRBGa());
