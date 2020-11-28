var playAnim = anime({
    targets: '.el',
    translateX: 80,
    easing: 'easeInOutSine',
    delay: anime.stagger(200),
    loop: true,
    direction: 'alternate',
});

$(window).on('load', function() {
    playAnim.pause();
});