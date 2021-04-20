var clickButton = document.getElementById('clickButton');
clickButton.addEventListener("click", alertMaxNum);

var arrayOfNumbers= [1,3,10,100000,15,99,888];


  function alertMaxNum() {
    let maxNum = [0];
   for (let i = 0; i < arrayOfNumbers.length; i++) {
     if (arrayOfNumbers[i] > maxNum) {
       maxNum = arrayOfNumbers[i];
     };
    };
    return maxNum;
};
alert( alertMaxNum() );