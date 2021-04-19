var searchInput = document.getElementById('search');
var searchButton = document.getElementById('searchButton');
searchButton.addEventListener("click", search);

var timeoutAlert = function() {
    alert("Яндекс круче, но это не точно.");
  };

function search() {
    if (searchInput.value === "google") {
    setTimeout(timeoutAlert, 3000);
    } else {
        alert(searchInput.value);
    };
}