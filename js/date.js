function FechayHora(){
    myDate = new Date();
    fecha = myDate.toLocaleString();

    document.getElementById('FechayHora').innerHTML=fecha;
    console.log(fecha);
}

FechayHora();




