const homePage = document.getElementById('home-page');
const pageCipher = document.getElementById('page-cipher');
const pageDescipher = document.getElementById('page-descipher');
const buttonCipher = document.getElementById('button-cipher');
const buttonDescipher = document.getElementById('button-descipher');
const buttonHome = document.getElementById('btn-home');
const buttonPageHome = document.getElementById('btn-page-home');
const buttonPageDescipher = document.getElementById('btn-page-decode');
const buttonPageEncode = document.getElementById('btn-page-encode');

const clickButtonCipher = () => {
    pageCipher.classList.add('show');
    pageCipher.classList.remove('hide');
    homePage.classList.add('hide');
    homePage.classList.remove('show');
}

const clickbuttonHome = () => {
    homePage.classList.add('show');
    homePage.classList.remove('hide');
    pageCipher.classList.add('hide');
    pageCipher.classList.remove('show');
}

const clickbuttonPageDescipher = () => {
    pageCipher.classList.add('hide');
    pageCipher.classList.remove('show');
    pageDescipher.classList.add('show');
    pageDescipher.classList.remove('hide');
}

const clickButtonDescipher = () => {
    pageDescipher.classList.add('show');
    pageDescipher.classList.remove('hide');
    homePage.classList.add('hide');
    homePage.classList.remove('show');
}

const clickbuttonPageHome = () => {
    homePage.classList.add('show');
    homePage.classList.remove('hide');
    pageDescipher.classList.add('hide');
    pageDescipher.classList.remove('show');
}

const clickbuttonPageEncode = () => {
    pageDescipher.classList.add('hide');
    pageDescipher.classList.remove('show');
    pageCipher.classList.add('show');
    pageCipher.classList.remove('hide');
}
 
const buttonEncode = document.getElementById('btn-encode');
buttonEncode.addEventListener('click', () => {
    const offset = parseInt(document.getElementById('offset').value);
    let enterName = document.getElementById('name-encode').value;
    
    if (!enterName) {
        enterName = '';
    }
    let surnameEncode = document.getElementById('surname-encode').value;
        if (!surnameEncode) {
        surnameEncode = '';
    }
    let cardEncode = document.getElementById('card-encode').value;
        if(!cardEncode){
        cardEncode = '';
    }
    let dateEncode = document.getElementById('date-encode').value;
        if(!dateEncode){
            dateEncode = '';
    }
    let cvvEncode = document.getElementById('cvv-encode').value;
        if (!cvvEncode) {
            cvvEncode = '';
        }
        
    const personObj = {};
    personObj.name = enterName;
    personObj.surname = surnameEncode;
    personObj.card = cardEncode;
    personObj.date = dateEncode;
    personObj.cvv = cvvEncode;
    const myJSON = JSON.stringify(personObj);

    document.getElementById('message-encoded').innerHTML = window.cipher.encode(offset, myJSON);
})

const buttonDecode = document.getElementById('btn-decode');
buttonDecode.addEventListener('click', () => {
    const offset = parseInt(document.getElementById('offset').value);
    const messageEncoded = document.getElementById('message-decode').value;
    const messageDecoded = window.cipher.decode(offset, messageEncoded);
    const newObj = JSON.parse(messageDecoded);

    document.getElementById('name-decoded').value = newObj.name;
    document.getElementById('surname-decoded').value = newObj.surname;
    document.getElementById('card-decoded').value = newObj.card;
    document.getElementById('date-decoded').value = newObj.date;
    document.getElementById('cvv-decoded').value = newObj.cvv;
})
 
buttonHome.addEventListener('click', clickbuttonHome);
buttonDescipher.addEventListener('click', clickButtonDescipher);
buttonPageHome.addEventListener('click', clickbuttonPageHome);
buttonPageDescipher.addEventListener('click', clickbuttonPageDescipher);
buttonCipher.addEventListener('click', clickButtonCipher);
buttonPageEncode.addEventListener('click', clickbuttonPageEncode);
