// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// var volume = 0;
// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;

}
function black() {
  return `rgb(${(0)},${(0)},${(0)})`;

}

  class Ball {
    constructor (x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;

    
  }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
      ctx.fill();
    }

    update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(Math.abs(this.velX));
      }

      if ((this.x - this.size) <= 0) {
         this.velX = Math.abs(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(Math.abs(this.velY));
      }

      if ((this.y - this.size) <= 0) {
         this.velY = Math.abs(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
    }
    
    
      }
    // function clickedBall() {

    // };
   


const balls = [];

while (balls.length < 50) {
  const size = random(30,20);
  const ball = new Ball(
     // ball position always drawn at least one ball width
     // away from the edge of the canvas, to avoid drawing errors
     random(0 + size,width - size),
     random(0 + size,height - size),
     random(-7,7),
     random(-7,7),
     black(),
     size
     
  );
  // document.addEventListener("click",clickedBall);


 balls.push(ball);
}


// function loop() {
//   ctx.fillStyle = 'rgba(225, 225, 225, 0.25)';
//   ctx.fillRect(0, 0,  width, height);

//   for (const ball of balls) {
//     ball.draw();
//     // ball.update();
//     // ball.collisionDetect();
//   }

//   requestAnimationFrame(loop);
// }

// loop();


// const shape = document.getElementsByClassName('Ball');
// elements.forEach(element => {
//         const randomTop = Math.floor(Math.random() * window.innerHeight);
//         const randomLeft = Math.floor(Math.random() * window.innerWidth);
//         element.style.top = `${randomTop}px`;
//         element.style.left = `${randomLeft}px`;});

// let isBlue = true;
// for (var i = 0; i < shape.length; i++) {
//   shape[i].addEventListener('click', function() {
//   if (isBlue) {
//     shape[i].style.backgroundColor = 'black';
//     volume --;
//     console.log(volume);
//   } else {
//     shape[i].style.backgroundColor = 'blue';
//     volume ++;
//     console.log(volume);
//   }

//   isBlue = !isBlue;
  
// })};


// const element = document.querySelector('.my-class');
// var running = true;

// // while (running == true)
// element.addEventListener('click', () => {
//   element.style.transform = 'scale(1.2)';
// });

// element.addEventListener('mouseleave', () => {
//   element.style.transform = 'scale(1)';
// });

const container = document.getElementById('container');
const element = document.querySelector('.my-class');
const ballList = document.createElement('div');

let volume = 0;



for (let i = 0; i <= 50; i++) {
  ballList.classList.add('my-class');
  container.appendChild(ballList);
  placement()
}

function placement(){
  const maxWidth = window.innerWidth - 10; // adjust to your desired element width
  const maxHeight = window.innerHeight - 50; // adjust to your desired element height

  element.style.top = `${Math.random() * maxHeight }px`;
  // console.log(element.style.top);
  element.style.left = `${Math.random() * maxWidth}px`;
};

function onClick() {
  // if (element.style.backgroundColor == "blue") {
  //   element.style.backgroundColor = "red"
  // } else {
  //   element.style.backgroundCOlor = "yellow"
  // };
  volume ++;
  console.log(volume);
  element.style.backgroundColor = "yellow";
}
element.addEventListener('click', onClick);

document.addEventListener('click', onClick);