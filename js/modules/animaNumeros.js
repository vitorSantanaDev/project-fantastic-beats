export default function initAnimatesNumbers() {
  const numbers = document.querySelectorAll("[data-numero]");

  function animateNumbers() {
    numbers.forEach((number) => {
      const total = Number(number.innerText);
      const increment = Math.floor(total / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;

        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 20 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animateNumbers();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
