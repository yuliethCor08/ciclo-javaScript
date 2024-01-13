fetch("http://localhost:3000/trainers/4", {
    method: "DELETE",
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.error("Error!!!: " + error));