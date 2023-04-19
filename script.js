//Haciendo que la planta 1 de mi documento
//sea arrastable
dragElement(document.getElementById("plant1"));

//Implementando la funcion drag element
function dragElement(terrariumElemet){
    //Creando variables que controlaran las posiciones
    let pos1 =0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
    //Registrar un evento
    terrariumElemet.onpointerdown = ()=>{
        console.log("On pointer down");
    }
    
    function pointerDrag(){
        console.log("+ On pointer down");
    }
}

 