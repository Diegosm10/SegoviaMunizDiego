class Persona {
    constructor(nombre, apellido, fecha_nacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
    getEdad() {
        let fecha = new Date ();
        let edad = fecha.getFullYear() - this.fecha_nacimiento;
        return edad;
    }
}

let diego = new Persona ("Diego", "Segovia", 2004);
console.log(diego.getEdad());
let edad = diego.getEdad();
