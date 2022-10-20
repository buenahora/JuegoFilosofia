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
        correcto: "1",
        regular: "3"
    },
    {
        pregunta: "Ahora imagina que tu mejor amigo/a te pide ayuda para estudiar para la prueba de matemáticas. ¿Qué harías?",
        label1: "Ayudar a tu mejor amigo cómo ayudarías a cualquier otra persona que te pidiera ayuda",
        label2: "Ayudar a tu mejor amigo a pesar de que te aburre solo porque es tu mejor amigo (De acuerdo con el deber, por inclinación inmediata",
        label3: "Optas por quedarte jugando videojuegos y no ayudar a tu amigo. Él ya debería saber los conceptos dados en clase.",
        correcto: "1",
        regular: "2"
    },
    {
        pregunta: "Imagina que eres dueño/a de un gran comercio único en tu área, por lo tanto tú eres quien pone los precios de los artículos que vendes y no tienes competencia. Un día llega un comprador inexperto, que no tiene idea de los precios del mercado. A la hora de pagar, ¿cuánto le cobrarías?        ",
        label1: "Te aprovechas de la situación y le cobras el doble de lo que en realidad lo vendes normalmente. Tú tienes el monopolio y este comprador no consigue tu producto en ningún otro lado, puedes cobrar lo que quieras.",
        label2: "Le cobras lo mismo que a cualquier otra persona.",
        label3: "Crees haber visto a esta persona antes y sabes que te puede ser útil en el futuro, por ello decides cobrarle lo mismo que a cualquier otra persona.",
        correcto: "2",
        regular: "3"
    },
    {
        pregunta: "En esta situación estás en la playa y a lo lejos ves una persona pidiendo socorro porque se está ahogando. Tu sabes nadar y dispones de todos los medios para rescatarla ¿Qué harías?",
        label1: "Te haces el distraído y sigues con lo tuyo. Los guardavidas están para estos casos y de todas formas hay mucha gente en la playa, alguien irá a rescatarla.",
        label2: "Decides rápidamente ir a socorrerla, ya que te das cuenta que la persona que se está ahogando es alguien que te debe dinero.",
        label3: "Decides rápidamente ir a socorrerla, cualquier persona en esa situación necesita de ayuda.",
        correcto: "3",
        regular: "2"
    },
    {
        pregunta: "Ahora la persona que se ahoga es un ser querido, un integrante de tu familia. ¿Qué harías?",
        label1: "Quieres mucho a esta persona y no la dejarás morir. Nadas para salvarla lo más rápido que puedes.",
        label2: "Decides no hacer nada. Hay muchas personas que están presenciando esta escena, probablemente alguien irá a rescatarlo.",
        label3: " Nuevamente, decides rápidamente ir a socorrerla, cualquier persona en esa situación necesita de ayuda. ",
        correcto: "3",
        regular: "1"
    },
    {
        pregunta: "Imagina que eres doctor/a cardióloga. Siempre te tomas tu media hora de descanso y jamás atiendes a nadie durante ella por más urgente que sea. Un día llega un paciente a la sala de emergencias que requiere acción inmediata para salvarlo, sin embargo tuvo la mala suerte de caer en tu media hora de descanso. ¿Qué harías?        ",
        label1: "Haces una excepción e interrumpes tú descanso para ir a ayudar. Si es una emergencia necesita ser atendida lo antes posible.",
        label2: "Decides mantenerte firme con tu decisión y disfrutas el resto de tu hora de descanso. Estoy trabajando y me corresponde mi tiempo de descanso, luego atenderé al paciente. ",
        label3: "Por alguna razón sabes que esta persona es familiar cercano de tu jefe y decides interrumpir tu hora de descanso para atenderla. Tal vez pueda darte un ascenso o aumentar tu sueldo. ",
        correcto: "1",
        regular: "3"
    },
    {
        pregunta: "En este caso, la persona que entra a la sala de emergencias es un amigo/a al cual quieres mucho. ¿Qué haces esta vez?        ",
        label1: "Haces una excepción e interrumpes tú descanso para ir a ayudar. Es tu amigo y jamás lo dejarías morir pudiendo hacer algo al respecto. ",
        label2: "A pesar de que sea tu amigo decides atenderlo luego de tu hora de descanso. ",
        label3: "Actúas de la misma forma que harías con cualquier otra persona, sea tu amigo o no. ",
        correcto: "3",
        regular: "1"
    },
    {
        pregunta: "Por último, imagina que estás caminando por la calle y pasas por un callejón donde ves que 2 bullies le están pegando a otra persona. Te das cuenta que la persona siendo golpeada es la misma que te hizo la vida imposible haciéndote bullying durante años en la escuela. ¿Qué harías?        ",
        label1: "Decides hacer la vista gorda y continuar por tu camino. Esa persona se lo merece, ya que me hizo bullying durante años haciéndome la vida imposible.",
        label2: "Haces todo en tu poder para detener la situación e incluso llamas a la policía. Nadie merece ser golpeado.",
        label3: "Haces todo lo que puedes para detener la pelea. Sabes que si lo haces la persona que te hizo bullying durante tu infancia te pedirá perdón y quedará en deuda contigo.",
        correcto: "2",
        regular: "3"
    }
]



var cantidadPreguntas = opciones.length;
var valorPreguntas = 10;
var maximoPuntaje = cantidadPreguntas * valorPreguntas;

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

            if(selected == opcion.correcto || selected == opcion.regular) {
                if(seleccionado == opcion.correcto) {
                  totalPuntaje += 10;

                } else {
                  totalPuntaje += 5;
                }
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
                        modal.style.display = "flex"
                        modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

                        document.querySelector("#txtResultado").textContent = `${totalPuntaje} / ${maximoPuntaje}`
                    
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