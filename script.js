"use strict";

const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const yearsInput = document.getElementById("years");
const rateValue = document.getElementById("rate_val");
const result = document.getElementById("result");
const calculatorForm = document.getElementById("calculator-form");

function updateRate() {
    rateValue.textContent = rateInput.value;
}

function mark(value) {
    const element = document.createElement("mark");
    element.textContent = value;
    return element;
}

function appendResultLine(...parts) {
    result.append(...parts, document.createElement("br"));
}

function compute() {
    const principal = principalInput.valueAsNumber;
    const rate = rateInput.valueAsNumber;
    const years = yearsInput.valueAsNumber;

    if (!Number.isFinite(principal) || principal <= 0) {
        alert("Please enter an amount greater than zero.");
        principalInput.focus();
        return;
    }

    if (!Number.isInteger(years) || years < 1 || years > 10) {
        alert("Please enter a whole number of years from 1 to 10.");
        yearsInput.focus();
        return;
    }

    const interest = (principal * rate * years) / 100;
    const amount = principal + interest;
    const finalYear = new Date().getFullYear() + years;

    if (!Number.isFinite(interest) || !Number.isFinite(amount)) {
        alert("Please enter a smaller amount.");
        principalInput.focus();
        return;
    }

    result.replaceChildren();
    appendResultLine("If you deposit $", mark(principal.toFixed(2)), ",");
    appendResultLine(
        "at an interest rate of ",
        mark(`${rate}%`),
        " for ",
        mark(String(years)),
        " year(s),"
    );
    appendResultLine(
        "you will earn $",
        mark(interest.toFixed(2)),
        " in interest and receive $",
        mark(amount.toFixed(2)),
        ","
    );
    appendResultLine("in the year ", mark(String(finalYear)), ".");
}

rateInput.addEventListener("input", updateRate);
calculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    compute();
});
