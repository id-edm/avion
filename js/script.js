const noticeEl = document.querySelector(".notice");
const stepperEls = document.querySelectorAll(".stepper");
const burgerEl = document.querySelector(".burger");

if(burgerEl) {
  const body = document.body;
  const menuEl = document.querySelector(".header__bottom");
    burgerEl.addEventListener("click", () => {
    burgerEl.classList.toggle("burger--active");
    menuEl.classList.toggle("header__bottom--active");
    body.classList.toggle("stop--scroll");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".burger, .header__bottom")) {
      if (burgerEl.classList.contains("burger--active")) {
        burgerEl.classList.remove("burger--active");
        menuEl.classList.remove("header__bottom--active");
        body.classList.remove("stop--scroll");
      }
    }
  });
}

if (noticeEl) {
  const noticeCloseEl = noticeEl.querySelector(".notice__close");
  noticeCloseEl.addEventListener("click", () => {
    noticeEl.classList.add("notice--hidden");
  });
}

if (stepperEls) {
  stepperEls.forEach((stepperEl) => {
    const stepperInputEl = stepperEl.querySelector(".stepper__input");
    const stepperBtnMinusEl = stepperEl.querySelector(".stepper__btn--minus");
    const stepperBtnPlusEl = stepperEl.querySelector(".stepper__btn--plus");

    const stepperMin = Number(stepperInputEl.getAttribute("min"));
    const stepperMax = Number(stepperInputEl.getAttribute("max"));

    let count = Number(stepperInputEl.value);

    const updateStepperButtons = () => {
      stepperBtnMinusEl.disabled = count <= stepperMin;
      stepperBtnPlusEl.disabled = count >= stepperMax;
    };

    stepperInputEl.addEventListener("change", () => {
      count = Number(stepperInputEl.value);

      if (count < stepperMin) {
        count = stepperMin;
      } else if (count > stepperMax) {
        count = stepperMax;
      }

      stepperInputEl.value = count;
      updateStepperButtons();
    });

    stepperBtnMinusEl.addEventListener("click", () => {
      if (count > stepperMin) {
        count--;
        stepperInputEl.value = count;
        updateStepperButtons();
      }
    });

    stepperBtnPlusEl.addEventListener("click", () => {
      if (count < stepperMax) {
        count++;
        stepperInputEl.value = count;
        updateStepperButtons();
      }
    });

    updateStepperButtons(); // Инициализация состояния кнопок при загрузке
  });
}
