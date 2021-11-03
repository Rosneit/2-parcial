var imagenpokemon1;
var sonidopokemon1;

var imagenpokemon2;
var sonidopokemon2;

var imagenpokemon6;
var sonidopokemon6;

var imagenpokemon7;
var sonidopokemon7;

var imagenpokemon5;
var sonidopokemon5;


var botonX = [];
var botonY = [];
var botonSz = [];

var fondo;

function setup() {
  createCanvas(1280, 720);
  background(255);
  
  fondo = loadImage("mapa1.jpg");

  imagenpokemon1= loadImage("pokemon1.png");
  sonidopokemon1 = loadSound("pokemon1.mp3");

  imagenpokemon2= loadImage("pokemon2.png");
  sonidopokemon2 = loadSound("pokemon2.mp3");

  imagenpokemon5= loadImage("pokemon5.png");
  sonidopokemon5= loadSound("pokemon5.mp3");
  
  imagenpokemon6= loadImage("pokemon6.png");
  sonidopokemon6= loadSound("pokemon6.mp3");
  
  imagenpokemon7= loadImage("pokemon7.png");
  sonidopokemon7= loadSound("pokemon7.mp3");


  for (var i = 0; i < 5; i += 1) {
    botonX = append(botonX, random(0, width));
    botonY = append(botonY, random(0, height));
    botonSz = append(botonSz, 80);
  
  
  }
}

function draw() {
  background(255);
  
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);

  for (var i = 0; i < 5; i += 1) {
    fill(44, 2, 69);
    ellipse(botonX[i], botonY[i], botonSz[i], botonSz[i]);

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, botonSz[i], botonSz[i]);

    var d = dist(botonX[i], botonY[i], mouseX, mouseY);

    if (d <= botonSz[i]) {
      if (mouseIsPressed) {
        
        if(botonX[i] == botonX[0]){
        image(imagenpokemon1, 0, 0, width, height);

        if (sonidopokemon1.isPlaying()) {
        } else {
          sonidopokemon1.play();
        }
        }
        
                
        if(botonX[i] == botonX[1]){
        image(imagenpokemon5, 0, 0, width, height);

        if (sonidopokemon5.isPlaying()) {
        } else {
          sonidopokemon5.play();
        }
        }
        
                      
        if(botonX[i] == botonX[2]){
        image(imagenpokemon2, 0, 0, width, height);

        if (sonidopokemon2.isPlaying()) {
        } else {
          sonidopokemon2.play();
        }
        }
        
        if(botonX[i] == botonX[3]){
        image(imagenpokemon6, 0, 0, width, height);

        if (sonidopokemon6.isPlaying()) {
        } else {
          sonidopokemon6.play();
        }
        }
        
        if(botonX[i] == botonX[4]){
        image(imagenpokemon7, 0, 0, width, height);

        if (sonidopokemon7.isPlaying()) {
        } else {
          sonidopokemon7.play();
        }
        }
        
        
        
      }
    }
    
    
    
  }
 
}


