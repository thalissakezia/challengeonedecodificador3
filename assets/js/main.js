// Criptografar
const criptografar = (event) => {
  textValue = text.value;
  
  if(textValue == '') {
    noText();
    return;
  }
  
  if (validateText(textValue)) {
    alert('Apenas letras minúsculas e sem acento')
    return;
  }

  noMsgImg.classList.add('hidden');
  textOut.classList.add('show');

  btnCopyShow.classList.add('showCopy');
  card.classList.add('cardBord');

  textCript = cript(textValue);

  textOut.innerText = textCript;

  limparTexto()
}

// Descriptografar
const descriptografar = (event) => {
  textValue = text.value;

  if(textValue == '') {
    noText();
    return;
  }
  
  if (validateText(textValue)) {
    alert('Apenas letras minúsculas e sem acento')
    return;
  }

  noMsgImg.classList.add('hidden');
  textOut.classList.add('show');
  
  btnCopyShow.classList.add('showCopy');
  card.classList.add('cardBord');

  textDecript = decript(textValue);

  textOut.innerText = textDecript;
  limparTexto()
}

// Sem texto
function noText() {
  textOut.innerText = '';
  textOut.classList.remove('show');

  btnCopyShow.classList.remove('showCopy');
  card.classList.remove('cardBord');

  noMsgImg.classList.remove('hidden');

  setTimeout (()=> {
    alert('Insira um texto');
  }, 100);
}

// Validação do texto
function validateText(textValue) {
  const rexEX = /[A-Z\u0080-\u009F\u00A1-\u00FF]+/;
  return rexEX.test(textValue);
}

// Criptografa o texto
function cript (text) {
  text = text.replaceAll('e', 'enter');
  text = text.replaceAll('i', 'imes');
  text = text.replaceAll('a', 'ai');
  text = text.replaceAll('o', 'ober');
  text = text.replaceAll('u', 'ufat');
  return text;
}

// Descriptografa o texto
function decript (text) {
  text = text.replaceAll('enter', 'e');
  text = text.replaceAll('imes', 'i');
  text = text.replaceAll('ai', 'a');
  text = text.replaceAll('ober', 'o');
  text = text.replaceAll('ufat', 'u');
  return text;
}

const copiar = (event) => {
  textCopy = textOut.value;
  navigator.clipboard.writeText(textCopy);
  alert('Copiado');
}

//Input Text
const text = document.getElementById('user-textin'); 

//Output Text
const noMsgImg = document.getElementById('no-text');
const textOut = document.getElementById('textout__parag'); 

//Botão Criptografar
const btnCript = document.getElementById('btn-cript');
btnCript.addEventListener('click', criptografar);


//Botão Descriptografar
const btnDecript = document.getElementById('btn-decript');
btnDecript.addEventListener('click', descriptografar);



const btnCopyShow = document.getElementById('btn-copy');
const card = document.getElementById('textout-card');



//Botão Copiar
const btnCopy = document.getElementById('btn-copy');
btnCopy.addEventListener('click', copiar);





window.onload = function () {
  limparTexto();
}
function limparTexto() {
  document.querySelector('#user-textin').value = ""
}
