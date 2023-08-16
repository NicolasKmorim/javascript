let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero (n){
    if(Number(n) >= 1 && Number (n) <= 100){
        return true
    }else {
        return false
    }
}
function inLista (n, l) {
    if(l.indexof(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
    }else{
        window.alert('valor invalido ou ja encotrado na lista')
    }
    num.value = ''
    num.focus() 
}

function finalizar (){
    if(valores.length ==0){
        window.alert('adicone valores antes de continuar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            if (valores[pos] > maior)
               maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        } 
        media = soma / tot
        res.innerHTML=''
        res.innerHTML += `<p> ao todo, temos ${tot} numeros cadastrados. </p>`
        res.innerHTML += `<p>O maior numero é ${maior}</p>`
        res.innerHTML += `<p>o menor valor é ${menor}</p>`
        res.innerHTML += `<p>somadno todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>a media dos numeros é ${media}</p>`
    }
}