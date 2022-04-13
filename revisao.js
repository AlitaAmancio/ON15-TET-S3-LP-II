//EXERCICIO DE REVISÃO DE IF...ELSE

let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512

/*
escala de IDH

muitoBaixo 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 - .799
muitoAlto 0.8 - 1
*/

let idh = vietna

if(idh >= 0 && idh <.5) {
    console.log(`IDH muito baixo`)
} else if (idh >= 0.5 && idh <= 0.599) {
    console.log (`IDH baixo`)
} else if (idh >= .6 && idh < .7) {
    console.log(`IDH médio`)
} else if (idh >= .7 && idh < .8) {
    console.log(`IDH alto`)
} else if (idh >= .8 && idh <=1) {
    console.log(`IDH muito alto`)
} else {
    console.log(`IDH inválido`)
}