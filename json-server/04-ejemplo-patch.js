fetch("http://localhost:3000/trainers/4", {
    method: "PATCH",
    body: JSON.stringify({
        edad: '18'

    }),
    headers: {
        'Contend-type': 'application/json; charset=UTF-8'
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.error("Error!!!: " + error));