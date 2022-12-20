const hamburger = document.getElementById('hamburger-menu')
const closeMenubar = document.getElementById('mobile-menu-close')
const menuBar = document.getElementById('mobile-menu-bar')

hamburger.addEventListener('click', function(){
 menuBar.style.display = "block"
 if(window.innerWidth>768){
    menuBar.style.display = "none"
 }
})

closeMenubar.addEventListener('click', function(){
    menuBar.style.display = "none"
})

