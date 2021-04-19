var searchInput = document.getElementById('search');
var searchButton = document.getElementById('searchButton');
searchButton.addEventListener("click", search);

function search() {
    if (searchInput.value === "google") {
    alert("Яндекс круче, но это не точно.");
    } else {
        alert(searchInput.value);
    };
}




