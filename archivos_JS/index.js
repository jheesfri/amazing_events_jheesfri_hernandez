//Url de datos API
const urlEventos = "https://aulamindhub.github.io/amazing-api/events.json"

//Funciones Importadas
import { FiltroTextoYCheckbox, pintarTarjeta, pintarCheckbox } from "../modulo/modulo.js"

//consumo data de la API
fetch(urlEventos)
  .then(Response => Response.json())
  .then(data => {
    //COntenedor Padre donde se van a pintar las tarjetas
    let div_padre_home = document.getElementById("cont_cards")

    //pinto las tarjetas de los eventos en general
    pintarTarjeta(div_padre_home, data.events)
    
    //Pinto Los Checkbox sin repetir categoriias de los eventos
    let categorys = [... new Set(data.events.map(evento => evento.category))]
    let contenedorInputs = document.getElementById('contenedorInputs')
    pintarCheckbox(categorys, contenedorInputs)

    //Filtros de Texto Y checkbox 
    let inputText = document.getElementById('inputText')
    let filtroPorCheck = []
    
    inputText.addEventListener('keyup', (e) => {
      FiltroTextoYCheckbox(data.events, filtroPorCheck, div_padre_home)
    })
    contenedorInputs.addEventListener('change', () => {
      FiltroTextoYCheckbox(data.events, filtroPorCheck, div_padre_home)
    })
  })