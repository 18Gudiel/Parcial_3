let tablaPaises=document.getElementById("descripcionPaises");

function obtenerData(){
    obtenerDatospais()
    .then(info => info.json())
    .then(posts =>{ mostraDatospais(posts)});

}

function obtenerDatospais(){
    return fetch('https://restcountries.com/v3.1/all');
}
function mostraDatospais(datos){
    datos.map((datos,contador)=>{
        let fila=document.createElement("tr");
        let banderaPais=document.createElement("td");
        let nombrePais=document.createElement("td");
        let nnativoPais=document.createElement("td");
        let capitalPais=document.createElement("td");
        let regionPais=document.createElement("td");
        let idiomaPais=document.createElement("td");
        let coordenadasPais=document.createElement("td");
        let monedaPais=document.createElement("td");
        
        banderaPais.src=datos.flags.png;
        //aqui podria dar dimensiones//
        nombrePais.innerHTML=datos.name.common;
        nnativoPais.innerHTML=datos.name.nativeName;
        capitalPais.innerHTML=datos.capital;
        regionPais.innerHTML=datos.region;
        idiomaPais.innerHTML=datos.languages;
        coordenadasPais.innerHTML=datos.maps.googleMaps;
        monedaPais.innerHTML=datos.currencies;

        tablaPaises.appendChild(fila);
        fila.appendChild(nnativoPais);
        fila.appendChild(capitalPais);
        fila.appendChild(regionPais);
        fila.appendChild(idiomaPais);
        fila.appendChild(coordenadasPais);
        fila.appendChild(monedaPais);
        


        
    });
}