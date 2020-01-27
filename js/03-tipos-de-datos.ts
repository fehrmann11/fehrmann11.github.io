
/*Como definir un tipo de variable */
type alphanumerico = string | number;


/* Como definir variables*/ 
//string

let cadena : alphanumerico = "HENRY";

cadena =12;

//number
let numero: number = 12;

//Boleano
let verdadero_falso: boolean = true;

//any
let cualquiera: any = "hola";

cualquiera = 77;//no hay error en lso otros casos si

Array
var lenguajes: Array<string> = ["PHP","JS","CSS"];//puede ser number o any

let  years: number[] = [12,13,14];


//------------let vs var------------

var numero1 = 10;
var numero2 = 12;
if(numero1==10){
    let numero1 = 44;//se queda en el bloque
    var numero2 = 55;
    console.log(numero1,numero2);
}
console.log(numero1,numero2);
//------------------------------------



console.log(cadena, numero,verdadero_falso,cualquiera,lenguajes,years);