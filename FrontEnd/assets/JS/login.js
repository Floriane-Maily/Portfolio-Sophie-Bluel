
const loginForm = document.querySelector(".login-form")
const url = "http://localhost:5678/api/users/login"
const emailLogin = document.getElementById("email")
const passwordLogin = document.getElementById("password")

// Envoi du formulaire et récupération des données dans l'API 
loginForm.addEventListener("submit", async function (event) {
    event.preventDefault()
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailLogin.value,
                password: passwordLogin.value
            })
        })

        // Si email & mdp valides, générer le token et le sauvegarder dans le localstorage
        if (response.status === 200) {
            const data = await response.json()
            localStorage.setItem("token", data.token)
            window.location.href = "http://127.0.0.1:5500/FrontEnd/index.html"
            // Sinon, envoyer message d'erreur
        } else {
            throw new Error(response.status)
        }
    } catch (error) {
        console.error('erreur', error)

    }

})
