export default class AnimatesNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementNumber(number) {
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
  }

   animateNumbers() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  }

  addMutationObsever() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
   if(this.numbers.length && this.observerTarget) {
    this.addMutationObsever()
   }
    return this  
  }
}
