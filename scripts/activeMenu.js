window.addEventListener('load', function() {
    let header = document.getElementById('header');
    let pages = header.getElementsByClassName('menu');
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].href === window.location.href) {
            pages[i].classList.add("active");
        }
    }
});