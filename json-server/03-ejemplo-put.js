fetch("http://localhost:3000/trainers/4", {
    method: "PUT",
    body: JSON.stringify({
        id: '4',
        nombres: 'Yulieth',
        apellidos: 'Correa',
        especialidad: 'fullstack python',
        sexo: 'f'

    }),
    headers: {
        'Contend-type': 'application/json; charset=UTF-8'
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.error("Error!!!: " + error));