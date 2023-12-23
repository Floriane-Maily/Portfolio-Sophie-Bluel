
const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", function (event) {
    event.preventDefault()

})

const url = "http://localhost:5678/api/users/login"
const data = {
    email: "sophie.bluel@test.tld",
    password: "S0phie"
}
fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
})

    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    })



