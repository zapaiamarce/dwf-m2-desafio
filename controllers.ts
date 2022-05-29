import { PelisCollection, Peli } from "./models";

class PelisController {
  peliculas:PelisCollection;

  constructor() {
    this.peliculas = new PelisCollection();
    
  }

  //Se comunica con las funciones del models para devolver las peliculas
  get(options?):Promise<any>{
    if(!options){
      return this.peliculas.getAll();

    }else if(options.id){
      
      return this.peliculas.getById(options.id);

    }else if (options.search){
     
     return this.peliculas.search(options.search);
      
    }
    
  }
  // Se comunica con el metodo add del models
  add(peli:Peli){
    return this.peliculas.add(peli);
  }
}


export { PelisController };
