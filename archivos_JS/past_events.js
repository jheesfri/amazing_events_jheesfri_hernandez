//Url de datos API
const urlEventos = "https://aulamindhub.github.io/amazing-api/events.json"

//Funciones Importadas
import { pintarTarjeta, pintarCheckbox, FiltroTextoYCheckbox } from "../modulo/modulo.js"

//consumo data de la API
fetch(urlEventos)
    .then(Response => Response.json())
    .then(data => {

        //filtro los eventos del pasado
        let pastEvents = data.events.filter(evento => evento.date < "2023-01-01")

        //pinto los eventos
        let div_padre_past_events = document.getElementById("cont_cards")
        pintarTarjeta(div_padre_past_events, pastEvents)

        //Pinto Los Checkbox sin repetir categoriias de los eventos
        let categorys = [... new Set(pastEvents.map(evento => evento.category))]
        let contenedorInputs = document.getElementById('contenedorInputs')
        pintarCheckbox(categorys, contenedorInputs)

        //Filtros de Texto Y checkbox 
        let inputText = document.getElementById('inputText')
        let filtroPorCheck = []

        inputText.addEventListener('keyup', (e) => {
            FiltroTextoYCheckbox(pastEvents, filtroPorCheck, div_padre_past_events)
        })
        contenedorInputs.addEventListener('change', () => {
            FiltroTextoYCheckbox(pastEvents, filtroPorCheck, div_padre_past_events)
        })
    })