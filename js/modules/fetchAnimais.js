import initAnimatesNumbers from "./animaNumeros.js";

export default function initFetchAnimais() {
  const numerosGrid = document.querySelector(".numeros-grid");
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
  
      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimatesNumbers();
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
  fetchAnimais("../../animais.api.json");
}
