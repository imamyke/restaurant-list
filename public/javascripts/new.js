const form = document.querySelector('#form')
form.addEventListener('submit', function onFormSubmitted(event) {
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
    alert('還有未填寫的內容!')  //驗證不通過，就跳 alert
  }
})

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', function onSubmitButtonClicked(event) {
  form.classList.add('was-validated')
})