const cipher = {
  encode: function (offset, string) {

    //Variavel que vai estar texto do textarea
    let textEncode = "";

    //Condição pra caso string ser vazia e offset ser vazio retornar erro;
    if (string == "" || string == null || offset == "" || offset == null) {
      throw new
        TypeError("Argumentos inválidos", "cipher.js", 16);
    }
    //Criando loop de repetição
    for (let i = 0; i < string.length; i++) {
      // Variavel que pega código ASC
      let codeValue = string[i].charCodeAt();
      //Condição para pegar o número da letra ASC e somar com o deslocamento
      if (codeValue >= 65 && codeValue <= 90) {
        // Variavel pra mostrar novo código com a formula da cifra
        let caracterCode = ((codeValue - 65 + offset) % 26) + 65;
        // Variavel do resultado do texto cifrado
        textEncode += String.fromCharCode(caracterCode);
      }
      else if (codeValue >= 97 && codeValue <= 122) {
        let caracterCode = ((codeValue - 97 + offset) % 26) + 97;
        textEncode += String.fromCharCode(caracterCode);
      }
      else if (codeValue >= 34 && codeValue <= 63) {
        let caracterCode = ((codeValue - 34 + offset) % 26) + 34;
        textEncode += String.fromCharCode(caracterCode);
      }
      else {
        textEncode += string[i];
      }
    }
    return textEncode;
  },

  decode: function (offset, string) {
    let textDecode = "";

    if (string == "" || string == null || offset == "" || offset == null) {
      throw new
        TypeError("Argumentos inválidos", "cipher.js", 16);
    }
    for (let i = 0; i < string.length; i++) {
      let decodeValue = string[i].charCodeAt();
      if (decodeValue >= 65 && decodeValue <= 90) {
        let caracterDecode = 90 - ((90 - decodeValue + offset) % 26);
        textDecode += String.fromCharCode(caracterDecode);
      }
      else if (decodeValue >= 97 && decodeValue <= 122) {
        let caracterDecode = 122 - ((122 - decodeValue + offset) % 26);
        textDecode += String.fromCharCode(caracterDecode);
      }
      else if (decodeValue >= 34 && decodeValue <= 63) {
        let caracterDecode = 34 - ((34 - decodeValue + offset) % 26);
        textDecode += String.fromCharCode(caracterDecode);
      }
      else {
        textDecode += string[i];
      }
    }
    return textDecode;
  }
}
export default cipher