console.log("lul");
canvas = document.body.children[0];
console.log(canvas);
context = canvas.getContext("2d");
context.scale(10, 10);
// context.fillRect(1, 1, 4, 6); //default colors is black

//The snake only grows if there is a food.
snake = [
  [0, 1], // x = 0, y = 1 => head of the snake
  [0, 2], // x = 0, y = 2
  [0, 3], // x = 0, y = 3
  [1, 3], // x = 1, y = 3
  [1, 4], // tail of the snake
];

direction = [1, 0]; // x and y axises;  x = 0, y = 0
apple = [8, 3];

//Draw snake
function draw() {
  context.clearRect(0, 0, 300, 300);

  context.fillStyle = "red";
  context.fillRect(apple[0], apple[1], 1, 1);

  context.fillStyle = "black";
  snake.forEach((position) => {
    context.fillRect(position[0], position[1], 1, 1); // 1px x, 1px y
  });
}

//Listen to the keyboard elements.
document.body.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    direction = [0, -1];
  } else if (event.key === "ArrowDown") {
    direction = [0, 1];
  } else if (event.key === "ArrowRight") {
    direction = [1, 0];
  } else if (event.key === "ArrowLeft") {
    direction = [-1, 0];
  }
});

function updateLocation() {
  snake.unshift([snake[0][0] + direction[0], snake[0][1] + direction[1]]);

  //If the head is in the same position as apple we should grow and the apple should reposition.
  if (snake[0][0] === apple[0] && snake[0][1] === apple[1]) {
    apple = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
  } else {
    snake.pop();
  }

  for (let i = 1; i < snake.length; i++) {
    if ((snake[i][0] === snake[0][0]) === snake[0][1]) {
      snake = [[0, 1]];
    }
  }
  draw();
}

//Continually update location
setInterval(updateLocation, 200); // 1sec = 10000 miliseconds // 0.2 sec
