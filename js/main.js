var el = document.querySelectorAll('.el');
var btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    anime({
        targets: el,
        translateX: 270,
        delay: anime.stagger(100)
    })
})