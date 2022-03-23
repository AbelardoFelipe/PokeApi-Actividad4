let botonGenerar = document.getElementById('generar')
let salida = document.getElementById('imagen2')
let nombre = document.getElementById('nombre')
let experiencia = document.getElementById('experiencia')
let ID = document.getElementById('numeroPosicion')
let ataque = document.getElementById('numeroAtaque')
let defensa = document.getElementById('numeroDefensa')
let ingreso = document.getElementById('ingreso')
let textoIngresar = document.getElementById('textoIngresar')

// DATOS QUE APARECEN POR DEFECTO AL CARGAR LA APLICACION
window.addEventListener('load', ()=> {
    let i = Math.floor(Math.random() * (600 - 1) + 1)
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(res => res.json())
        .then(resJson => {
            nombre.innerHTML = resJson.name
            salida.setAttribute('src', resJson.sprites.other.dream_world.front_default)
            experiencia.innerHTML = "Exp. " + resJson.base_experience
            ID.innerHTML = i
            ataque.innerHTML = resJson.stats[1].base_stat
            defensa.innerHTML = resJson.stats[2].base_stat
        })
})

// DATOS QUE APARECEN AL INGRESAR UN NUMERO Y PRECIONAR EL BOTON "GENERAR POKEMON"
botonGenerar.addEventListener('click', function(){
    let i = parseInt(ingreso.value)
    if(ingreso.value == ""){
        textoIngresar.innerHTML = "El campo no puede estar vacío"
    }else if (i >= 1 && i <= 600) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then(res => res.json())
            .then(resJson => {
                nombre.innerHTML = resJson.name
                salida.setAttribute('src', resJson.sprites.other.dream_world.front_default)
                experiencia.innerHTML = "Exp. " + resJson.base_experience
                ID.innerHTML = i
                ataque.innerHTML = resJson.stats[1].base_stat
                defensa.innerHTML = resJson.stats[2].base_stat
                ingreso.value = ""
                textoIngresar.innerHTML = "Ingrese un nuevo número"
            })
    }else if(i > 600){
        textoIngresar.innerHTML = "El número no puede ser mayor a 600"
        ingreso.value = ""
    }else if (i <= 0) {
        textoIngresar.innerHTML = "El número no puede ser menor a 1"
        ingreso.value = ""
    }
})