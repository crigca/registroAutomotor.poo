export class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected fechaFabricacion: number;
    protected patente: string;

    constructor(pMarca: string, pModelo: string, pFechaFabricacion: number, pPatente: string) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.fechaFabricacion = pFechaFabricacion;
        this.patente = pPatente;
    }

    public getPatente(): string {
        return this.patente;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getFechaFabricacion(): number {
        return this.fechaFabricacion;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public setFechaFabricacion(fecha: number): void {
        this.fechaFabricacion = fecha;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public toJSON(): object {
        return {
            marca: this.marca,
            modelo: this.modelo,
            fechaFabricacion: this.fechaFabricacion,
            patente: this.patente
        };
    }
}
