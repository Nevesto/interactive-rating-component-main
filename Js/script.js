const Container = document.querySelector(".container");
console.log(Container)
const submited = document.querySelector(".submited");
console.log(submited)
const submitBtn = document.querySelector('#submit');
const rateAgain = document.querySelector('#rate-again');
const rating = document.querySelector('#rate');
const rates = document.querySelectorAll('.btn');

submitBtn.addEventListener("click", () => {
    submited.classList.remove("hidden");
    Container.style.display = 'none';
});

rateAgain.addEventListener("click", () => {
    submited.classList.add("hidden");
    Container.style.display = 'block';
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
        console.log(rate.innerHTML)
    });
});