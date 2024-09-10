import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo{
    
    private ruedas:number;

    constructor(ruedas:number, marca:string, modelo:string, fechaFabricacion:number, patente:string){
        super(marca,modelo,fechaFabricacion,patente);
        this.ruedas=ruedas;
    }

    

    toString():string{
        return (`La moto: ${this.marca}, ${this.modelo}, ${this.fechaFabricacion} , ${this.patente} con ${this.ruedas}`)
    }

    public get getmarca(): string {
      return this.marca;
    }

    public get getmodelo(): string {
      return this.modelo;
    }

    public get getfechaFabricacion(): number {
      return this.fechaFabricacion;
    }

    public get getpatente(): string {
      return this.patente;
    }

    public get getruedas(): number {
      return this.ruedas;
    }
}