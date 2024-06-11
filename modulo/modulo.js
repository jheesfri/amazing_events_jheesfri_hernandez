//------------Variables------------//
export let urlDetails = "http://127.0.0.1:5501/details.html"
const urlDataEvents = "https://aulamindhub.github.io/amazing-api/events.json"
function eventos(urlfetch) {
    fetch(urlfetch)
    .then(response => response.json())
    .then(data => {
        return data
    })
}


//------------Funciones------------//
export function pintarTarjeta(contenedor, array) {
    contenedor.innerHTML = ""
    array.forEach(element => {
        let divHijo = document.createElement("div")
        divHijo.classList.add("card", "my-2", "py-2", "px-2")
        divHijo.style = "width: 18rem; height: 23rem;"
        divHijo.innerHTML = `
      <img src = "${element.image}" class="card-img-top" alt = "museum">
        <div class="card-body">
          <div class="row cont1_vis_nieto">
           <h5 class="card-title">${element.name}</h5>
           <p class="card-text">${element.description.slice(0,80)}</p>
          </div>
          <div class="row d-flex justify-content-center align-items-end cont2_vis_nieto">
            <p class="col-6 d-flex justify-content-center my-2">${element.price}</p>
            <a href="${urlDetails + "?value=" + element._id}" class="col-6 btn btn-primary">Details</a>
          </div>
        </div>`
        contenedor.appendChild(divHijo)

    });
}
export function pintarCheckbox(array, contenedor) {
    array.forEach((category) => {
        let divHijo = document.createElement('div')
        divHijo.classList.add('input-group-text')
        divHijo.innerHTML = `<input class="btn_checkbox" type="checkbox" id="${category.replace(/\s/g, "").toLowerCase()}" name="${category}" value="${category}">
      <label for="${category.replace(/\s/g, "").toLowerCase()}"class="fs-6">${category}</label>
      `
        contenedor.appendChild(divHijo)
    })

}
export function filtrarTexto(texto, array) {
    return array.filter(evento => evento.name.toLocaleLowerCase().includes(texto.toLocaleLowerCase()) || evento.description.toLocaleLowerCase().includes(texto.toLocaleLowerCase()))
}
export function FiltroTextoYCheckbox(arrayOriginal, arrayFiltro,contenedor) {
    let texto = inputText.value
     let checkboxcheck = document.querySelectorAll('input[type=checkbox]:checked')
     arrayFiltro = arrayOriginal.filter(evento => {
       for (let i = 0; i < checkboxcheck.length; i++) {
         if (checkboxcheck[i].value == evento.category) {   
           return evento
         }
       }
     })
     let arrayFiltro2 = filtrarTexto(texto,arrayFiltro)
     if (checkboxcheck.length == 0) {
       if (texto) {
         let arrayTexto = filtrarTexto(texto,arrayOriginal)
         if (arrayTexto.length == 0) {
            contenedor.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://previews.123rf.com/images/nordfox/nordfox1909/nordfox190900027/131978823-lupa-rota-el-concepto-de-b%C3%BAsqueda-err%C3%B3nea-investigaci%C3%B3n-falsa-y-estudio-incorrecto-lupa.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5    class="card-text">"No hay eventos que coincidan con tu búsqueda ahora, pero ¡seguro que pronto habrá algo emocionante!"</h5>
        </div>
      </div>`
         }else{
            pintarTarjeta(contenedor, arrayTexto)
         }
       } else {
         pintarTarjeta(contenedor, arrayOriginal)
       }
     } else {
       pintarTarjeta(contenedor, arrayFiltro2)
       if (arrayFiltro2.length == 0) {
        contenedor.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://previews.123rf.com/images/nordfox/nordfox1909/nordfox190900027/131978823-lupa-rota-el-concepto-de-b%C3%BAsqueda-err%C3%B3nea-investigaci%C3%B3n-falsa-y-estudio-incorrecto-lupa.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5    class="card-text">"No hay eventos que coincidan con tu búsqueda ahora, pero ¡seguro que pronto habrá algo emocionante!"</h5>
        </div>
      </div>`
       }
     }
   }