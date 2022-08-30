let circles = document.getElementById('circles');
   

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    circles.style.left = value * -1 + 'px';
})


