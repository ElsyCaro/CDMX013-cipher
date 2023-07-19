const cipher = {
  /* validar:(offset)=>{
    let esNumero=true;
   
  if(offset>=48 (0) y offset<=57 (9)){
    }, */
  encode: (offset, frase) => {
    // else {
    // try{
     if (offset <= 0 && typeof frase !== "string" ){
     throw new TypeError(); 
    }
    let fraseNueva = '';
    for (let i = 0; i < frase.length; i += 1) {
      // obtiene el caracter en unicode
      let indiceLetra = frase.charCodeAt(i);


      //console.log (indiceLetra) 
      let resultadoResta = (indiceLetra - 65) + Number(offset)
      let ascii = (resultadoResta % 26) + 65
      let variable = String.fromCharCode(ascii)
      fraseNueva = fraseNueva + variable
      console.log(String.fromCharCode(ascii))

     
    }
    return fraseNueva;
  },

  decode: (offset, frase) => {
  
    if (offset <= 0 && typeof frase !== "string" ){
      throw new TypeError(); 
     }
    let fraseNueva ='';
    for (let i = 0; i < frase.length; i += 1) {
      
      // obtiene el caracter en unicode
      let indiceLetra = frase.charCodeAt(i)

      console.log("indiceLetra", indiceLetra)
      let resultado = (indiceLetra + 65 - offset) % 26 + 65
      fraseNueva += String.fromCharCode(resultado)
    
    

    } return fraseNueva
  }
}
// envía todo lo que esta dentro de cipher
export default cipher;
