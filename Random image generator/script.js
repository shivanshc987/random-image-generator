const imageContainerE1 = document.querySelector(".image-container");
const btnE1 = document.querySelector(".btn");
btnE1.addEventListener("click",()=>{
    
        addNewImages()

});

let imageNum=9;
function addNewImages(){
    for (let index = 0; index < imageNum; index++){
    const newImgE1 = document.createElement("img");
    newImgE1.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainerE1.appendChild(newImgE1);
    
}}