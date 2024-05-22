let data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};

let div_padre_home = document.getElementById("cont_cards")

pintar_tarjeta(div_padre_home, data.events)

function pintar_tarjeta(div_padre, info) {
  div_padre.innerHTML = ""
  for (let i = 0; i < info.length; i++) {
    crear_tarjeta(div_padre, info[i])

  }
}

function crear_tarjeta(div_padre_home, tarjeta) {
// aca aplicare el URLSerchParams
let urlDetails = "http://127.0.0.1:5501/details.html"
console.log(urlDetails);
  let div_hijo_home = document.createElement("div")
  div_hijo_home.className = "card"
  div_hijo_home.classList.add("my-2")
  div_hijo_home.classList.add("py-2")
  div_hijo_home.classList.add("px-2")
  div_hijo_home.style = "width: 16rem;"
  div_hijo_home.innerHTML = `
    <img src = "${tarjeta.image}" class="card-img-top" alt = "museum">
      <div class="card-body">
        <div class="row" id="cont1_vis_nieto">
         <h5 class="card-title">${tarjeta.name}</h5>
         <p class="card-text">${tarjeta.description}</p>
        </div>
        <div class="row d-flex justify-content-center align-items-end" id="cont2_vis_nieto">
          <p class="col-6 d-flex justify-content-center my-2">${tarjeta.price}</p>
          <a href="${urlDetails+"?value="+tarjeta._id}" class="col-6 btn btn-primary">Details</a>
        </div>
      </div>`
  div_padre_home.appendChild(div_hijo_home)
}

// empiezo el sprint 3 para llamar los input desde js y generarlo en el index dinamicamente con el nombre de las categorias que tienene las tarjetas 
//DECLARO UNA VARIABLE PARA EL CONTENEDOR DONDE VAN A IR LOS INPUTS
let contenedorInputs = document.getElementById('contenedorInputs')

//CREO UN ARRAY DONDE VAN A IR LAS CATEGORIAS Y VA ELIMINANDO LAS QUE ESTEN REPETIDAS Y GUARDA LAS QUE NO SE REPITEN 
let categorys = [... new Set(data.events.map(evento => evento.category))]

//FUNCION PARA CREAR LOS INPUTS TYPE CHECKBOX 
function pintarCheckbox(array, contenedor) {
  array.forEach((category) => {
    let divHijo = document.createElement('div')
    divHijo.classList.add('input-group-text')
    divHijo.innerHTML = `<input class="btn_checkbox" type="checkbox" id="${category.replace(/\s/g, "").toLowerCase()}" name="${category}" value="${category}">
    <label for="${category.replace(/\s/g, "").toLowerCase()}">${category}</label>
    `
    contenedor.appendChild(divHijo)
  })

}


//EJECUTO LA FUNCION PARA PINTAR LOS CHECKBOX
pintarCheckbox(categorys, contenedorInputs)

// ACA VOY A FILTRAR LAS TARJETAS POR CATEGORIAS Y POR TEXTO SEGUN SU TITULO Y DESCRIPCION

//DECLARO UNA VARIABLE PARA LLMAR EL ELEMENTO DONDE EL USUARIO VA INGRESAR SU EVENTO A BUSCAR Y 
let inputText = document.getElementById('inputText')

//ACA AREMOS UNA FUNCION QUE ME VA FILTAR LOS EVENTOS QUE TENGAN INCLUIDO EN SU TITULO Y DESCRIPCION LAS LETRAS QUE EL CLIENTE A DIGITADO EN EL INPUT TYPE TEXT 
function filtroPorText(textoInput, array) {
  //VERIFICO SI EL INPUT ESTA VACIO SI LO ESTA PINTO TODAS LAS TAJETAS QUE HAY EN EL ARRAY 
  if (!textoInput) {
    return array
  }
  //SI TIENE ALGUN VALOR EL INPUT REALIZA ESTA OPERACION CREA UNA VARIABLE DONDE FILTRARA LAS TARJETAS QUE INCLUYAN EL VALOR DEL INPUT EN SUS PROPIEDADES NAME Y DESCRIPTION Y LAS CONVIERTO A MINUSCULAS PARA HACER UNA COMPARACION MAS EXACTA 
  let eventosFiltrado = array.filter(posicion => {
    let nameMinuscula = posicion.name.toLowerCase()
    let descriptionMinuscula = posicion.description.toLowerCase()
    return nameMinuscula.includes(textoInput.toLowerCase()) || descriptionMinuscula.includes(textoInput.toLowerCase())
  })
  //ACA RETORNO EL RESULTADO OBTENIDO QUE SERIAN LAS TARJETAS QUE INCLUYEN EL TEXTO QUE TIENE EL VALUE DEL INPUT
  return eventosFiltrado
}
//AGREGO EL EVENTO 'INPUT' PARA EL INPUTTEXT Y TOMARA EL VALOR ACTUAL QUE TIENE EL VALUE DEL MISMO Y DECLARO UNAVARIABLE DONDE GUARDARE LA FUNCION QUE ME FILTRA POR TEXTO Y ME RETORNA UN RESULTADO
inputText.addEventListener('keyup', (e) => {
  let checkboxcheck = document.querySelectorAll('input[type=checkbox]:checked')
  let eventosFiltrados = data.events.filter(evento => {
    for (let i = 0; i < checkboxcheck.length; i++) {
      if (checkboxcheck[i].value == evento.category) {
        return evento
      }
    }
  })
  if (eventosFiltrados == 0) {
    eventosFiltrados = data.events
    pintar_tarjeta(div_padre_home, data.events)
  } else {
    pintar_tarjeta(div_padre_home, eventosFiltrados)
  }
  let texto = e.target.value
  if (!texto) {
    pintar_tarjeta(div_padre_home, eventosFiltrados)
  }else{
    texto.toLowerCase()
    let array = eventosFiltrados.filter(i => i.name.toLocaleLowerCase().includes(texto) || i.description.toLocaleLowerCase().includes(texto))
    pintar_tarjeta(div_padre_home, array)
    if (array.length == 0) {
      div_padre_home.innerHTML = `<p>no hay nada para mostrar</p>`
    }
  }
})

//DECLARO UNA VARIABLE QUE ME GUARDARA EN UN ARRAY EL FILTRO DE LOS CHECKBOX QUE SEAN CHECKED
let filtroPorCheck = []
//AHORA VOY A PINTAR LAS TARJETAS POR CATEGORIAS 
contenedorInputs.addEventListener('change', () => {
   filtroPorChecked(data.events,filtroPorCheck)

})
//funcion para filtrar tarjetas por inputs checked


function filtroPorChecked(arrayOriginal, arrayFiltro) {
  let checkboxcheck = document.querySelectorAll('input[type=checkbox]:checked')
  arrayFiltro = data.events.filter(evento => {
      for (let i = 0; i < checkboxcheck.length; i++) {
        if (checkboxcheck[i].value == evento.category) {
          return evento
        }
      }
    })
  if (arrayFiltro == 0) {
    pintar_tarjeta(div_padre_home, arrayOriginal)
  } else {
    pintar_tarjeta(div_padre_home, arrayFiltro)
  }
}
