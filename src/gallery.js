(() => {
  const mobileGalmenuRef = document.querySelector('[data-gallery]');
  const inputs = document.querySelectorAll('input[type=checkbox]');
  function check() {
    inputs.forEach(input => {
      if (input.checked) mobileGalmenuRef.classList.toggle('type-one');
      else {
        mobileGalmenuRef.classList.toggle('type-one');
      }
    });
  }
  inputs.forEach(input => input.addEventListener('change', check));
})();

// (() => {
//   const toggleRef = document.querySelector('[data-toggle]');

//   toggleRef.addEventListener('click', () => {
//     toggleRef.classList.toggle('_toggled');
//   });
//   inputs.forEach(input => input.addEventListener('change', check));
// })();

// $(document).ready(function () {
//   $('.switch__info').click(function () {
//     $('p').toggleClass('main');
//   });
// });

(() => {
  const toggleRef = document.querySelector('[data-toggle]');
  const inputs = document.querySelectorAll('input[type=checkbox]');
  function check() {
    inputs.forEach(input => {
      if (input.checked) toggleRef.classList.toggle('toggled');
      else {
        toggleRef.classList.toggle('toggled');
      }
    });
  }
  inputs.forEach(input => input.addEventListener('change', check));
})();
