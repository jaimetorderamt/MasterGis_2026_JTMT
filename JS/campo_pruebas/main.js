
console.log('Hola desde otro lado')


// Condicionales

const numeroPeces = 3

if(numeroPeces<= 4) {
    console.log(`Tienes ${numeroPeces} que son menos de 4 peces`)

}

// Bucles

for (let contador = 0;contador < 6; contador = contador +1){

    console.log(`Estoy en la iteración numero ${contador}`)

}

// Bucles for

const semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

for (const dia of semana){
    console.log(dia)
}
