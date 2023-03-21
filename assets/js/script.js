const caixaForm = document.querySelector('.caixaForm');
const btnEntrar = document.querySelector('.btnEntrar');
const btnInscrever = document.querySelector('.btnInscrever');
const body = document.querySelector('body');

btnInscrever.onclick = function() {
  caixaForm.classList.add('active');
  body.classList.add('active');
}

btnEntrar.onclick = function() {
  caixaForm.classList.remove('active');
  body.classList.remove('active');
}