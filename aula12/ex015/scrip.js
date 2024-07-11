function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length ==0 || Number(fano.value) > ano){
        alert('verifique os dados')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('imagem')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade <10){
                //crianca
                img.src = "imagens/bebe-m.jpg"
            }
            else if( idade < 21){
                //jovem
                img.src = "imagens/jovem-m.jpg"
            }
            else if( idade < 50){
                //adulto
                img.src = "imagens/adulto.jpg"
            }
            else{
                //idoso
                img.src = "imagens/idoso.jpg"
            }
        }
        else if(fsex[1].checked) {
            genero = 'mulher'
            if(idade>=0 && idade <10){
                //crianca
                img.src = "imagens/bebe-f.jpg"
            }
            else if( idade < 21){
                //jovem
                img.src = "imagens/jovem-f.jpg"
            }
            else if( idade < 50){
                //adulto
                img.src = "imagens/adulta.jpg"
            }
            else{
                //idoso
                img.src = "imagens/idosa.jpg"
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}