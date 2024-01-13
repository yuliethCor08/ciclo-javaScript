fetch("http://localhost:3000/trainers?nombres=Carlos", {
    method: "GET",
    headers: {
        'Contend-type': 'application/json; charset=UTF-8'
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));