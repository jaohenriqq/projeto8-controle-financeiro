var value = parseInt(prompt('qual sua quantidade de  dinheiro no momento?'))
while(value)
    {
let option = prompt(`seu valor é ${value}\nvoce quer:\n 1-adicionar dinheiro\n 2-remover dinheiro\n 3-sair do programa`)
if(option == 1){
let  quantity = parseInt(prompt('qual a quantidade a ser adicionada?'))
 var value = value + quantity
}
 else if(option == 2){
let  quantity2= parseInt(prompt('qual a quantidade a ser retirada?'))
var value = value - quantity2
 }
else{
    option==3
break
}
    }
alert('programa encerrado')
