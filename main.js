function Capturar(){
    
    function Persona(nombre,gasto){
        this.nombre=nombre;
        this.gasto=gasto;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    // console.log(nombreCapturar);
    var gastoCapturar = document.getElementById("gasto").value;
    // console.log(gastoCapturar);

    nuevaPersona = new Persona(nombreCapturar,gastoCapturar);
    console.log(nuevaPersona);
    agregar();
}

var Datos =[];
var datosGastos=[]
function agregar(){
    Datos.push(nuevaPersona);
    console.log(Datos)
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaPersona.nombre+'</td><td>'+ "$" + nuevaPersona.gasto+'</td></tbody> '
function suma(){
    datosGastos.push(nuevaPersona[i])
    console.log(datosGastos)
}

};


