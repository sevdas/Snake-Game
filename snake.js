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
