//for

// for (let i = 0; i <= 10; i++) {
//     console.log(`número ${i}`)
// }

// for (let i = 0; i <= 10; i++) {
//     let soma = i + i
//     console.log(`a soma de ${i} com ${i} é ${soma}`)
// }

const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2]
// console.log(numeros.length)
// console.log(numeros[4])
// primeiro elemento = elemento 0
// segundo elemento = elemento 1

// for (let i = 0; i < numeros.length; i++) {
//     const dobro = numeros[i] * 2;
//     console.log(`o dobro de ${numeros[i]} é ${dobro}`)
// }

// while

// let u = 0;
// while (u <= 10) {
//     console.log(`número ${u}`)
//     u++
// }

// let y = 0;
// while (y < numeros.length) {
//     const dobro = numeros[y] * 2;
//     console.log(dobro)
//     y++
// }

// do... while

// let total = 0
// let contador = 0

// do {
//     total += contador * 100
//     contador ++
//     console.log(`contador:${contador}`)
//     console.log('total:' + total)
// } while(contador < 10)

//for ... of

for (let numero of numeros) {
    const dobro = numeros[numero] * 2;
    console.log(`o dobro de ${numeros[numero]} é ${dobro}`) 
}