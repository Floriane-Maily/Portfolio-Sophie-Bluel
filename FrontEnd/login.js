
const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", function (event) {
    event.preventDefault()
})

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"
const url = "http://localhost:5678/api/users/login"
const data = {
    email: "sophie.bluel@test.tld",
    password: "S0phie"
}

const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    })

window.localStorage.setItem("token", token)



