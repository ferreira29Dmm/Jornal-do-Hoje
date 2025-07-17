var controller = new ScrollMagic.Controller();

// Seleciona todas as seções com a classe .manchete__container
document.querySelectorAll('#manchete__container').forEach((el) => {
  new ScrollMagic.Scene({
    triggerElement: el,
    triggerHook: 0.8,
    reverse: false
  })
    .setClassToggle(el, 'fade-in')
    .addTo(controller);
});