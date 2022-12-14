// ELEMENTO RECEBE FOCO E A BORDA FICA ROXA 
let focusElement = document.querySelectorAll('input')

for (let i = 0; i < focusElement.length; i++){
    focusElement[i].addEventListener('focus', changeColor)
    focusElement[i].addEventListener('blur', defaultColor)
}

function changeColor (e) {
    e.target.style = 'border-color: purple; outline: none';
}

function defaultColor (e) {
    e.target.style = 'border-color: '
}

// LOG NO CONSOLE COM VALOR ATUALIZADO DOS CAMPOS/ SALVAR NO LOCALSTORAGE E RECUPERAR
for (let i = 0; i < focusElement.length; i++){
    focusElement[i].addEventListener('change', change)
}

function change(e){
    window.localStorage.setItem(e.target.name, e.target.value)
    console.log(e.target.value)
}

window.addEventListener('load', getValues)

function getValues(){
    for (let i = 0; i < focusElement.length; i++){
    focusElement[i].value = window.localStorage.getItem(focusElement[i].name)
}
}

// LOG NO CONSOLE ANTES DO ENVIO
function logSubmit (e) {
    console.log('Preparando envio...')
    e.preventDefault()
}

const submitForm = document.getElementById('form')
submitForm.addEventListener('submit', logSubmit)


