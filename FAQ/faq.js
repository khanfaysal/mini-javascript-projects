const btns = document.querySelectorAll('.question-btn');

// solve by traversing the dom
btns.forEach(function (singleBtn) {
    singleBtn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text')
    })
})