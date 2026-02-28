function sdf() {
     /*botón deja de jalar*/
      const btn = document.getElementById("boton-neon");

btn.addEventListener("click", () => {
  btn.disabled = true;
});
     /*audio*/      
    const audio = document.getElementById("sonido-botton");
    audio.currentTime = 0; // reinicia el sonido
    audio.play();  
    /*vibracion*/
   vibra.classList.add("vibra");
  
    /*pantalla blanca*/ 
    pantalla.classList.add("activa");
    /*redireccionar*/
    setTimeout(() => {
    window.location.href = "1.html";
  }, 5000);
  }
  
  
