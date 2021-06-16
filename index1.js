//Deixando scroll lento
let menuItems = document.querySelectorAll('nav a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId);
})

function scrollToId(event) {
    event.preventDefault();
    let element = event.target;
    let id = element.getAttribute('href');
    let scroll = document.querySelector(id).offsetTop;

    window.scroll({
        top: scroll,
        behavior: "smooth"
    });
}