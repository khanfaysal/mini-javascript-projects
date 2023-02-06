const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function () {
    // get random number from array
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber]
    // console.log(document.body);
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}