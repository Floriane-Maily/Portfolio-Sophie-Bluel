

fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(works => {
        for (let i = 0; i < works.length; i++) {
            const figure = works[i]
            const gallery = document.querySelector(".gallery")
            const workElement = document.createElement("figure")


            const imageElement = document.createElement("img")
            imageElement.src = figure.imageUrl
            imageElement.alt = figure.title

            const imageElementCaption = document.createElement("figcaption")
            imageElementCaption.innerText = figure.title

            gallery.appendChild(workElement)
            workElement.appendChild(imageElement)
            workElement.appendChild(imageElementCaption)
        }
        console.log(works)
    })

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


btnTous.addEventListener("click", () => {




})


