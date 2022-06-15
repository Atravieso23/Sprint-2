

function Capturar(){
    
    function Persona(nombre,gasto){
        this.nombre=nombre;
        this.gasto=gasto;
    }
    
    let nombreCapturar = document.getElementById("nombre").value;
    let gastoCapturar = document.getElementById("gasto").value;
    
    if (nombreCapturar == "" || gastoCapturar=="" ){ alert("Rellene ambos campos")} 
    else if (gastoCapturar<0){alert("Ingresar valores positivos")}
    
    if (nombreCapturar != "" && gastoCapturar != "" && gastoCapturar>=0){ 
        nuevaPersona = new Persona(nombreCapturar,gastoCapturar);
        agregar();
        pagar();
    }
     
}

let Datos =[];
let Personas=0
let Total=0
let Pagar=0

function agregar(){
    
    Datos.push(nuevaPersona);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaPersona.nombre+'</td><td>'+ "$" + nuevaPersona.gasto+'</td></tbody> '   
}

function pagar(){
    Total+=Number(nuevaPersona.gasto)
    Personas+=1
    Pagar=Total/Personas
    document.getElementById("Total").innerHTML= "Total: $" + Total 
    document.getElementById("Pagar").innerHTML= "A cada uno le toca aportar: $ " + Pagar.toFixed(2) 

}   


