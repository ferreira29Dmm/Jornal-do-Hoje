// First call to define "parchment" height
document.onload = ScrollHeight();

// Redraw when viewport is modified
window.addEventListener('resize', function(event){
    ScrollHeight();
});


function ScrollHeight() {
    var content = document.querySelector('#parchment');
    content.style.height = document.body.offsetHeight + 'px';
    console.log()
}