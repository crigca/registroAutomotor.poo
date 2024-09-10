import { RegistroAutomotor } from "./Registro";
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

// Crear una instancia de RegistroAutomotor
const registro = new RegistroAutomotor();

// Crear vehículos
const auto1 = new Auto("Toyota", "Corolla", 2020, "AAA111", 4);
const moto1 = new Moto(2, "Yamaha", "YZF-R3", 2019, "BBB222");
const camion1 = new Camion(6, "Scania", "R500", 2021, "CCC333");

// Agregar vehículos al registro
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

// Mostrar todos los vehículos registrados
console.log("Vehículos registrados:");
console.log(registro.mostrarVehiculos());

// Buscar un vehículo por patente
const busqueda = registro.buscarVehiculo("BBB222");
if (busqueda) {
    console.log("\nVehículo encontrado:");
    console.log(busqueda.toString());
} else {
    console.log("\nVehículo no encontrado");
}

// Modificar un vehículo existente
console.log("\nModificando el vehículo con patente 'AAA111'...");
registro.modificarVehiculo("AAA111", { modelo: "Camry", fechaFabricacion: 2022 });

// Mostrar los vehículos después de la modificación
console.log("\nVehículos actualizados:");
console.log(registro.mostrarVehiculos());

// Eliminar un vehículo
console.log("\nEliminando el vehículo con patente 'CCC333'...");
registro.eliminarVehiculo("CCC333");

// Mostrar los vehículos restantes después de la eliminación
console.log("\nVehículos restantes:");
console.log(registro.mostrarVehiculos());

registro.guardarVehiculos();

//cargar los vehiculos guardados
