//listen for form SubmitEvent

document.querySelector("#thebutton").addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();

  console.log("123");
}
