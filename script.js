let apikey = '82e46482b013a7e4a7a16e1f91d9476f'
let urlbase = 'https://api.openweathermap.org/data/2.5/weather'
let ciudad = "Londres"
let difkelvin = 273.15


document.getElementById("botonBusqueda").addEventListener("click", () => {
    let ciudad = document.getElementById("ciudadEntrada").value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlbase}?q=${ciudad}&appid=${apikey}`)
        .then(data => data.json())
        .then(data => Datosciudad(data))
}


function Datosciudad(data) {

    const datosclima = document.getElementById("datosClima")
    datosclima.innerHTML=""
    let ciudad = data.name
let descripcion= data.weather[0].description

let icono=data.weather[0].icon
let temperatura =data.main.temp
let humedad =data.main.humidity


let nombreCiudad=document.createElement("h2")
nombreCiudad.textContent=ciudad

let descripcionClima =document.createElement("p")
descripcionClima.textContent= `El clima actual es: ${descripcion}`

let temperaturaClima= document.createElement("p")
temperaturaClima.textContent=`La temperatura actual es: ${Math.floor(temperatura-difkelvin)} °C`

let iconotemperatura=document.createElement("img")
iconotemperatura.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

let humedadCiudad= document.createElement("p")
humedadCiudad.textContent=`La humedad actual es: ${humedad}`


datosclima.appendChild(nombreCiudad)
datosclima.appendChild(descripcionClima)
datosclima.appendChild(iconotemperatura)
datosclima.appendChild(temperaturaClima)
datosclima.appendChild(humedadCiudad)

}