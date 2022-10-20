var totalPuntaje = 0;
var widthProgressBar = 0;
var barraProgreso = document.querySelector(".progress-bar");


function randomize(collection) {
    var randomNumber = Math.floor(Math.random() * collection.length);
    return collection[randomNumber];
  }
  
  function confetti() {
    $(".confetti").remove();
    var $confettiItems = $('<div class="confetti"></div>'),
      colors = ["#3b5692", "#f9c70b", "#00abed", "#ea6747"],
      height = 6.6,
      width = 6.6;
  
    var scale, $confettiItem;
  
    for (var i = 0; i < 100; i++) {
      scale = Math.random() * 1.75 + 1;
      $confettiItem = $(
        "<svg class='confetti-item' width='" +
          width * scale +
          "' height='" +
          height * scale +
          "' viewbox='0 0 " +
          width +
          " " +
          height +
          "'>\n  <use transform='rotate(" +
          Math.random() * 360 +
          ", " +
          width / 2 +
          ", " +
          height / 2 +
          ")' xlink:href='#svg-confetti' />\n</svg>"
      );
      $confettiItem.css({
        animation:
          Math.random() +
          2 +
          "s " +
          Math.random() * 2 +
          "s confetti-fall ease-in both",
        color: randomize(colors),
        left: Math.random() * 100 + "vw"
      });
      $confettiItems.append($confettiItem);
    }
    $("body").append($confettiItems);
  }
  
  $("#congratsModal").on("shown.bs.modal", function() {
    confetti();
  });
  


let opciones = [
    {
        pregunta: "Imagina que un compañero de clase te pide ayuda para estudiar para una prueba de Matemática. Tú tienes tiempo libre para hacerlo y eres muy bueno en matemáticas, sin embargo te aburre ayudarlo ¿qué harías?",
        label1: "Ayudar al compañero de clase aunque te aburra porque eres buena persona.",
        label2: "Optas por quedarte jugando videojuegos y no ayudar a tu compañero. Él ya debería saber los conceptos dados en clase. ",
        label3: "Lo ayudas porque sabes que él es bueno en Sociología y te ayudará para la próxima prueba. ",
        correcto: "1"
    },
    {
        pregunta: "Ves a alguien que precisa ayuda, que harias?",
        label1: "Ayudarlo",
        label2: "Dejarlo",
        label3: "Ni idea",
        correcto: "1"
    },
    {
        pregunta: "Ves a alguien que precisa ayuda, que harias?",
        label1: "Ayudarlo",
        label2: "Dejarlo",
        label3: "Ni idea",
        correcto: "1"
    },
    {
        pregunta: "Ves a alguien que precisa ayuda, que harias?",
        label1: "Ayudarlo",
        label2: "Dejarlo",
        label3: "Ni idea",
        correcto: "1"
    },
]

var cantidadPreguntas = opciones.length;

let opcion = opciones[0];



