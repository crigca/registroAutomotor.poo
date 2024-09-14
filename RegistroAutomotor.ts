import { Vehiculo } from "./Vehiculo";
import * as fs from "fs";

export class RegistroAutomotor {
    private Vehiculos: Vehiculo[] = [];

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.Vehiculos.push(vehiculo);
    }

    buscarVehiculo(patente: string): Vehiculo | undefined {
        return this.Vehiculos.find(v => v.getPatente() === patente);
    }

    modificarVehiculo(patente: string, datosActualizados: Partial<{ modelo: string, fechaFabricacion: number, marca: string, patente: string }>): void {
        let vehiculo = this.buscarVehiculo(patente);
        if (vehiculo) {
            if ('modelo' in datosActualizados && typeof datosActualizados.modelo === 'string') {
                vehiculo.setModelo(datosActualizados.modelo);
            }
            if ('fechaFabricacion' in datosActualizados && typeof datosActualizados.fechaFabricacion === 'number') {
                vehiculo.setFechaFabricacion(datosActualizados.fechaFabricacion);
            }
            if ('marca' in datosActualizados && typeof datosActualizados.marca === 'string') {
                vehiculo.setMarca(datosActualizados.marca);
            }
            if ('patente' in datosActualizados && typeof datosActualizados.patente === 'string') {
                vehiculo.setPatente(datosActualizados.patente);
            }

            this.guardarVehiculos();
        }
    }

    eliminarVehiculo(patente: string): void {
        this.Vehiculos = this.Vehiculos.filter(v => v.getPatente() !== patente);
        this.guardarVehiculos;
    }

    mostrarVehiculos(): string {
        return this.Vehiculos.map(v => JSON.stringify(v.toJSON(), null, 2)).join("\n");
    }

    guardarVehiculos(): void {
        const vehiculosJSON = this.Vehiculos.map(v => v.toJSON());
        fs.writeFileSync("./data.JSON", JSON.stringify(vehiculosJSON, null, 2));
    }

    cargarVehiculos(): void {
        if (fs.existsSync("data.JSON")) {
            const vehiculosGuardados = fs.readFileSync("data.JSON", "utf-8");
            const vehiculosJSON = JSON.parse(vehiculosGuardados);

            this.Vehiculos = vehiculosJSON.map((v: any) => new Vehiculo(v.marca, v.modelo, v.fechaFabricacion, v.patente));
        }
    }
}
