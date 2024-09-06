
let inicioSesion = document.querySelector('.btn');

inicioSesion.addEventListener('click', function(evento){
    evento.target.closest('.btn');
    inicioSesion.innerText = "Cerrar sesion"
});

let agrega = document.querySelector('.btn3');

agrega.addEventListener('click', function(evento){
    evento.target.closest('.btn3').remove();
});


let meGusta = document.querySelector('.btn2')

meGusta.addEventListener('click', function(){
    alert("Gato atigrado was liked")
    let botonLike = document.querySelector('.unlike')
    let aumentaLike = Number(botonLike.innerText);
    aumentaLike ++;
    botonLike.innerText = aumentaLike
    })

let meGusta2 = document.querySelector('.btn2_1')

meGusta2.addEventListener('click', function(){
    alert("Golden Retriver was liked")
    let botonLike2 = document.querySelector('.unlike2')
    let aumentaLike2 = Number(botonLike2.innerText);
    aumentaLike2 ++;
    botonLike2.innerText = aumentaLike2
    })


/*
function cargarInformacion(elemento, ciudad){
    let elementoMain = document.querySelector('main');*/