opciones.map( (opcion, index) => {

    let div = document.createElement("div")
    div.classList.add('card', 'mt-5', `situacion${index}`)
    div.style.width = "45rem";


    if(index == 0) {
        div.innerHTML = `
        <ul class="list-group list-group-flush">
        <li class="list-group-item" id="problema">${opcion.pregunta}</li>
            <div class="form-check list-group-item">
                <input class="form-check-input" type="radio" name='flexRadioDefault${index}' id="flexRadioDefault${index}-1" value="1">
                <label class="form-check-label" for="flexRadioDefault${index}-1" id="label1">${opcion.label1}</label>
            </div>
            <div class="form-check list-group-item">
                <input class="form-check-input" type="radio" name='flexRadioDefault${index}' id="flexRadioDefault${index}-2" value="2">
                <label class="form-check-label" for="flexRadioDefault${index}-2" id="label2">${opcion.label2}</label>
            </div>
            <div class="form-check list-group-item">
                <input class="form-check-input" type="radio" name='flexRadioDefault${index}' id="flexRadioDefault${index}-3" value="3">
                <label class="form-check-label" for="flexRadioDefault${index}-3" id="label3">${opcion.label3}</label>
            </div>
            <button id="confirmar" class="btn btn-primary">Confirmar</button>
    </ul>
        `;
    } else {
        div.innerHTML = `
        <ul class="list-group list-group-flush">
        <li class="list-group-item" id="problema">${opcion.pregunta}</li>
            <div class="form-check list-group-item">
                <input class="form-check-input" type="radio" name='flexRadioDefault${index}' id="flexRadioDefault${index}-1" value="1" disabled>
                <label class="form-check-label" for="flexRadioDefault${index}-1" id="label1">${opcion.label1}</label>
            </div>
            <div class="form-check list-group-item">
                <input class="form-check-input" type="radio" name='flexRadioDefault${index}' id="flexRadioDefault${index}-2" value="2" disabled>
                <label class="form-check-label" for="flexRadioDefault${index}-2" id="label2">${opcion.label2}</label>
            </div>
            <div class="form-check list-group-item">
                <input class="form-check-input" type="radio" name='flexRadioDefault${index}' id="flexRadioDefault${index}-3" value="3" disabled>
                <label class="form-check-label" for="flexRadioDefault${index}-3" id="label3">${opcion.label3}</label>
            </div>
            <button id="confirmar" class="btn btn-primary" disabled>Confirmar</button>
    </ul>
        `;
    div.style.display = "none";

    }

    document.querySelector('#containergrandepreguntas').appendChild(div)


    let situacion = document.querySelector(`.situacion${index}`)
    
    // let pregunta = situacion.querySelector("#problema")
    // let label1 = situacion.querySelector(`#label1`);
    // let label2 = situacion.querySelector(`#label2`);
    // let label3 = situacion.querySelector(`#label3`);

    // pregunta.textContent = opcion.pregunta
    // label1.textContent = opcion.label1
    // label2.textContent = opcion.label2
    // label3.textContent = opcion.label3


    situacion.querySelector("#confirmar").addEventListener("click", () => {

        let seleccionado = Array.from(document.getElementsByName(`flexRadioDefault${index}`)).find(r => r.checked) 

        if(seleccionado) {

            let esUltimo = index === opciones.length - 1;

            //Aumentar progress bar
            widthProgressBar += (100 / cantidadPreguntas);
            barraProgreso.style.width = `${widthProgressBar}%`;

            //Deshabilitar la situacion actual
            situacion.querySelectorAll(".form-check-input").forEach(element => {
                element.disabled = true;
            })

            situacion.remove()

            // situacion.querySelector("#confirmar").disabled = true;

            let selected = seleccionado.value;

            if(selected == opcion.correcto) {
                totalPuntaje += (100 / cantidadPreguntas);
            } else {

            }
    
            if(!esUltimo) {
                //Habilitar la situacion proxima
                let situacionProxima = document.querySelector(`.situacion${index+1}`)
                situacionProxima.style.display = "flex"

                let esPenultimo = index + 1 === opciones.length - 1;

                if(esPenultimo) {
                    situacionProxima.querySelector("#confirmar").textContent = "Ver resultado";
                    situacionProxima.querySelector("#confirmar").disabled = false;

                    situacionProxima.querySelector("#confirmar").addEventListener("click", () => {
                        let modal = document.querySelector('#congratsModal');
                        modal.classList.remove("fade")
                        modal.style.display = "block"
                        modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

                        document.querySelector("#txtResultado").textContent = `${totalPuntaje}%`
                    
                        confetti()
                    
                        modal.addEventListener("click", () => {
                            modal.remove()
                        })
                        // let modalDialog = document.querySelector('#modalDialog');
                        // modalDialog.style.display = "block"
                        // modalDialog.style.opacity = "1";
                    })


                    
                
                
                }
                
    
                situacionProxima.querySelectorAll(".form-check-input").forEach(element => {
                    element.disabled = false;
                })
                situacionProxima.querySelector("#confirmar").disabled = false;
                return;
            }

            document.querySelector('#btnVerResultado').disabled = false;
    
            //Habilitar un boton de ver resultados?

        } else {
            alert("Debes seleccionar una opcion")
        }
        


    })


})

// for (let index = 1; index < 6; index += 3) {
//     console.log(index)    
//     console.log(index + 1)    
//     console.log(index + 2)    

//     let label1 = document.querySelector(`#label${index}`)
//     let label2 = document.querySelector(`#label${index + 1}`)
//     let label3 = document.querySelector(`#label${index + 2}`)
// }

// Situacion 2
// Ves a alguien que precisa ayuda, que harias?
// Ayudarlo
// Dejarlo

// Situacion 3
// 
// 
// 

// Situacion 4
// 
// 
// 

// Situacion 5
// 
// 
// 

// Situacion 6
// 
// 
// 

// Situacion 7
// 
// 
// 

// Situacion 8
// 
// 
// 

// Situacion 9
// 
// 
// 

// Situacion 10
// 
// 
// 

function randomize(collection) {
    var randomNumber = Math.floor(Math.random() * collection.length);
    return collection[randomNumber];
  }
  
  function confetti() {
    $(".confetti").remove();
    var $confettiItems = $('<div class="confetti"></div>'),
      colors = ["#3b5692", "#f9c70b", "#00abed", "#ea6747"],
      height = 6.6,
      width = 6.6;
  
    var scale, $confettiItem;
  
    for (var i = 0; i < 100; i++) {
      scale = Math.random() * 1.75 + 1;
      $confettiItem = $(
        "<svg class='confetti-item' width='" +
          width * scale +
          "' height='" +
          height * scale +
          "' viewbox='0 0 " +
          width +
          " " +
          height +
          "'>\n  <use transform='rotate(" +
          Math.random() * 360 +
          ", " +
          width / 2 +
          ", " +
          height / 2 +
          ")' xlink:href='#svg-confetti' />\n</svg>"
      );
      $confettiItem.css({
        animation:
          Math.random() +
          2 +
          "s " +
          Math.random() * 2 +
          "s confetti-fall ease-in both",
        color: randomize(colors),
        left: Math.random() * 100 + "vw"
      });
      $confettiItems.append($confettiItem);
    }
    $("body").append($confettiItems);
  }
  
  $("#congratsModal").on("shown.bs.modal", function() {
    confetti();
  });