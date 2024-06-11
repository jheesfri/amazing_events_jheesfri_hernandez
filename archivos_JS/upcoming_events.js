//Url de datos API
const urlEventos = "https://aulamindhub.github.io/amazing-api/events.json"

//Funciones Importadas
import { pintarTarjeta, pintarCheckbox, FiltroTextoYCheckbox } from "../modulo/modulo.js"

//consumo data de la API
fetch(urlEventos)
    .then(Response => Response.json())
    .then(data => {
        //filtro los eventos del futuro
        let upcomingEvents = data.events.filter(evento => evento.date > data.currentDate)

        //COntenedor Padre donde se van a pintar las tarjetas
        let div_padre_upcoming_events = document.getElementById("cont_cards")

        //pinto los eventos
        pintarTarjeta(div_padre_upcoming_events, upcomingEvents)

        //Pinto Los Checkbox sin repetir categoriias de los eventos
        let categorys = [... new Set(upcomingEvents.map(evento => evento.category))]
        let contenedorInputs = document.getElementById('contenedorInputs')
        pintarCheckbox(categorys, contenedorInputs)

        //Filtros de Texto Y checkbox 
        let inputText = document.getElementById('inputText')
        let filtroPorCheck = []

        inputText.addEventListener('keyup', (e) => {
            FiltroTextoYCheckbox(upcomingEvents, filtroPorCheck, div_padre_upcoming_events)
        })
        contenedorInputs.addEventListener('change', () => {
            FiltroTextoYCheckbox(upcomingEvents, filtroPorCheck, div_padre_upcoming_events)
        })
    })