module.exports = function check(str, bracketsConfig) {
  let strInput = str;
  let arrayNumber = 0;
  let re = '';
  let n = 0;

  function find(arrayNumber){
    let currentConfig = bracketsConfig[arrayNumber];
    re = currentConfig[0] + currentConfig[1];
    return strInput.indexOf(currentConfig[0] + currentConfig[1]);
  }

  while(n < str.length){
    while(arrayNumber < bracketsConfig.length){
      while (find(arrayNumber) !== -1){
        strInput = strInput.replace(re, '')
      }
      arrayNumber++;
    }
    n++;
    arrayNumber = 0;
  }

  return strInput === '';
}