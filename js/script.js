const noticeEl = document.querySelector(".notice");
const stepperEl = document.querySelector(".stepper");

if (noticeEl) {
  const noticeCloseEl = noticeEl.querySelector(".notice__close");
  noticeCloseEl.addEventListener("click", () => {
    noticeEl.classList.add("notice--hidden");
  });
}

if (stepperEl) {
  const stepperInputEl = stepperEl.querySelector(".stepper__input");
  const stepperBtnMinusEl = stepperEl.querySelector(".stepper__btn--minus");
  const stepperBtnPlusEl = stepperEl.querySelector(".stepper__btn--plus");

  const stepperMin = Number(stepperInputEl.getAttribute("min"));
  const stepperMax = Number(stepperInputEl.getAttribute("max"));

  let count = Number(stepperInputEl.value);

  const updateStepperButtons = () => {
    stepperBtnMinusEl.classList.toggle("stepper__btn--disabled", count <= stepperMin);
    stepperBtnPlusEl.classList.toggle("stepper__btn--disabled", count >= stepperMax);
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
}
