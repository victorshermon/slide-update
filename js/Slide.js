export default class Slide {

  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
   event.preventDefault();
   this.wrapper.addEventListener('mousemove', this.onMove);
  }

  onMove() {
    console.log('moveu');
  }

  onEnd() {
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEventos() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  bindStart() {
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindStart();
    this.addSlideEventos();
  }

}
