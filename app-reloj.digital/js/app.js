const mostrarReloj = () =>{ // Se usa una funcuón fleca para prácticar pero también se puede una una function.
    let fecha = new Date();
    let hra = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hra}:${min}:${seg}`;

    const meses = ["Ene", "Feb", "May", "Jun", "Jul", "Ago", "Sep", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let ano = fecha.getFullYear()
    let fechaTexto = `${diaSemana} ${dia} ${mes}, ${ano}`;

    document.getElementById("fecha").innerHTML = fechaTexto;
    document.getElementById("contenedor").classList.toggle("animar");

}

const formatoHora = (hora) => {
    if (hora < 10){
        hora = "0" + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000) //Cantidad de milisengundos en que se va mandar a llamar la función