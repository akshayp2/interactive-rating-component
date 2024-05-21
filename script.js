
const RatingNo = document.querySelectorAll('.rating-no');
const Submit = document.querySelector('.submit');
let UserRating; 

function handleRatingSelection(event) {
    UserRating = parseInt(event.target.textContent);
    RatingNo.forEach(rating => rating.classList.remove('active'));
    event.target.classList.add('active');
}

function SubmitRating() {
    if (typeof UserRating !== 'undefined') {
        localStorage.setItem('userRating', UserRating);

        document.querySelector('.card').classList.add('hide');
        document.querySelector('.thank-you-card').classList.add('show');

        document.querySelector('.given-rating').textContent = UserRating;
    } else {
        alert('Please select a rating before submitting.');
    }
}

RatingNo.forEach(rating => rating.addEventListener('click', handleRatingSelection));
Submit.addEventListener('click', SubmitRating);
