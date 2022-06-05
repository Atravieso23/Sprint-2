

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

let Datos =[];
let Personas=0
let Total=0
let Pagar=0

function agregar(){
    
    Datos.push(nuevaPersona);
    console.log(Datos)
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaPersona.nombre+'</td><td>'+ "$" + nuevaPersona.gasto+'</td></tbody> '
    Total+=Number(nuevaPersona.gasto)
    Personas+=1
    // console.log(Total)
    // console.log(Personas)
    Pagar=Total/Personas
    // console.log(Pagar)
    document.getElementById("Total").innerHTML= "Total: $" + Total 
    document.getElementById("Pagar").innerHTML= "A cada uno le toca aportar: $ " + Pagar 

}


