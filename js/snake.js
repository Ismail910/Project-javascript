
var word;
var level = 0;
var question = 0;
var score = 0;
var temp_score = score;

document.getElementById("level").innerHTML=level+1;
document.getElementById("question").innerHTML=question+1;
document.getElementById("score").innerHTML=score;


var coin = document.getElementById("coin");
var gameover_sound = document.getElementById("gameover");
const blockSize = 25; //we will move by 25 at a time
const rows = 20; //number of rows
const columns = 25; //number of columns

var board;
var context;

//position of snake head at the beginning at (5,5)
var SnakeX = 5*blockSize;
var SnakeY = 5*blockSize;

//snake body is an array
var snakeBody = [];

//move in x direction and y direction
var velocityX = 0;
var velocityY = 0;


//position of food
var foodX;
var foodY;


//for gameover condition stop update the canvas
var gameOver = false;

//get data from json file
function getData()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.status==200 && this.readyState==4)
        {
            var dataAfterConvert = JSON.parse(this.responseText);
            word = Array.from(dataAfterConvert[level].answers[question].answer);
        }
    }
    xhttp.open("GET","/json/questionandAnswer.json",true);
    xhttp.send();
}

//when window loaded get the data from json and start draw the canvas
 window.onload = function()
{
    
    getData();
    board = document.getElementById("board"); //get the canvas =>board
    board.height = rows * blockSize; //height of playing board
    board.width = columns * blockSize; //width of playing board
    context = board.getContext("2d");
    placeFoodRandom();
    document.addEventListener("keyup",changeSnakeDirection);
    setInterval(update,100);
}


var i = 0;
function update()
{
    if(gameOver)
    {
        return;
    }

    context.fillStyle = "#2c2c54"; //set fill color to draw board
    context.fillRect(0,0,board.width,board.height); //draw the board from 0,0 to width and height

    //draw the food in green color
    context.fillStyle = "#e84118";
    context.fillRect(foodX,foodY,blockSize,blockSize);
    context.font="20px Arial";
    context.fillStyle = "white";
    context.fillText(word[i],foodX+5,foodY+20,blockSize,blockSize);

    //if the snake eat the food we push the food into its body array
    if(SnakeX == foodX && SnakeY == foodY)
    {
        coin.play();
        score++;
        temp_score++;
        document.getElementById("score").innerHTML=score;
        snakeBody.push([foodX,foodY]);
        placeFoodRandom();
        i++;
    }

    //make the body follow the head
    for(let i = snakeBody.length-1 ; i>0 ;i--)
    {
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length)
    {
        snakeBody[0] = [SnakeX , SnakeY];
    }

    //change position of head while moving
    SnakeX += velocityX * blockSize;
    SnakeY += velocityY * blockSize;
    context.fillStyle = "yellow";
    context.fillRect(SnakeX,SnakeY,blockSize,blockSize);
    
    for(let i = 0 ;i<snakeBody.length ;i++)
    {
        context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
    }

    //gameover conditions
    if(SnakeX < 0 || SnakeX > columns*blockSize || SnakeY < 0 || SnakeY > rows*blockSize )
    {
        gameover_sound.play();
        gameOver = true;
        context.fillStyle = "red"; 
        context.fillRect(5*blockSize,5*blockSize,15*blockSize,10*blockSize);
        context.font="50px Arial bold";
        context.fillStyle = "white";
        context.fillText("GameOver!",8*blockSize,10*blockSize);
        context.fillText("Score: "+score,9*blockSize,12*blockSize);


    }
    //gameover conditions
    for(let i=0 ;i<snakeBody.length ;i++)
    {
        if(SnakeX == snakeBody[i][0] && SnakeY == snakeBody[i][1])
        {
            gameover_sound.play();
            gameOver = true;
            context.fillStyle = "red"; 
            context.fillRect(5*blockSize,5*blockSize,15*blockSize,10*blockSize);
            context.font="50px Arial bold";
            context.fillStyle = "white";
            context.fillText("GameOver!",8*blockSize,10*blockSize);
            context.fillText("Score: "+score,9*blockSize,12*blockSize);

        }
    }
    //win conditions
    if(i>=word.length)
    {
        gameOver=true;
        context.fillStyle = "green"; 
        context.fillRect(5*blockSize,5*blockSize,15*blockSize,10*blockSize);
        context.font="50px Arial bold";
        context.fillStyle = "white";
        context.fillText("You Win!",8.5*blockSize,9*blockSize);
        context.fillText("Score: "+score,9*blockSize,12*blockSize);

        
    }
    

}
function retry()
{
    i=0;
    gameOver = false;
    score = score-temp_score;
    document.getElementById("score").innerHTML=score;
    temp_score=0;
    snakeBody = [];
    SnakeX = 5*blockSize;
    SnakeY = 5*blockSize;
    velocityX = 0;
    velocityY = 0;
    placeFoodRandom();
    update();
}
function next()
        {
            if(level>1)
            {
                alert("Congratulations!! No More Levels");
                gameOver = true;
            }
            else if(question<=4)
                {
                    console.log("hi");
                    question++;
                    i=0;
                    temp_score = 0;
                    document.getElementById("question").innerHTML=question+1;
                    gameOver=false;
                    snakeBody = [];
                    SnakeX = 5*blockSize;
                    SnakeY = 5*blockSize;
                    velocityX = 0;
                    velocityY = 0;
                    getData();
                    update();
                }
            else
                {
                    level++;
                    question=0;
                    i=0;
                    temp_score = 0;
                    document.getElementById("level").innerHTML=level+1
                    document.getElementById("question").innerHTML=question+1;
                    gameOver=false;
                    snakeBody = [];
                    SnakeX = 5*blockSize;
                    SnakeY = 5*blockSize;
                    velocityX = 0;
                    velocityY = 0;
                    getData();
                    update();
                }
        }

function placeFoodRandom()
{
    //Math.random return number between 0 and 1 and multibly by number of columns=30 
    //to return number bewtween 0 and 30
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * rows) *blockSize;
}

function changeSnakeDirection(e)
{
    if(e.code == "ArrowUp" && velocityY != 1)
    {
        velocityX = 0;
        velocityY = -1;

    }
    else if(e.code == "ArrowDown" && velocityY != -1)
    {
        velocityX = 0;
        velocityY = 1;
    }
    if(e.code == "ArrowLeft" && velocityX != 1)
    {
        velocityX = -1;
        velocityY = 0;
        
    }
    if(e.code == "ArrowRight" && velocityX != -1)
    {
        velocityX = 1;
        velocityY = 0;
    }
}