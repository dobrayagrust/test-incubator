var arrayContainer = document.getElementById('array');
var clickButton = document.getElementById('clickButton');
clickButton.addEventListener("click", findMax);

function findMax() {
   var arrayLength = 7;
   var array = [];
   for (var i = 0; i < arrayLength; i++) {
       array[i] = prompt();
       if (array[i] === null) {
           alert('Отмена');
           return;
       }
       else if (array[i] === "") {
          alert("Вы не указали число");
          array[i] = prompt("Введите любое число");
       };
      };
      alert(Math.max(...array));
   }