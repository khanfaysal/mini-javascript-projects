// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // console.log('shake and bake');
    // if (linksContainer.classList.contains('show-links')) {
    //     linksContainer.classList.remove('show-links');
    // } else {
    //     linksContainer.classList.add('show-links')
    // }

    // linksContainer.classList.toggle('show-links');

    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
});



// navbar scroll 
const navbar = document.getElementById('nav');
// top to bottom arrow
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// smooth scroll

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        // detect specific section
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the height
        const navHeight = navbar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + linksContainerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
        console.log(id);
    })
})


