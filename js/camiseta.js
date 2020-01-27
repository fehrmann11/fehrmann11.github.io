var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    //constructor instancia que cuando crees una clase le asignes valores
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //métodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color; //para poner un atributo cuando un atributo de la clase es privada
    };
    Camiseta.prototype.getColor = function () {
        return this.color; //tiene el atributo rojo, si hacemos objeto.getColor() nos da el contenido
    };
    Camiseta = __decorate([
        estampar("Gucci Gang") //como llamar el estampador
    ], Camiseta);
    return Camiseta;
}());
//Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
//creo un objeto sudadera el cual es hija de camiseta
var sudadera_nike = new Sudadera("rojo", "manga larga", "Nike", "L", 30);
sudadera_nike.setCapucha(true); //le agrego la capucha con el metodo setcapucha
sudadera_nike.setColor("Gris"); //puedo cambiar desde un objeto que es hija cosas del padre
console.log(sudadera_nike);
/*Objeto1
var camiseta=new Camiseta("rojo","manga larga","Nike","L",22);
camiseta.setColor("Rojo");*/
/*Objeto 2
var playera=new Camiseta();
playera.setColor("Azul");

console.log(camiseta);*/
var camiseta = new Camiseta("fsd", "fasf", "fasdf", "fasas", 22);
console.log(camiseta);
camiseta.estampacion();
