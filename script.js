import termsData from "./data/data.js";


function activeMenu(){
    const menu = document.querySelector(".ul-menu");
    menu.classList.toggle("active");
}

function closeCard(){
    const card = document.querySelector(".flot");
    card.classList.add("close");
}


// affiche terms


const container = document.querySelector(".terms");

container.innerHTML =`
<h2>${termsData.title} </h2>
<p> ${termsData.lastUpdated}</p>
`
termsData.sections.forEach(section => {
    const div = document.createElement("div");

    div.innerHTML=`
<h3>${section.title} </h3>
    
     ${
      Array.isArray(section.content)
        ? `<ul>${section.content.map(item => `<li>${item}</li>`).join("")}</ul>`
        : `<p>${section.content}</p>`
    }
  `;
  container.appendChild(div);
    
});



