window.onload = function () {
    let elem = document.querySelector('.main-carousel');
    let flkty = new Flickity(elem, {
        prevNextButtons: true, //стрелки для перелистывания
        wrapAround: true, //бесконечный скроллинг
        groupCells: 3 //кол-во отображаемых элементов
    });
}