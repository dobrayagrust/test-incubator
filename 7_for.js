var clickButton = document.getElementById('clickButton');
clickButton.addEventListener("click", alertMaxNum);

var maxNum= [1,3,10,20,15,99,888];


  function alertMaxNum() {
   for(let i=1; i<maxNum.length; i++) {
     if(maxNum[i] > maxNum[0]) {
       alertMaxNum = maxNum[i];
     }
    }
    alert(alertMaxNum);
}
