const icon = document.querySelector(".icon");
const rectangle = document.querySelector(".rectangle");

icon.addEventListener("click", () =>{
    icon.classList.toggle("active");
    rectangle.classList.toggle("active");
})

function avtiveLink() {
    icon.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

icon.forEach((item) =>
item.addEventListener('click', activeLink));