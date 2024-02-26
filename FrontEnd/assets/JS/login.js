
const loginForm = document.querySelector(".login-form")
const url = "http://localhost:5678/api/users/login"
const emailLogin = document.getElementById("email")
const passwordLogin = document.getElementById("password")


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

        if (response.status === 200) {
            const data = await response.json()
            localStorage.setItem("token", data.token)
            window.location.href = "http://127.0.0.1:5500/FrontEnd/index.html"
        } else {
            throw new Error(response.status)
        }

    } catch (error) {
        alert("La combinaison email/mot de passe est invalide", error)
    }
})







