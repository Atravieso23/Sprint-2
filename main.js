

function Capturar(){
    
    function Persona(nombre,gasto){
        this.nombre=nombre;
        this.gasto=gasto;
    }
    
    let nombreCapturar = document.getElementById("nombre").value;
    // console.log(nombreCapturar);
    let gastoCapturar = document.getElementById("gasto").value;
    // console.log(gastoCapturar);

    nuevaPersona = new Persona(nombreCapturar,gastoCapturar);
    // console.log(nuevaPersona);
    agregar();
    
    
}

var Datos =[];
var Personas=0
Total=0

function agregar(){
    
    Datos.push(nuevaPersona);
    console.log(Datos)
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaPersona.nombre+'</td><td>'+ "$" + nuevaPersona.gasto+'</td></tbody> '
    Total+= Number(nuevaPersona.gasto)
    Personas+=1
    console.log(Total)
    console.log(Personas)

}


