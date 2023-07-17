function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('{erro} verifique os dadso novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade ${idade}`
    }
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto' )
    if(fsex[0].checked){
        genero = 'homem'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'criança-homem.jpg')
        }else if( idade <21){
            //jovem 
            img.setAttribute('src', 'jovem-homem.jpg')
        }else if( idade < 50){
            //adulto
            img.setAttribute('src', 'adulto-homem.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'idoso-homem.jpg')
        }
    }else if(fsex[1].checked){
        genero = 'mulher'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'criança-mulher.jpg')
        }else if( idade <21){
            //jovem
            img.setAttribute('src', 'jovem-mulher.jpg')
        }else if( idade < 50){
            //adulto
            img.setAttribute('src', 'adulto-mulher.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'idosa-mulher.jpg')
        }  
    }
    res.style.textAlign = 'center'
    res.innerHTML =`<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
}
