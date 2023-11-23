

fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(works => {
        for (let i = 0; i < works.length; i++) {
            console.log(works[i])
        }
    })



