import * as rls from "readline-sync";
import * as fs from "fs";
import { Vehiculo } from "./Vehiculo.ts"
import { Auto } from "./Auto.ts"
import { Moto } from "./Moto.ts"
import { Camion } from "./Camion.ts"
import { RegistroAutomotor } from "./Registro.ts"




const registro = new RegistroAutomotor();
const archivoJSON = './data.json';

let testCamion = new Camion(4, "Lambo", "Test", 2010, "KJ120")

const archivoJSON = './data.json';
const data = fs.readFileSync(archivoJSON, "utf-8");
let vehiculos = JSON.parse(data);

vehiculos.push({
    tipo: "Camion",
    marca: 
})





//Funcion para agregar vehiculos
registro.agregarVehiculo(testCamion)
console.log(registro.mostrarVehiculos())
export { RegistroAutomotor }

