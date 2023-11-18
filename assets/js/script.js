let image = document.querySelectorAll(".img-card");

image.forEach((img, i) => {
    img.addEventListener("click", () => {
    console.log(`${image[i]} clicked!`);
    let active = document.querySelector(".active");
    
    active.classList.remove("active");
    image[i].classList.add("active");
  })
})