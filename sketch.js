var telaDeFundoImg;
var gato, gatoImg1, gatoImg2, gatoImg3;
var rato, ratoImg1, ratoImg2, ratoImg3;

function preload() {
    //carregue as imagens aqui
    telaDeFundoImg = loadImage("images/garden.png");
    gatoImg1 = loadImage("images/cat1.png");
    gatoImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    gatoImg3 = loadImage("images/cat4.png");
    ratoImg1 = loadImage("images/mouse1.png");
    ratoImg2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    ratoImg3 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    
    gato = createSprite(870, 600);
    gato.addImage("sentado",gatoImg1);
    gato.scale = 0.2;
    

    rato = createSprite(200,600);
    rato.addImage("ratoParado",ratoImg1)
    rato.scale = 0.15;
    
}

function draw() {

    background(telaDeFundoImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x < (gato.width - rato.width)/2){
       gato.velocityX = 0;
       gato.addImage("últimaImagemGato", gatoImg3);
       gato.changeAnimation("últimaImagemGato");
       gato.x = 300;
       gato.scale = 0.2; 

       rato.addImage("útimaImagemRato", ratoImg3);
       rato.scale = 0.15;
       rato.changeAnimation("útimaImagemRato");
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
 if(keyCode === LEFT_ARROW){
   rato.addAnimation("ratoProvocando", ratoImg2);
   rato.changeAnimation("ratoProvocando");
   rato.frameDelay = 25;

   gato.velocityX = -5;
   gato.addAnimation("gatoCorrendo",gatoImg2);
   gato.changeAnimation("gatoCorrendo");
 }

}
