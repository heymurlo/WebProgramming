var startTime = 0;

(function() {
    startTime = (new Date).getTime();
})();

var nowPageMenu = document.URL.split('/').at(-1).split('.')[0];

window.onload = function() {
    var endTime = (new Date).getTime();
    var footer = document.querySelector('footer');
    footer.firstElementChild.textContent += ' ';
    footer.firstElementChild.textContent += endTime - startTime + 'ms.';

    var element = document.getElementsByName(nowPageMenu);
    if (element.length !== 0) {
        element[0].parentElement.style.boxShadow = "0 0.3em 0 0 #fff";
    }
}

document.addEventListener("mouseout", function(event) {
    if (event.target.type === "menushka" && event.target.getAttribute('name') !== nowPageMenu) {
        event.target.parentElement.style.boxShadow = "";
    }
}, false);

document.addEventListener("mouseover", function(event) {
    if (event.target.type === "menushka" && event.target.getAttribute('name') !== nowPageMenu) {
        event.target.parentElement.style.boxShadow = "0 0.3em 0 0 #705860";
    }
}, false);