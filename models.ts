import * as jsonfile from "jsonfile";

// no modificar estas propiedades, agregar todas las que quieras
class Peli {
  id: number;
  title: string;
  tags: string[];
}

class PelisCollection {
  getAll() {
    return jsonfile.readFile("./pelis.json").then((pelis) => {
      return pelis;
    });
  }
  getById(id:number){
    const buscado = this.getAll().then((json)=>
    json.find((peli)=>peli.id == id))
    return buscado
  }
  search(options:any){
    const filtrado = this.getAll().then((pelis=>{
      if(options.tittle && options.tag){
        let resultado = pelis
        
        pelis.forEach(peli=>{
          if(peli.tags.includes(options.tag.toLowerCase())
          )resultado.push(peli)
        })

        return resultado.filter((peli)=>{
          let nombreEnMinus = peli.title.toLowerCase()
          return nombreEnMinus.includes(options.title.toLowerCase())
        })
      }
      if(options.title){
        return pelis.filter((peli)=>{
          let nombreEnMinus = peli.title.toLowerCase()
          return nombreEnMinus.includes(options.title.toLowerCase())
        })
      }
      if(options.tag){
        let resultado =[]
        pelis.forEach(peli=>{
          if(peli.tags.includes(options.tag.toLowerCase())
          )resultado.push(peli)
        })
        return resultado
      }
    }))
    return filtrado
  }
}
export { PelisCollection, Peli };
const pelis = new PelisCollection


// pelis.getAll().then(pelis=>console.log(pelis))
// pelis.getById(2).then(peli=>console.log(peli))
// pelis.search({title:"true",tag:"drama"}).then(a=>console.log(a))