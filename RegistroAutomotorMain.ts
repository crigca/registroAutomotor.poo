import { RegistroAutomotor } from "./RegistroAutomotor";
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

// Crear instancias de RegistroAutomotor y vehículos
const registro = new RegistroAutomotor();

const auto1 = new Auto("Toyota", "Corolla", 2020, "ABC123", 4);
const moto1 = new Moto(2, "Yamaha", "MT-07", 2021, "XYZ456");
const camion1 = new Camion(6, "Mercedes", "Actros", 2019, "LMN789");

// Agregar vehículos al registro
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

// Mostrar vehículos
console.log("Vehículos en el registro:");
console.log(registro.mostrarVehiculos());

// Modificar un vehículo
registro.modificarVehiculo("ABC123", { modelo: "Camry", marca: "Toyota" });
console.log("\nVehículos después de la modificación:");
console.log(registro.mostrarVehiculos());

// Eliminar un vehículo
registro.eliminarVehiculo("XYZ456");
console.log("\nVehículos después de eliminar una moto:");
console.log(registro.mostrarVehiculos());

// Guardar vehículos en el archivo JSON
registro.guardarVehiculos();

// Crear un nuevo registro y cargar vehículos desde el archivo JSON
const nuevoRegistro = new RegistroAutomotor();
nuevoRegistro.cargarVehiculos();
console.log("\nVehículos cargados desde el archivo JSON:");
console.log(nuevoRegistro.mostrarVehiculos());
