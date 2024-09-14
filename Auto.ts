import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo{
    private ruedas:number;

    constructor(marca:string, modelo:string,fechaFabricacion:number, patente:string, ruedas: number) {
        super(marca, modelo,fechaFabricacion, patente);
        this.ruedas = ruedas;
    }
    public toJSON(): object {
      return {
          ...super.toJSON(),
          ruedas: this.ruedas,
          tipo: 'Auto'
      };
  }
    public toString():string{
        return `El auto: ${this.marca}, ${this.modelo}, ${this.fechaFabricacion}, ${this.patente} con ${this.ruedas}`
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
