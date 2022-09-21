function mudaFigura(){
    var image = document.getElementById("trocarImagem")

    if(image.src.match("./cafe01.jpg")){
        image.src = "./images/cafe02.jpg";
    } else {
        image.src = "./images/cafe01.jpg";
    }
}