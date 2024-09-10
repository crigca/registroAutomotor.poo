export class  Vehiculo {
    protected marca:string;
    protected modelo:string;
    protected fechaFabricacion:number;
    protected patente:string;
    
    constructor(pMarca:string, pModelo:string, pFechaElaboracion:number, pPatente:string){
        this.marca = pMarca;
        this.modelo = pModelo;
        this.fechaFabricacion = pFechaElaboracion;
        this.patente = pPatente;

    }

    getPatente():string{
        return this.patente;
    }
}

