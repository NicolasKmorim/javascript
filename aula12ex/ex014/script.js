function carregar(){
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if(hora >= 0 && hora < 12){
        //bomdia
        img.scr='manha.png'
        document.body.style.background='#e2cd9f'
    } else if(hora >= 12 && hora < 18){
       //boatarde
       img.src='tarde.png'
        document.body.style.background='#b984f'
    } else{
        //boanoite
        img.src='noite.png'
        document.body.style.background='#515154'
    }
    
}
