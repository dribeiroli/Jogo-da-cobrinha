let canvas= document.getElementById('snake');
let context= canvas.getContext('2d');
let box= 16;
let snake =[];
snake[0] ={
    x: 16*box,
    y: 16*box
}
let direction = "right";

function criarBG() {
    context.fillStyle ="lightgreen";
    context.fillRect(0, 0, 32* box, 32 * box);
}

function criarCobrinha(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
} 

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction ='left';
    if(event.keyCode == 38 && direction != 'down') direction ='top';   
    if(event.keyCode == 39 && direction != 'left') direction ='right';
    if(event.keyCode == 40 && direction != 'top') direction ='down';
    //console.log(event.keyCode);
}

function iniciarJogo(){
    if(snake[0].x >31 * box && direction == 'right') snake[0].x = 0;
    if(snake[0].x <0 * box && direction == 'left') snake[0].x = 32*box;
    if(snake[0].y >31 * box && direction == 'down') snake[0].y = 0;
    if(snake[0].y <0 && direction == 'top') snake[0].y = 32*box;

    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction== 'right') snakeX +=box;
    if(direction =='left') snakeX -=box;
    if(direction=='top') snakeY-=box;
    if(direction=='down') snakeY +=box;    

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);


