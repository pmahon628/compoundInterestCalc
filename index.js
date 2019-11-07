const sliders = document.querySelectorAll(".slider");
const amount = document.querySelector(".amount");
const interest = document.querySelector(".interst");
const years = document.querySelector(".years")
const output = document.querySelector(".slider__total");

console.log(100 * 1.1)
console.log(100 * Math.pow(1.1, 2))

function calculateAmount(){
    const total = 
    amount.innerHTML * Math.pow(1 + interest.innerHTML / 100, years.innerHTML)
    output.innerHTML = "$" + Math.round(total);
}

sliders.forEach(slider => {
    // Initially diplay the values
    slider.nextElementSibling.innerHTML = slider.value;

    slider.addEventListener("input", e => {
        e.target.nextElementSibling.innerHTML = e.target.value;
        calculateAmount();
    });
});

calculateAmount();