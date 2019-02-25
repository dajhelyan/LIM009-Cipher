window.cipher = {
  encode : ( offset, message) => {
    let messageCipher = '';
    // console.log(message);
      for(let i=0; i < message.length; i++){
        const code = message.charCodeAt(i);
        let encoded;
        if (code >= 65 && code <= 91) {
          encoded = (code - 65 + offset) % 26 + 65;
        } else if (code >= 97 && code <= 122){
          encoded = (code - 97 + offset) % 26 + 97;
        } else if (code  >=  48 && code <= 57){ 
          encoded = (code - 48 + offset) % 10 + 48;
        } else if (code  >=  32 && code <= 47){
          encoded = (code - 32 + offset) % 16 + 32;
        } //Aelse {
        //   encoded = (code - 209 && + offset) % 32 + 242;
        // }
        const messageEncode = String.fromCharCode(encoded);
        messageCipher = messageCipher + messageEncode;
      }
      return messageCipher;
  },

  decode: () => {
    /* Acá va tu código */
  }
};


'1' !== 1