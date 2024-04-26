
// Ouvrir modale 1
const modal = document.querySelector(".modal-container")
const openModal = document.getElementById("open-modal")
openModal.addEventListener("click", () => {
    modal.style.visibility = "visible"
    modal.removeAttribute("aria-hidden")
    modal.setAttribute("aria-modal", "true")
})

// Fermer les modales
const closeModal = document.querySelectorAll(".modal-trigger");
closeModal.forEach((modalTrigger) => {
    modalTrigger.addEventListener("click", () => {
        modal.style.visibility = "hidden"
        modal.removeAttribute("aria-modal")
        modal.setAttribute("aria-hidden", "true")
        modal2.style.visibility = "hidden"
        modal2.removeAttribute("aria-modal")
        modal2.setAttribute("aria-hidden", "true")
    })
})

// Fonction générer les travaux (images) dans la modale & Création des images dans le DOM 
function generateWorksModal(works) {
    const modalGallery = document.querySelector(".modal-gallery")
    modalGallery.innerHTML = ''
    for (let i = 0; i < works.length; i++) {
        const projects = works[i]
        const imageElement = document.createElement("img")
        imageElement.src = projects.imageUrl
        imageElement.alt = projects.title
        modalGallery.appendChild(imageElement)
        // Création élément "suppression de l'image"
        const removeIcon = document.createElement("img")
        removeIcon.id = "remove-icon"
        removeIcon.src = ("assets/icons/Bin.svg")
        removeIcon.alt = ("supprimer la photo")
        modalGallery.appendChild(removeIcon)

    }
}

// Récupération des images via l'API + Appel de la fonction fetchWorksModal
async function fetchWorksModal() {
    const response = await fetch("http://localhost:5678/api/works")
    const works = await response.json();
    generateWorksModal(works)
}
fetchWorksModal()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Ajout photo - ouvrir modale 2
const modal2 = document.querySelector(".modal-container2")
const openModal2 = document.querySelector(".add-picture")
openModal2.addEventListener("click", () => {
    modal2.style.visibility = "visible"
    modal2.removeAttribute("aria-hidden")
    modal2.setAttribute("aria-modal", "true")
    modal.style.visibility = "hidden"
    modal.removeAttribute("aria-modal")
    modal.setAttribute("aria-hidden", "true")
})
