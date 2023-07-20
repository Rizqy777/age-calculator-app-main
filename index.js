const inputDay = document.querySelector(".input_day");
const inputMonth = document.querySelector(".input_month");
const inputYear = document.querySelector(".input_year");
const submit = document.querySelector(".arrow");
const resultYears = document.querySelector(".result_years");
const resultMonths = document.querySelector(".result_months");
const resultDays = document.querySelector(".result_days");
const spanDay = document.querySelector(".span_day");
const spanMonth = document.querySelector(".span_month");
const spanYear = document.querySelector(".span_year");
const errorDay = document.querySelector(".error_day");
const errorYear = document.querySelector(".error_year");
const errorMonth = document.querySelector(".error_month");
const validDay = document.querySelector(".valid_day");
const validMonth = document.querySelector(".valid_month");
const validYear = document.querySelector(".valid_year");

submit.addEventListener("click", () => {
  let confirmation = true;

  function validateField(input, error, valid, span, maxValid) {
    if (input.value === "") {
      error.style.display = "block";
      input.style.border = "1px solid hsl(0, 100%, 67%)";
      valid.style.display = "none";
      span.style.color = "hsl(0, 100%, 67%)";
      confirmation = false;
    } else {
      const value = Number(input.value);
      if (isNaN(value) || value < 1 || value > maxValid) {
        error.style.display = "none";
        valid.style.display = "block";
        span.style.color = "hsl(0, 100%, 67%)";
        input.style.border = "1px solid hsl(0, 100%, 67%)";
        confirmation = false;
      } else {
        error.style.display = "none";
        valid.style.display = "none";
        input.style.border = "";
        span.style.color = "";
      }
    }
  }

  validateField(inputDay, errorDay, validDay, spanDay, 31);
  validateField(inputMonth, errorMonth, validMonth, spanMonth, 12);
  validateField(inputYear, errorYear, validYear, spanYear, 2023); // <-- El máximo válido es 2023

  if (confirmation === true) {
    function calcAge() {
      const days = Number(inputDay.value);
      const month = Number(inputMonth.value);
      const year = Number(inputYear.value);
      const actualDate = new Date();
      const difference = actualDate - new Date(year, month - 1, days);
      const ages = new Date(difference);
      const ageYear = ages.getUTCFullYear() - 1970;
      const ageMonth = ages.getUTCMonth();
      const ageDay = ages.getUTCDate() - 1;
      resultYears.textContent = ageYear;
      resultMonths.textContent = ageMonth;
      resultDays.textContent = ageDay;
    }
    calcAge();
  }
});
