function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var minuto = data.getMinutes()
    var hora = data.getHours()
    var seconds = data.getSeconds()
    //var hora =1
    msg.innerHTML = (`Agora são ${hora}:${minuto}:${seconds} `) 
    if(hora>=0 && hora<12){
        //('BOM DIA!!')
        img.src = "imagens/manha.jpg"
        document.body.style.background = '#e6d2ad'
    }
    else if(hora>=12 && hora<18){
        //BOA TARDE!!
        img.src = "imagens/tarde.jpg" 
        document.body.style.background = '#5f5333'
        
    }
    else{
        //BOA NOITE!!
        img.src = "imagens/noite.jpg"
        document.body.style.background = '#333f5f'
    }
}