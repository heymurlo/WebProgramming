var startTime = 0;

(function() {
    startTime = (new Date).getTime();
})();


window.onload = function() {
    var endTime = (new Date).getTime();
    var footer = document.querySelector('footer');
    footer.firstElementChild.textContent += ' ';
    footer.firstElementChild.textContent += endTime - startTime + 'ms.';

}