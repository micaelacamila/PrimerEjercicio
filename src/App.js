const nombre=document.querySelector("#nombre-input");
const edad=document.querySelector("#edad-input")
const genero=document.querySelector("#genero-input")
const hoy = new Date();
const form=document.querySelector("#saludador-form");
form.addEventListener("submit",(event)=>{
    gen="";
    mensaje = "Hola ";
    if((hoy.getHours()>=5)&&(hoy.getHours()<12)) {
        mensaje = mensaje+"buenos días, "
    }
    else{
        if((hoy.getHours()>=12)&&(hoy.getHours()<19)){
            mensaje=mensaje+"buenas tardes, "
        }
        else{
            mensaje=mensaje+"buenas noches, "
        }
    }
    if(edad.value > 30){
        if(genero.value=="Mujer"){
            gen=" señora ";
        }
        else{
            gen=" señor "
        }
    }else{
        if(genero.value=="Mujer"){
            gen=" señorita "
        }
        else{
            gen=" joven "
        }
    }
    alert(mensaje+gen+nombre.value);
});