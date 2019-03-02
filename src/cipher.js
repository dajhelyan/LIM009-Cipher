window.cipher = {
  encode : (offset, message) => {
    let messageCipher = '';
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
          encoded = (code - 209 + offset) % 32 + 209;
        } else {
          encoded = code;
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
          const newOffset = offset % 26;
          const jump = (code - 65 - newOffset);
          const positiveJump = 26 + jump;
          decoded = (positiveJump % 26 + 65);
        } else if (code <= 122 && code >= 97) {
          const newOffset = offset % 26;
          const jump = (code - 97 - newOffset);
          const positiveJump = 26 + jump; 
          decoded = (positiveJump % 26 + 97);
        } else if (code >= 48 && code <= 57) {
          const newOffset = offset % 10;
          const jump = (code - 48 - newOffset);
          const positiveJump = 10 + jump;
          decoded = (positiveJump % 10 + 48);
        } else if (code >= 32 && code <= 47) {
          const newOffset = offset % 16;
          const jump = (code - 32 - newOffset);
          const positiveJump = 16 + jump;
          decoded = (positiveJump % 16 + 32);
        } else if (code >= 209 && code <= 241) {
          const newOffset = offset % 32;
          const jump = (code - 209 - newOffset);
          const positiveJump = 32 + jump;
          decoded = (positiveJump % 32 + 209);
        }else {
          decoded = code;
        }
        const messageDecoded = String.fromCharCode(decoded);
        messageDescipher = messageDescipher + messageDecoded;
      }
      return messageDescipher;
   }
}