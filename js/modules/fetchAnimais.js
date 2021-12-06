import AnimatesNumbers from "./animaNumeros.js";

export default function fetchAnimals(url, target) {
  const numerosGrid = document.querySelector(target);

  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animateAnimalsNumbers() {
    const animateNumbers = new AnimatesNumbers("[data-numero]", ".numeros", "ativo")
    animateNumbers.init();
  }

  async function createAnimals() {
    try {
      
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => fillAnimals(animal));
      animateAnimalsNumbers();

    } catch(error) {
      console.log(Error(error))
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `
    <h3>${animal.especie}</h3>
    <span data-numero>${animal.total}</span>
    `;
    return div;
  }
  return createAnimals();
}
