let bigImages = [
    './image-product-1.jpg',
    './image-product-2.jpg',
    './image-product-3.jpg',
    './image-product-4.jpg',
] 

let mainImg = document.getElementById("main-img")

let otherImgs = document.getElementsByClassName("other-img")
for (let i = 0; i < otherImgs.length; i++) {
    otherImgs[i].addEventListener('click', function(){
        mainImg.src = bigImages[i]
    })
}