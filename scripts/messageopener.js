const previewCard = document.getElementById("preview-section");
const previewButton = document.getElementById("preview-button");
const fullCard = document.getElementById("text-section")
const hideButton = document.getElementById("hide-button");


previewButton.addEventListener("click", function() {
    previewCard.style.display = "none";
    fullCard.style.display = "flex";
    fullCard.style.visibility = "visible";
})

hideButton.addEventListener("click", function() {
    previewCard.style.display = "flex";
    fullCard.style.display = "none";
    fullCard.style.visibility = "hidden";
})