/* corazones flotando */
function crearCorazon(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="💗";

    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(Math.random()*20+10)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}
setInterval(crearCorazon,500);

/* galeria ampliada */
function ampliarImagen(src){
    const modal=document.getElementById("modal");
    const modalImg=document.getElementById("imgGrande");
    modal.style.display="block";
    modalImg.src=src;
}

function cerrarImagen(){
    document.getElementById("modal").style.display="none";
}

/* efecto escritura en carta final */
function escribirTexto(){
    let texto="Hoy celebramos tu vida, tu sonrisa y lo especial que eres para mí. Gracias por existir y por llenar el mundo de alegría. Feliz cumpleaños 💗";
    let i=0;

    function escribir(){
        if(i<texto.length){
            document.getElementById("carta").innerHTML+=texto.charAt(i);
            i++;
            setTimeout(escribir,40);
        }
    }

    escribir();
}
/* GLOBOS EMOJI */

function crearGlobo(){

const globo=document.createElement("div");

globo.classList.add("balloon-emoji");

globo.innerHTML="🎈";

globo.style.left=Math.random()*100+"%";

globo.style.animationDuration=(Math.random()*4+6)+"s";

document.body.appendChild(globo);

setTimeout(()=>{
globo.remove();
},10000);

}

setInterval(crearGlobo,800);
