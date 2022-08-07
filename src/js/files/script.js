// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";


document.addEventListener('click', documentActions);

function documentActions(e) {
  const targetElement = e.target;
  // console.log('targetElement: ', targetElement);

  if (targetElement.closest('.menu__link')) {
    document.documentElement.classList.remove('menu-open');
    document.documentElement.classList.remove('lock');
  }
};