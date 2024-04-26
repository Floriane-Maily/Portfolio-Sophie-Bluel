
// Création des projets (works) dans le DOM
function generateWorks(works) {
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

// Récupération des projets (works) via l'API + catégories en paramètre pour les filtres
async function fetchWorks(categoryId) {
    const response = await fetch("http://localhost:5678/api/works")
    const works = await response.json()
    if (categoryId) {
        const worksFiltered = works.filter(work => work.categoryId === categoryId)
        generateWorks(worksFiltered)
    }
    else {
        generateWorks(works)
    }
}
fetchWorks()


// Création de la div contenant les boutons filtres dans le DOM
const sectionPortfolio = document.getElementById("portfolio")
const filterButtons = document.createElement("div")
filterButtons.classList.add("filter-buttons")
sectionPortfolio.appendChild(filterButtons)
sectionPortfolio.insertBefore(filterButtons, sectionPortfolio.childNodes[2])


// Fonction resetColors pour les boutons filtres
const resetFiltersColor = document.querySelectorAll("#Portfolio button")
function resetColors(selectedButton) {
    resetFiltersColor.forEach(button => {
        if (button !== selectedButton) {
            button.style.color = "initial"
            button.style.backgroundColor = "initial"
        }
    })
}

// Création des catégories dans le DOM + création bouton "Tous"
function generateCategories(categories) {
    const filterButtons = document.querySelector(".filter-buttons")
    filterButtons.innerHTML = ''
    const allCategories = document.createElement("button")
    allCategories.innerText = "Tous"
    filterButtons.appendChild(allCategories)
    allCategories.addEventListener("click", () => {
        fetchWorks()
    })

    for (let i = 0; i < categories.length; i++) {
        const projectsCategories = categories[i]
        const categoryElement = document.createElement("button")
        categoryElement.innerText = projectsCategories.name
        filterButtons.appendChild(categoryElement)
        // Au clic sur un bouton : les autres boutons reprennent leur couleur initiale avec appel de la fonction resetColors
        categoryElement.addEventListener("click", () => {
            const galleryByCategory = document.querySelector(".gallery")
            galleryByCategory.innerHTML = ''
            categoryElement.style.color = "#FFFEF8"
            categoryElement.style.backgroundColor = "#1D6154"

            fetchWorks(projectsCategories.id)
            resetColors(categoryElement)
        })
    }
}


// Récupération des catégories via l'API 
async function fetchCategories() {
    const response = await fetch("http://localhost:5678/api/categories")
    const categories = await response.json()
    generateCategories(categories)
}
fetchCategories()


////////////////////////////////////////////////////////////////////////////////////////////////////


// Passage au mode édition si utilisateur connecté (token généré)
if (localStorage.getItem("token")) {
    const login = document.querySelector(".login")
    const logout = document.querySelector(".logout")
    const blackBanner = document.querySelector(".black-banner")
    const openModal = document.getElementById("open-modal")

    login.style.display = "none"
    logout.style.display = "flex"
    blackBanner.style.display = "flex"
    openModal.style.display = "flex"
    filterButtons.style.display = "none"
}

// logout
const logout = document.querySelector(".logout")
logout.addEventListener("click", () => {
    localStorage.removeItem("token")
})








