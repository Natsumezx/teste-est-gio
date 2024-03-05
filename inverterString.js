function inverterCacarter(str) {
    let stringInvert = '';
    for(let i = str.length - 1; i >= 0; i--){
        stringInvert += str[i];
    } 
    return stringInvert;
}

//teste
const strOrg = "testando inversão da string";
console.log("originalemnte ela é: " + strOrg);

const strFl = inverterCacarter(strOrg);
console.log("caracteres invertidos: " + strFl)