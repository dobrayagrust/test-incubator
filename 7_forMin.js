var arrayOfNumbers= [-10000,-1,1,3,10,3333,15,-100,99,-99999];


  function maxNum() {
    let maxValue = arrayOfNumbers[0];
   for (let i = 1; i < arrayOfNumbers.length; ++i) {
     if (arrayOfNumbers[i] < maxValue) {
       maxValue = arrayOfNumbers[i];
     };
    };
    return maxValue;
};
      alert( maxNum() );
