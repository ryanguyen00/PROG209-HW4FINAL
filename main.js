let movieArray = [];
let selectedType = "";

// define a constructor to create note objects
let MovieObject = function (pName, pYear, pGenre) {
    this.movie = pName;
    this.year = pYear;
    this.genre = pGenre;
}



document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {

        movieArray.push(new MovieObject(document.getElementById("movieName").value, document.getElementById("movieYear").value, selectedType));
        console.log(movieArray);
        document.getElementById("movieName").value = "";
        document.getElementById("movieYear").value = "";
       
    });

    $(document).bind("change", "#rating", function (event, ui) {
        selectedType = document.getElementById("rating").value;
    });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
    

});



function createList() {
    
    // clear prior data


    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    movieArray.forEach(function (element) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.movie + ":  " + element.year + ": " + element.genre;
        myul.appendChild(li);
    });
};

