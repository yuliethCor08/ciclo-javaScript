import { controlador } from "../controllers/controllers";

const formu = document.querySelector("form");

formu.addEventListener("click", (e) => {
  e.preventDefault();

  controlador(formu, e, "skills");

  e.stopPropagation();
});