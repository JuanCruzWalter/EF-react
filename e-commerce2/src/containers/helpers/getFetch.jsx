const productos = [
    {id:"01", name:"remera", description:"azul - algodon - nike",stock:"10"},
    {id:"02", name:"chomba", description:"roja - pique - polo",stock:"10"},
    {id:"03", name:"camisa", description:"blanca - lino - xyz",stock:"10"},
    {id:"04", name:"pantalon", description:"negro - algodon - nike",stock:"10"}
    ];
  
export const getFetch = new Promise (( resolve , reject )=>{
    let condition = true
    if (condition) { 
      setTimeout(() => {
        resolve(productos)
      }, 5000);
    } else {
      reject ("400 not found")
    }
  
});
  
  
  
  
  