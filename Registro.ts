import { Vehiculo } from "./Vehiculo"
import * as fs from "fs"

export class RegistroAutomotor{
    private Vehiculos: Vehiculo[] = [];

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.Vehiculos.push(vehiculo);
    }

    buscarVehiculo(patente: string): Vehiculo | undefined {
        return this.Vehiculos.find(v => v.getPatente() === patente);
    }

    //modificar el vehiculo completo!!
    modificarVehiculo(patente: string, datosActualizados: Partial<Vehiculo>): void {
        let vehiculo = this.buscarVehiculo(patente);
        if (vehiculo) {
            Object.assign(vehiculo, datosActualizados);
        }
        this.guardarVehiculos();
    }

    eliminarVehiculo(patente: string): void {
        this.Vehiculos = this.Vehiculos.filter(v => v.getPatente() !== patente);
    }

    mostrarVehiculos(): string {
        return this.Vehiculos.map(v => v.toString()).join("\n");
    }

    guardarVehiculos():void{
        fs.writeFileSync("./data.JSON",JSON.stringify(this.Vehiculos))
    }

    cargarVehiculos(): void {
        const vehiculosGuardados = fs.readFileSync("data.JSON", "utf-8");
        const vehiculosJSON = JSON.parse(vehiculosGuardados);
    
        // Mapear los datos a instancias de Vehiculo y agregarlas al registro
        const vehiculosCargados = vehiculosJSON.map((v: any) => new Vehiculo(v.marca, v.modelo, v.fechaFabricacion, v.patente));
    
        this.Vehiculos.push(...vehiculosCargados);
    }
    
}
