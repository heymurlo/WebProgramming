function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function addPhoto(title, thumb, url) {
    const img = document.createElement('img');
    img.src = thumb;
    img.alt = url;
    img.setAttribute('style', 'height: 20%');
    img.setAttribute('style', 'width: 20%');
    document.querySelector('.main__gallery').appendChild(img);
}

function addPage(currentPage) {
    document.querySelector('.main__loader').setAttribute('style', 'display: inline;');

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=8&_page=' + currentPage)
        .then(response => response.json())
        .then(data => {
                for (let item of data) {
                    addPhoto(item['title'], item['thumbnailUrl'], item['url'])
                }
                document.querySelector('.main__loader').setAttribute('style', 'display: none;');
                document.querySelector('.fa').setAttribute('style', 'display: none;');
            }
        ).catch((error) => {
        console.log(error);
        document.querySelector('.fa').setAttribute('style', 'display: inline;')
    });
}
let currentPage = 1;
addPage(currentPage);
document.querySelector('.main__more').addEventListener("click", function () {
    currentPage++;

    addPage(currentPage);
})