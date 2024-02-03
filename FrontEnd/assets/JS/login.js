

const loginForm = document.querySelector(".login-form")
const url = "http://localhost:5678/api/users/login"
const emailLogin = document.getElementById("email").value
const passwordLogin = document.getElementById("password").value




loginForm.addEventListener("submit", async function (event) {
    event.preventDefault()
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailLogin, passwordLogin)
        })

        if (response.status === 200) {
            const data = await response.json()
            localStorage.setItem("token", token)
        } else {
            throw new Error(response.status)
        }

    } catch (error) {
        console.error('erreur', error)
    }
})







