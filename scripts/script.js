let crypted;
let decrypted;

(function () {
  let encryptBtn = document.getElementById('btnEncrypt');
  encryptBtn.addEventListener('click', () => {
    clean();
    encrypt();
  });

  let decryptBtn = document.getElementById('btnDecrypt');
  decryptBtn.addEventListener('click', () => {
    clean();
    decrypt();
  });

})();

function encrypt(text_entrada) {
    text_entrada = document.querySelector('.textArea').value;

    if (text_entrada.length === 0) {
    alert('Insira um text, por favor.');
    let img_principal = document.getElementById('outputImg');
    img_principal.style.visibility = 'visible';

    let copiarBtn = document.querySelector('.btnCopy');
    copiarBtn.style.visibility = 'hidden';
  } else {
    
    let text_encrypt = text_entrada.toLowerCase();

    
    crypted = text_encrypt.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

    
    showShow();

    return crypted;
  }
}

function decrypt(text_entrada) {
  
  text_entrada = document.querySelector('.textArea').value;

  
  if (text_entrada.length === 0) {
    alert('Insira um texto, por favor.');
    let img_principal = document.getElementById('outputImg');
    img_principal.style.visibility = 'visible';

    let copiarBtn = document.querySelector('.btnCopy');
    copiarBtn.style.visibility = 'hidden';
  } else {
    
    let text_decrypt = text_entrada.toLowerCase();
    
    decrypted = text_decrypt.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

    showShow();

    return decrypted;
  }
}

function showShow() {

  let img_principal = document.getElementById('outputImg');
  img_principal.style.display = 'none';

  let output = document.getElementById('output');
  output.insertAdjacentHTML('afterbegin', '<textarea autofocus class="output"></textarea>');

  let copiarBtn = document.querySelector('.btnCopy');
  copiarBtn.style.visibility = 'visible';

  let text_output = document.querySelector('.output');

  document.addEventListener('click', (e) => {
    let targetBtn = e.target;

    if (targetBtn.classList.contains('btnEncrypt')) {
      text_output.value = crypted;
    } else if (targetBtn.classList.contains('btnDecrypt')) {
      text_output.value = decrypted;
    }
  });
}

function clean() {
  if (crypted || decrypted) {
    let output = document.querySelector('.output');
    output.style.display = 'none';
  }
}

copiar();
function copiar() {

  let copiarBtn = document.querySelector('.btnCopy');

  copiarBtn.addEventListener('click', () => {
    let copiar_text = document.querySelector('.output').value;
    navigator.clipboard.writeText(copiar_text);
    
    alert("Texto copiado!");

    document.querySelector('.textArea').value = '';
  });
}