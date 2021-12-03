export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
     this.buttonOpen = document.querySelector(buttonOpen);
     this.buttonClose = document.querySelector(buttonClose);
     this.containerModal = document.querySelector(containerModal);

     // bind this para as callback fazerem referencia ao objeto da classe
     this.addEventToggleModal = this.addEventToggleModal.bind(this)
     this.clicOffModal = this.clicOffModal.bind(this)
  }

  toggleModal = () => {
     this.containerModal.classList.toggle("ativo");
   };

   addEventToggleModal(event) {
     event.preventDefault()
     this.toggleModal()
   }

  clicOffModal(event) {
     if (event.target === this.containerModal) this.toggleModal(event);
   }

   addModalEvents() {
    this.buttonOpen.addEventListener("click", this.addEventToggleModal);
    this.buttonClose.addEventListener("click", this.addEventToggleModal);
    this.containerModal.addEventListener("click", this.clicOffModal);
   }

   init() {
     if(this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvents()
     }
     return this
   }
}
