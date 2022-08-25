
const nextRef = document.querySelector("#nextPicture");
const prevRef = document.querySelector("#prevPicture");
const picsRef = document.querySelectorAll(".slider ul li");
let picIndex = 0;

picsRef[picIndex].classList.add("visible");
console.log(picsRef.length)

nextRef.addEventListener("click", function() {
    picsRef[picIndex].classList.remove("visible");
    picIndex++;
    if (picIndex >= picsRef.length -1){picIndex = picsRef.length-1}
    picsRef[picIndex].classList.add("visible");
});
prevRef.addEventListener("click", function() {
    picsRef[picIndex].classList.remove("visible");
    picIndex--;
    if (picIndex <= 0){picIndex = 0}
    picsRef[picIndex].classList.add("visible");
});

