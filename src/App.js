const nombre=document.querySelector("#nombre-input");
const edad=document.querySelector("#edad-input")
const genero=document.querySelector("#genero-input")
const form=document.querySelector("#saludador-form");
form.addEventListener("submit",(event)=>{
    gen="";
    mensaje = "Hola ";
    if(edad.value > 30){
        if(genero.value=="Mujer"){
            gen="señora ";
        }
        else{
            gen="señor "
        }
    }else{
        if(genero.value=="Mujer"){
            gen="señorita "
        }
        else{
            gen="joven "
        }
    }
    alert(mensaje +gen+nombre.value);
});