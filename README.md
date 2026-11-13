# Simple Interest Calculator

A small browser based calculator for estimating simple interest on a deposit. It shows the interest earned, the total amount, and the calendar year the deposit period ends.

## Run the calculator

No installation or build step is required. Download or clone the project, then open `index.html` in a web browser.

## How to use it

1. Enter a deposit amount greater than zero.
2. Choose an annual interest rate from 1% to 20%. The slider moves in 0.25% steps and starts at 10.25%.
3. Enter a whole number of years from 1 to 10.
4. Select **Compute Interest** to see the interest earned and total amount.

The calculator uses simple interest:

```text
interest = principal × annual rate × years ÷ 100
total amount = principal + interest
```

Amounts are displayed in dollars and rounded to two decimal places.

## Project files

- `index.html` — calculator form and page structure
- `style.css` — page styling
- `script.js` — input validation and interest calculation
