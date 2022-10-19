var totalPuntaje = 100;
var widthProgressBar = 0;
var barraProgreso = document.querySelector(".progress-bar");

let opciones = [
    {
        pregunta: "Prometiste algo pero ahora se te dificulta cumplirlo, que harias?",
        label1: "Romper la promesa",
        label2: "Hacer todo lo que puedas por cumplirla",
        label3: "??",
        correcto: "2"
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
            <button id="confirmar">Confirmar</button>
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
            <button id="confirmar" disabled>Confirmar</button>
    </ul>
        `;
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

            //Aumentar progress bar
            widthProgressBar += (100 / cantidadPreguntas);
            barraProgreso.style.width = `${widthProgressBar}%`;

            //Deshabilitar la situacion actual
            situacion.querySelectorAll(".form-check-input").forEach(element => {
                element.disabled = true;
            })
            situacion.querySelector("#confirmar").disabled = true;

            let selected = seleccionado.value;

            if(selected == opcion.correcto) {
                alert("Bien")
            } else {
                alert("Mal")
            }
    
            if(index !== opciones.length - 1) {
                //Habilitar la situacion proxima
                let situacionProxima = document.querySelector(`.situacion${index+1}`)
    
                situacionProxima.querySelectorAll(".form-check-input").forEach(element => {
                    element.disabled = false;
                })
                situacionProxima.querySelector("#confirmar").disabled = false;
                return;
            }
    
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

