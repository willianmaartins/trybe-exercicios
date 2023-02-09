const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
const checkValid = document.getElementById('agreement');

checkValid.addEventListener('click', () => {
  if (submitBtn.disabled === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

clearBtn.addEventListener('click', () => {
  window.location.reload();
});