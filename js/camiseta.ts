//Interfaz  
interface CamisetaBase{
    setColor(color);
    getColor();
    //debe cumplirse esto al momento de hacer implements CamisetaBase!! o sino no funcionara
}

//Decorador
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}


//Clase (molde del objeto)
@estampar("Gucci Gang") //como llamar el estampador
 class Camiseta implements CamisetaBase{//llamar igual que el fichero y en mayuscula
    //export para exportar la clase a otro lado
    //Propiedades (caracteristicas del objetos)
    
    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio:number;

    //constructor instancia que cuando crees una clase le asignes valores
    constructor(color,modelo,marca,talla,precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    
    //métodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color; //para poner un atributo cuando un atributo de la clase es privada
        
    }
    public getColor(){
        return this.color; //tiene el atributo rojo, si hacemos objeto.getColor() nos da el contenido
    }
}

//Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

//creo un objeto sudadera el cual es hija de camiseta
var sudadera_nike = new Sudadera("rojo","manga larga","Nike","L",30);
sudadera_nike.setCapucha(true);//le agrego la capucha con el metodo setcapucha
sudadera_nike.setColor( "Gris");//puedo cambiar desde un objeto que es hija cosas del padre
console.log(sudadera_nike);

/*Objeto1
var camiseta=new Camiseta("rojo","manga larga","Nike","L",22);
camiseta.setColor("Rojo");*/ 



/*Objeto 2
var playera=new Camiseta();
playera.setColor("Azul");

console.log(camiseta);*/

var camiseta = new Camiseta("fsd","fasf","fasdf","fasas",22);
console.log(camiseta);
camiseta.estampacion();



