const images = document.querySelectorAll(".img1");
const fullImage = document.getElementById("full-image");
const fullImageSource = document.getElementById("full-image-picture");
const fullImageTitle = document.getElementById("full-image-title");
const fullImageDesc = document.getElementById("full-image-desc");




images.forEach(function(image) {
    image.addEventListener('click', function() {
        const img = image.querySelector("img");
        const title = image.querySelector("span");
        const desc = image.querySelector("#image-description");
        fullImageSource.src = img.src;
        fullImageTitle.textContent = title.textContent;
        fullImageDesc.textContent = desc.textContent;
        fullImage.style.display = 'flex';
        fullImage.style.visibility = 'visible';
        fullImageDesc.style.display = 'flex';
        fullImageDesc.style.visibility = 'visible';


        console.log("clicked") 

        fullImage.addEventListener('click', function(){
            fullImage.style.display = 'none';
            fullImageDesc.style.visibility = 'hidden';
        })
    })


})