let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

let clienteMaria = [
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Calça jeans clara', valor: 130.0},
    {produto: 'Blusa simples', valor: 35.0},
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]
    

let clienteJoana = [
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Bolsa pequena', valor: 49.0}]

    
function desconto(valor){
    if (valor >=50 && valor <=79){
        // console.log(`desconto de 5% aplicado`)
        return valor*0.05;
    }else if (valor >=80 && valor <= 99 ) {
        // console.log(`desconto de 10% aplicado`)
        return valor*0.1
    } else if (valor >=100 && valor <=199){
        // console.log(`desconto de 20% aplicado`)
        return valor*0.2
    } else if(valor >= 200){
        // console.log(`desconto de 50% aplicado`)
        return valor*0.5
    }else {
        // console.log(`sem descontos aplicáveis`)
        return 0
    }
}

function cupom(valor, peças){
    if(valor >= 800 || peças >= 10){
        console.log('Ganhou um cupom de 50 reais');
    }
}

function compras(produtos){
    valorTotal = 0;
    valorDesconto = 0;
    valorFinal = 0;
    totalPecas = 0;
    for(p of produtos){
        // console.log(p.produto);
        totalPecas ++;
        valorTotal += p.valor;
        valorDesconto += desconto(p.valor);
    }
    valorFinal = valorTotal - valorDesconto;
    console.log('Total de peças: ' + totalPecas)
    console.log('valor Total: R$' + valorTotal)
    console.log('valor Desconto: R$' + valorDesconto)
    console.log('valor Final: R$' + valorFinal)

    cupom(valorFinal, totalPecas)
}

console.log('Compras da Lilit')
compras(clienteLilit);
// console.log('----------------')
// console.log('Compras da Maria')
// compras(clienteMaria);
// console.log('----------------')
// console.log('Compras da Joana')
// compras(clienteJoana);
// console.log('----------------')
