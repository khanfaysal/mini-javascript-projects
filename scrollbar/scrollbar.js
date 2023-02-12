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
    console.log(linksContainerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight);

    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
})