console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => {
    data.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        document.body.appendChild(imgElement);
    })
})