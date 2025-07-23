var controller = new ScrollMagic.Controller();

document.querySelectorAll('.scroll__opacity').forEach(function(section){
  new ScrollMagic.Scene({
  triggerElement: section,
  triggerHook: 0.7,
})
  .setClassToggle(section, 'fade-in')
  .addTo(controller)
})

