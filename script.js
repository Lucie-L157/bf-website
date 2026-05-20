$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }

    window.addEventListener('DOMContentLoaded', () => {

    const root = document.querySelector('.heartsfloat');

    const emojis = ['💖','💗','💞','💘','💕','💓'];

    function addHeart() {

        const s = document.createElement('span');

        s.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        s.style.left = Math.random() * 100 + '%';

        s.style.fontSize =
            (12 + Math.random() * 18) + 'px';

        s.style.animationDuration =
            (8 + Math.random() * 8) + 's';

        root.appendChild(s);

        setTimeout(() => {
            s.remove();
        }, 17000);
    }

    setInterval(addHeart, 600);

    for(let i = 0; i < 10; i++) {
        addHeart();
    }

});


});