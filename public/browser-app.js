// Dataset 

const data = [{
        name: "Book Club",
        img: "./images/book-club.jpg",
        path: "./book-club/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Task Manager",
        img: "images/tasks.jpg",
        path: "./task-manager/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Perfume Store",
        img: "images/perfume.jpg",
        path: "./perfume-store/app.js",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    }
]

var filter = document.getElementById("filterButton");
const project = document.querySelector(".project-items")
var selected = filter.options[filter.selectedIndex].value;
if (selected == "all") {
    console.log("all selected");
}

window.addEventListener("DOMContentLoaded", function() {
    displayData(data);
})

function displayData(data) {
    let displayData = data.map(function(item) {
        var languageUsed = ''
        item.language.forEach(element => {
            languageUsed = languageUsed + `<h4 class="language-used">${element}</h4>`
        });
        // displaying array items for given category
        return ` <article class="project-item">
    <div class="img-container">
        <a href=${item.path}>
            <img src=${item.img} class="cover-image" />
        </a>
    </div>
    <article class="item-details">
        <h2 class="title">${item.name}</h2>
        ${languageUsed}
    </article>
    <h3 class="source-code-text"><a href=${item.github} class="source-code">Source Code</a></h3>
            </article>`
    });
    // so map gives us an array.. we need to join all the elements without coma(",") thus giving no parameter("")
    displayData = displayData.join("");
    //displaying it in class - menu-item
    project.innerHTML = displayData
}

const btn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const social = document.querySelector(".social-icons")

btn.addEventListener("click", function() {
    //     console.log(links.classList.contains("links"));
    //      if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    //   } else {
    //     links.classList.add("show-links");
    //   }
    links.classList.toggle("show-links");
})