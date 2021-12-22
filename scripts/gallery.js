window.onload = function () {
    let elem = document.querySelector('.main-carousel');
    let btn = document.querySelector('.flickity-button')
    let flkty = new Flickity(elem, {
        prevNextButtons: true, //стрелки для перелистывания
        wrapAround: true, //бесконечный скроллинг
        groupCells: 3, //кол-во отображаемых картинок в актуальной строке

    });
}

