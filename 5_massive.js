var clickButton = document.getElementById('clickButton');
clickButton.addEventListener("click", alertMassive);


  function alertMassive() {
    let user1 = { name: "John", age: 20 };
    let user2 = { name: "Nick", age: 16 };
    let user3 = { name: "Jack", age: 30 };
    let user4 = { name: "Dave", age: 22 };
    let massiveUser = [ user1, user2, user3, user4 ];
    alert(massiveUser[0].name)
}


