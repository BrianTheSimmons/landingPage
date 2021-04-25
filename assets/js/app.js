const showcase = document.querySelector('.showcase');
const menuToggle = document.querySelector('.toggle');

menuToggle.addEventListener('click', () => {
    showcase.classList.toggle('active');
    console.log("clicked");
})