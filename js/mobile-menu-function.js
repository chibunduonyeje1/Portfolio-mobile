const hamburger = document.getElementById('hamburger-menu')
const closeMenubar = document.getElementById('mobile-menu-close')
const menuBar = document.getElementById('mobile-menu-bar')

hamburger.addEventListener('click', function(){
 menuBar.style.display = "block"
})

closeMenubar.addEventListener('click', function(){
    menuBar.style.display = "none"
})