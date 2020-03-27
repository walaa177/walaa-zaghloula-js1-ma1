// question 1
let cat = {
    complain : function() {
        consol.log("Meow!");
    }
};

// question 2
var heading = document.querySelector("h3");


// question 3
heading.style.fontSize = "2em";

// question 4
heading.classList.add("subheading");

// question 5
let paragraphs = document.querySelectorAll("p");

// question 6
let resultsContainer= document.getElementsByClassName("results");
resultsContainer.innerHTML ="<p>New paragraph</p>";

// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
function catstype(catArray){
    for(let i=0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
};
catstype(cats);


// question 8
function catstype(catArray){
    let catsHTML ="";
    for( let i = 0; i < catArray.length ; i++ ){
        catsHTML += `<h5> ${catArray[i].name} </h5>`;
    }
   return catsHTML;
};


// question 9

resultsContainer.innerHTML = catstype(cats);

// question 10

function catstype(catArray){
    let catsHTML ="";
    for( let i = 0; i < catArray.length ; i++ ){
        let name = catArray[i].name;
        let age = "Age unknown";
        if(catArray[i].age) {
            age = catArray[i].age;
        }
        catsHTML += `<div><h5> ${name} </h5> <p>${age}</p></div>`;
    }
   return catsHTML;
};

