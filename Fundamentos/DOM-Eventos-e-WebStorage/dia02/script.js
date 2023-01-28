const pai = document.getElementById('pai');
pai.innerText = 'Velho Jorge';

const primeiroNome = document.createElement('section');
primeiroNome.innerText = 'José Maria';
primeiroNome.id = 'jose';
pai.appendChild(primeiroNome);

const segundoNome = document.createElement('section');
segundoNome.innerText = 'Paulo';
segundoNome.id = 'paulo';
pai.appendChild(segundoNome);

const terceiroNome = document.createElement('section');
terceiroNome.innerText = 'Fátima';
terceiroNome.id = 'fatima';
pai.appendChild(terceiroNome);

const quartoNome = document.createElement('section');
quartoNome.innerText = 'Sebastião';
quartoNome.id = 'tiao';
pai.appendChild(quartoNome);

const primeiroFilhoSegundoNome = document.createElement('section');
primeiroFilhoSegundoNome.innerText = 'Willian';
primeiroFilhoSegundoNome.id = 'willian';
segundoNome.appendChild(primeiroFilhoSegundoNome);

const segundoFilhoSegundoNome = document.createElement('section');
segundoFilhoSegundoNome.innerText = 'Vinicius';
segundoFilhoSegundoNome.id = 'vini';
segundoNome.appendChild(segundoFilhoSegundoNome);

const terceiroFilhoSegundoNome = document.createElement('section');
terceiroFilhoSegundoNome.id = 'ana';
terceiroFilhoSegundoNome.innerText = 'Ana Paula';
segundoNome.appendChild(terceiroFilhoSegundoNome);

const filhoJose = document.createElement('section');
filhoJose.innerText = 'Bruna';
filhoJose.id = 'bruna';
primeiroNome.appendChild(filhoJose);

const segundoFilhoJose = document.createElement('section');
segundoFilhoJose.innerText = 'Alinne';
segundoFilhoJose.id = 'alinne'
primeiroNome.appendChild(segundoFilhoJose);

const filhoDoFilhoJose = document.createElement('section');
filhoDoFilhoJose.innerText = 'Miguel';
filhoDoFilhoJose.id = 'miguel'
filhoJose.appendChild(filhoDoFilhoJose);

const filhoFatima = document.createElement('section');
filhoFatima.id = 'fran';
filhoFatima.innerText = 'Franciele';
terceiroNome.appendChild(filhoFatima);

const filhoDoFilhoFatima = document.createElement('section');
filhoDoFilhoFatima.id = 'barbara'
filhoDoFilhoFatima.innerText = 'Barbara';
filhoFatima.appendChild(filhoDoFilhoFatima);

const filhoTiao = document.createElement('section');
filhoTiao.id = 'dudu';
filhoTiao.innerText = 'Eduardo';
quartoNome.appendChild(filhoTiao);