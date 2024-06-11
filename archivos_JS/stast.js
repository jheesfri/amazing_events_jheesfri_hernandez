//Url de datos API
const urlEventos = "https://aulamindhub.github.io/amazing-api/events.json"

//consumo data de la API
fetch(urlEventos)
    .then(Response => Response.json())
    .then(data => {
        //filtro los eventos que tengas la propiedad asistencia 
        let asistenciaMayor = data.events.filter(evento => evento.assistance)
        //creo una copia del mismo array y le agrego la propiedad: porcentajeAsistencia
        let asistenciaMayor2 = asistenciaMayor.map(evento => {
            let porcentajeAsistencia = (evento.assistance / evento.capacity) * 100
            return {
                ...evento,
                porcentajeAsistencia: porcentajeAsistencia.toFixed(2)
            }
        })
        //creo un nuevo array con los porcentajes de cada evento 
        let porcentaje = asistenciaMayor2.map(evento => evento.porcentajeAsistencia)

        //EVENTO CON MAYOR PORCENTAJE DE AISSTENCIA

        //guardo el porcentaje mayor en una variable para luego hacer el filtro y tarer el evento que coincida segun el porcentaje de asistencia
        let porcentajeMayor = Math.max(...porcentaje)
        //filtro el evento con mayor porcentaje de asistencia 
        let eventoMayor = asistenciaMayor2.filter(evento => evento.porcentajeAsistencia == porcentajeMayor)
        //recorro el array para pintar los datos en su campo
        eventoMayor.forEach(event => {
            let mayorAsistencia = document.getElementById("mayor%")
            //ingreso los datos en el campo "mayor%"
            mayorAsistencia.innerHTML = `${event.name}   ${event.porcentajeAsistencia} %`
        })


        //EVENTO CON MENOR PORCENTAJE DE AISSTENCIA
        let porcentajeMenor = Math.min(...porcentaje)
        //filtro el evento con menor porcentaje de asistencia 
        let eventoMenor = asistenciaMayor2.filter(evento => evento.porcentajeAsistencia == porcentajeMenor)
        //recorro el array para pintar los datos en su campo
        eventoMenor.forEach(event => {
            let menorAsistencia = document.getElementById("menor%")
            //ingreso los datos en el campo "menor%"
            menorAsistencia.innerHTML = `${event.name}   ${event.porcentajeAsistencia} %`
        })
        //eventocon mayor aforo

        let mayorAforo = data.events.map(event => event.capacity)
        mayorAforo = Math.max(...mayorAforo)
        //filtro el evento con mayor capacidad
        let evento = data.events.filter(evento => evento.capacity == mayorAforo)
        //recorro el array para pintar los datos en su campo
        evento.forEach(event => {
            let mayorAforo = document.getElementById("mayorAforo")
            //ingreso los datos en el campo "mayorAforo"
            mayorAforo.innerHTML = `${event.name} (${event.capacity})`
        })
        // 2da tabla
        //categorias
        //filtro los eventos del futuro
        let upcomingEvents = data.events.filter(evento => evento.date > data.currentDate)
        //filtro las categorias de los eventos futuros
        let categorys = [... new Set(upcomingEvents.map(evento => evento.category))]
        let tabla2 = document.getElementById("tableBody2")
        //recorro el array y pinto la categoria estimados y porsentaje de asistencia en su contenedor "td"
        categorys.forEach(categoria => {
            //creo un elemento "tr" donde va ir sus hijos "td"
            let tr = document.createElement("tr")
            tr.id = categoria
            //filtro los eventos segun cada categoria (osea Un Filtro Dentro De Un forEach)
            let eventos = upcomingEvents.filter(evento => evento.category == categoria)
            //creo un nuevo array donde guardo el precio estimado a ganar por cada evento segun su categoria 
            let total = eventos.map(evento => {
                let event = evento.estimate * evento.price
                return event
            })
            //sumo todos los numero que hay en el array y queda un solo valor con 2 numeros despues de la coma
            total = total.reduce((sum, index) => sum + index, 0)
            //creo un nuevo array donde guardo el porcentaje de cada evento segun su categoria
            let porcentaje = eventos.map(evento => {
                let totalPorcentaje = (evento.estimate / evento.capacity) * 100
                return totalPorcentaje
            })
            //sumo todos los numero que hay en el array y queda un solo valor con 2 numeros despues de la coma
            porcentaje = porcentaje.reduce((sum, num) => sum + num, 0)
            //ingreso los datos de cada categoria 
            tr.innerHTML = `
            <td>${categoria}</td>
            <td>$ ${total}</td>
            <td>${parseInt(porcentaje / eventos.length).toFixed(2)} %</td>
            `
            tabla2.appendChild(tr)
        })

        // 3ra tabla
        //categorias
        //filtro los eventos del futuro
        let pastEvents = data.events.filter(evento => evento.date < data.currentDate)

        let tabla3 = document.getElementById("tableBody3")
        //recorro el array y pinto la categoria estimados y porsentaje de asistencia en su contenedor "td"
        categorys.forEach(categoria => {
            //creo un elemento "tr" donde va ir sus hijos "td"
            let tr = document.createElement("tr")
            tr.id = categoria
            //filtro los eventos segun cada categoria (osea Un Filtro Dentro De Un forEach)
            let eventos = pastEvents.filter(evento => evento.category == categoria)
            //creo un nuevo array donde guardo el precio estimado a ganar por cada evento segun su categoria 
            let total = eventos.map(evento => {
                let event = evento.assistance * evento.price
                return event
            })
            //sumo todos los numero que hay en el array y queda un solo valor con 2 numeros despues de la coma
            total = total.reduce((sum, index) => sum + index, 0)
            //creo un nuevo array donde guardo el porcentaje de cada evento segun su categoria
            let porcentaje = eventos.map(evento => {
                let totalPorcentaje = (evento.assistance / evento.capacity) * 100
                return totalPorcentaje
            })
            //sumo todos los numero que hay en el array y queda un solo valor con 2 numeros despues de la coma
            porcentaje = porcentaje.reduce((sum, num) => sum + num, 0)                  
            //ingreso los datos de cada categoria 
            tr.innerHTML = `
            <td>${categoria}</td>
            <td>$ ${total}</td>
            <td>${parseInt(porcentaje / eventos.length).toFixed(2)} %</td>
            `
            tabla3.appendChild(tr)
        })
    })