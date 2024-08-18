var typingEffect= new Typed (".TypedText",{
    strings: ["Ilustradora", "Diseñadora", "Artista"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

document.getElementById("Descargar").addEventListener ("click", function (){
    var enlace = document.createElement ('a');

    enlace.href= './PortafolioPixeleado.pdf'

    enlace.download = 'PortafolioNainePixeleado.pdf';

    document.body.appendChild(enlace);

    enlace.click();

    document.body.removeChild(enlace)
})

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document.querySelector('.nav-menu a[href*="' + sectionId + '"]').classList.add('active-link');
    } else {  
    document.querySelector('.nav-menu a[href*="' + sectionId + '"]').classList.remove('active-link');

}
});
}
window.addEventListener('scroll', scrollActive);

