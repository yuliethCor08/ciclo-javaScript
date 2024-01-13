fetch("http://localhost:3000/trainers", {
    method: "POST",
    body: JSON.stringify({
        id: '4',
        nombres: 'Yulieth',
        apellidos: 'Correa',
        especialidad: 'fullstack python'

    }),
    headers: {
        'Contend-type': 'application/json; charset=UTF-8'
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.error("Error!!!: " + error));