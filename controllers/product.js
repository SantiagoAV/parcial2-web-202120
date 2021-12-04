const data = require('../assets/data');

function getProducts(query) {
  const resp = [];
 console.log
  if(query.length !== 'undefined') 
  {
    var nombre;
    data.forEach(product => {
      nombre =product.name.toLowerCase();
      if(nombre.includes(query))
      {
        resp.push(product);
      }
    });
  }
  else
  {
    resp = data;
  }
   

  return resp;
}

module.exports = { getProducts };
