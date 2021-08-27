const nombre=document.querySelector("#nombre-input");

const form=document.querySelector("#saludador-form");
form.addEventListener("submit",(event)=>{
    mensaje = "Hola ";
    alert(mensaje +nombre.value)
});