window.cipher = {
  encode : (offset, message) => {
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
        } else if (code >= 209 && code <= 241){
          encoded = (code - 209 && + offset) % 32 + 242;
        }
        const messageEncode = String.fromCharCode(encoded);
        messageCipher = messageCipher + messageEncode;
      }
      return messageCipher;
  },

  decode : (offset, message) => {
    let messageDescipher = '';
      for(let i = 0; i < message.length; i++){
        const code = message.charCodeAt(i);
        let decoded;
        if (code <= 91 && code >= 65) {
          decoded = (code + 65 - offset) % 26 + 65;
        } else if (code <= 122 && code >= 97) {
          decoded = (code + 97 - offset) % 26 + 97;
        } else if (code >= 48 && code <= 57) {
          decoded = (code + 48 - offset) % 10 + 48;
        } else if (code >= 32 && code <= 47) {
          decoded = (code + 32 - offset) % 16 + 32;
        } else if (code >= 209 && code <= 241) {
          decoded = (code + 209 +offset) % 32 +209;
        }
        const messageDecoded = String.fromCharCode(decoded);
        messageDescipher = messageDescipher + messageDecoded;
      }
      return messageDescipher;
   },
} ;