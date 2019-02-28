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
    // let data = enterName + surnameEncode + cardEncode + dateEncode + cvvEncode;

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

// const buttonDecode = document.getElementById('btn-decode');
// buttonDecode.addEventListener('click', () => {
//     const 
// })

// const clickButtonCipher = () => {
//     cipher.classList.add('show');
//     cipher.classList.remove('hide');
//     home.classList.remove('hide';
//     home.classList.add('show');
// }

// const clickButtonDescipher = () => {
//     descipher.classList.add('hide');
//     descipher.classList.remove('show');
//     home.classList.add('hide');
//     home.classList.remove('show');
// }

// const clickButtonStart = () => {
//     home.classList.add('show');
//     home.classList.remove('hide');
//     cipher.classList.remove('hide');
//     cipher.classList.add('show');
// }


// const msg = () => {
//     document.getElementById('encode').value;
//     document.getElementById('msg');
//     console.log(msg);
// }

// console.log('message');

// }

 

// buttonCipher.addEventListener('click', clickButtonCipher);
//buttonDescipher.addEventListener('click', clickButtonDescipher);
//clickButtonStart.addEventListener('click', clickButtonStart);
//clickButtonEncode.addEventListener('click', clickButtonEncode);