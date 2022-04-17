let numeros  = [];

function validar(){

    let entrada = document.getElementById("numero").value;

    if (entrada.length == 0){ 
       alert("Campo No puede estar vacio!");  	
        
    }else{

        if(/\D/.test(entrada)){
            alert("Solo se permiten numeros");
        }
        else{
            numeros.push(parseInt(entrada));
            alert("Numero Agregado");

        }
    }
}
function procesar(){

let opcion = document.getElementById("opcion").value;


switch (opcion) {
    case '1':
        function comparar ( a, b ){ return b - a; }
        numeros.sort( comparar );
        alert("mayor a menor: "+numeros.reverse());
      break;
    case '2':
       function comparar ( a, b ){ return a - b; }
       alert("menor a mayor: "+numeros.sort( comparar ));
      break;
    case '3':
        let suma = numeros.reduce((a, b) => a + b, 0)
        alert("suma: "+suma)
      break;
    case '4':
        let nuevo = [];
        let dobles = numeros.map(function(x) {
            nuevo.push(x * x);
         });
         alert("nuevo array: "+nuevo);

      break;    
  }
}