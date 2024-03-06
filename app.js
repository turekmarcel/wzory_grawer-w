const setStep = step => {
  document.querySelectorAll(".step-content").forEach(element => element.style.display = "none");
  document.querySelector("[data-step='" + step + "']").style.display = "block";
  console.log("dziala")
};
document.querySelectorAll("[data-set-step]").forEach(element => {
  element.onclick = event => {
    setStep(parseInt(element.dataset.setStep));
  };
});

const stepContents = document.querySelectorAll('.step-content');

stepContents.forEach(stepContent => {
  const elements = stepContent.querySelectorAll('input[id^="noneImage"]');
  const checkboxes = stepContent.querySelectorAll('input[type="checkbox"]:not([id^="noneImage"]):not([id*="elemImage"])');
  let selectedCount = 0;

  elements.forEach(element => {
    element.addEventListener('change', () => {
      if (element.checked === true) {
        checkboxes.forEach(checkbox => {
          checkbox.checked = false;
        });
      }
    });
  });

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked === true) {
        elements.forEach(element => {
          element.checked = false;
        });
      }
      selectedCount = Array.from(checkboxes).reduce((count, checkbox) => checkbox.checked ? count + 1 : count, 0);
      if (selectedCount > 3) {
        checkbox.checked = false;
      }
    });
  });
});


const limitElemImageCheckbox = () => {
  const elemImageCheckboxes = document.querySelectorAll('input[type="checkbox"][id*="elemImage"]');
  
  elemImageCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked === true) {
        elemImageCheckboxes.forEach(elemCheckbox => {
          if (elemCheckbox !== checkbox) {
            elemCheckbox.checked = false;
          }
        });
      }
    });
  });
};

limitElemImageCheckbox();