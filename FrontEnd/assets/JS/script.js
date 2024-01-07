// Créations des 4 boutons filtres dans le DOM
const sectionPortfolio = document.getElementById("portfolio")
const btnFiltres = document.createElement("div")
btnFiltres.classList.add("buttons")
const btnTous = document.createElement("button")
btnTous.classList.add("btn_tous")
btnTous.innerText = "Tous"
const btnObjets = document.createElement("button")
btnObjets.classList.add("btn_objets")
btnObjets.innerText = "Objets"
const btnAppartements = document.createElement("button")
btnAppartements.classList.add("btn_appartements")
btnAppartements.innerText = "Appartements"
const btnHotelsRestos = document.createElement("button")
btnHotelsRestos.classList.add("btn_hotels_restos")
btnHotelsRestos.innerText = "Hôtels & restaurants"

sectionPortfolio.appendChild(btnFiltres)
sectionPortfolio.insertBefore(btnFiltres, sectionPortfolio.childNodes[2])
btnFiltres.appendChild(btnTous)
btnFiltres.appendChild(btnObjets)
btnFiltres.appendChild(btnAppartements)
btnFiltres.appendChild(btnHotelsRestos)


// Création des travaux dans le DOM + déclaration fonction genererWorks
function genererWorks(works) {
    const gallery = document.querySelector(".gallery")
    gallery.innerHTML = ''
    for (let i = 0; i < works.length; i++) {
        const projects = works[i]
        const workElement = document.createElement("figure")
        const imageElement = document.createElement("img")
        imageElement.src = projects.imageUrl
        imageElement.alt = projects.title
        const imageElementCaption = document.createElement("figcaption")
        imageElementCaption.innerText = projects.title

        gallery.appendChild(workElement)
        workElement.appendChild(imageElement)
        workElement.appendChild(imageElementCaption)
    }
}


// Récupération des travaux via l'API + appel de la fonction genererWorks
fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(data => {
        works = data
        genererWorks(works)
    })

// Sélection de tous les boutons filtres et déclaration de la fonction resetColors 
const buttons = document.querySelectorAll("button")
function resetColors() {
    buttons.forEach(button => {
        button.style.color = "initial"
        button.style.backgroundColor = "initial"
    })
}

// Au clic sur un bouton : le style change et les autres boutons reprennent le style initial avec l'appel de la fonction resetColors
buttons.forEach(button => {
    button.addEventListener("click", function () {
        resetColors()
        button.style.color = "#FFFEF8"
        button.style.backgroundColor = "#1D6154"
    })
})


// Au clic sur chaque bouton : filtre des travaux par catégorie 
btnTous.addEventListener("click", () => {
    console.log(works)
    genererWorks(works)
})

btnObjets.addEventListener("click", () => {
    const objets = works.filter(work => work.categoryId === 1)
    console.log(objets)
    genererWorks(objets)
})

btnAppartements.addEventListener("click", () => {
    const appartements = works.filter(work => work.categoryId === 2)
    console.log(appartements)
    genererWorks(appartements)
})
btnHotelsRestos.addEventListener("click", () => {
    const hotelRestos = works.filter(work => work.categoryId === 3)
    console.log(hotelRestos)
    genererWorks(hotelRestos)
})








