/* Como definir variables*/
//string
var cadena = "HENRY";
cadena = 12;
//number
var numero = 12;
//Boleano
var verdadero_falso = true;
//any
var cualquiera = "hola";
cualquiera = 77; //no hay error en lso otros casos si
Array;
var lenguajes = ["PHP", "JS", "CSS"]; //puede ser number o any
var years = [12, 13, 14];
//------------let vs var------------
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44; //se queda en el bloque
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
//------------------------------------
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
