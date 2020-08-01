let searchBox = document.querySelector("#search_input_box");
let searchBtn = document.querySelector("#search_1");
searchBtn.addEventListener('click', function () {
    searchBox.style.visibility = 'visible';
});


let closeSearch = document.querySelector('#close_search');

closeSearch.addEventListener('click', function () {
    searchBox.style.visibility = 'hidden';
});

