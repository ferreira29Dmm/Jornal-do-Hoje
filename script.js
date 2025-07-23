var controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller();

document.querySelectorAll('.scroll__opacity').forEach(function(section){
  new ScrollMagic.Scene({
  triggerElement: section,
  triggerHook: 0.7,
})
  .setClassToggle(section, 'fade-in')
  .addTo(controller)
})

document.querySelectorAll('.scroll__opacity__initial').forEach(function(section){
  new ScrollMagic.Scene({
  triggerElement: section,
  triggerHook: 0.35,
})
  .setClassToggle(section, 'fade-in')
  .addTo(controller2)
})

