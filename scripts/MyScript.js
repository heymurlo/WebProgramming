let startTime = 0;

(function() {
    startTime = (new Date).getTime();
})();


window.onload = function() {
    let endTime = (new Date).getTime();
    let footer = document.querySelector('footer');
    footer.textContent += endTime - startTime + 'ms.';
}


