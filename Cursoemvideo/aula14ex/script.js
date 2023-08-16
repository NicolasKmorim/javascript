
function verificar(){
var res = document.getElementById('res')
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
if(inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.length ==0){
    window.alert('erro')
} else{
    res.innerHTML = 'contando: '
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(p <= 0){
        window.alert ('passo invalido')
        p = 1
    }
    if(i < f){
        for(var c = i; c <= f; c += p ){
            res.innerHTML += `${c}\u{1f449}`
        } 
    } else {
        for(var c =i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
  }
}