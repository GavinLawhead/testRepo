//listen for form SubmitEvent

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  console.log(123);
}
