const categoriesButton = document.querySelector('.categories')
const message = document.querySelector('.message')


categoriesButton.addEventListener('click', async (event) => {
  event.preventDefault()

  const prepareInputData = [...document.forms[0].elements].map(input => [input.name, input.value]);
  const dataToSend = Object.fromEntries(prepareInputData)
  const res = await fetch('/', {
    method: 'POST',
    body: JSON.stringify(dataToSend),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const result = await res.status;
  if(result == 200){
    message.innerText = 'Успех!'
  }
  if(result == 500){
    message.innerText = 'Осечка!'
  }
})