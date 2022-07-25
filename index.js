const form = document.getElementById('form')

const onSubmit = (event) => {
  event.preventDefault()
  alert('Usuario Logado com Sucesso')
  console.log('Logando...')
}

form.addEventListener('submit', onSubmit);



// const form = document.getElementsByTagName('form')

