import * as minimist from "minimist";
import { PelisCollection } from "./models";
import {PelisController} from "./controllers"

function parseaParams(argv) {                                          //parcea el process argv para que devuelva un objeto con los parametros que escribamos en la consola
  const resultado = minimist(argv);
  
  
  return resultado
}

function parametros (objeto){

  if (objeto._[0]=="get"){                                              //busca en la lista de la primera propiedad la palabra "get"
  return {id:objeto._[1]}                                               // si el objeto tiene "get", se crea un nuevo objeto cuya propiedad sera id + el segundo valor de la lista 
}
 if (objeto._[0]=="search"){                                            //busca en la lista de la primera propiedad la palabra ""search"
  
  if(objeto.title && objeto.tags){                                      //creamos un objeto con 2 propiedades y que la primera sea title cuyo valor sera la del objeto 
    return{ search: 
      {title:objeto.title,                                              //objeto parceado tags (importante: poner siempre el objeto que tendra mas parametros primero )
      tags:objeto.tags}                                                 //parceado por minimist (en este caso objeto.title), y que la segunda sea tags con el valor del 
      
  } 
}
  if(objeto.tags){                                                      // en el caso que solo contenga tags creamos el objeto con ese solo parametro
    return{search:{tags:objeto.tags}}
  }
  if(objeto.title){                                                      // lo mismo si solo contiene title
    return{search:{title:objeto.title}}
    }
  }

  if (objeto._[0]=="add"){
    return{
      id:objeto.id,
      title:objeto.title,
      tags:objeto.tags
    }
  }
}




function main() {
  const params = parseaParams(process.argv.slice(2));
  const objetos = parametros(params)
// const controles = new PelisController

//controles.get(objetos).then((resultado)=>{
  //console.log(resultado)
//})  
console.log(objetos)
}

main();
