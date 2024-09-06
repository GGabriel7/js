const contBalls = document.querySelector('span');
let totalBalls = 50;
contBalls.textContent = totalBalls;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


// FUNÇÔES
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomColor = () => {
    const number = ['0', '1', '2', '3' , '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    let color = '';

    for (let i=0; i < 6; i++) {
        color += number[Math.floor(Math.random() * 16)];
    }

    return `#${color}`;
}

//FORMATO DOS OBJETOS
class Shape {

    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

//DEFININDO AS BOLAS
class Ball extends Shape {

    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);

        this.color = color;
        this.size = size;
        this.exists = true;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX)
        }

        if ((this.x + this.size) <= 0) {
            this.velX = -(this.velX)
        }

        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY)
        }

        if ((this.y + this.size) <= 0) {
            this.velY = -(this.velY)
        }

        this.x += this.velX
        this.y += this.velY
    }

    collisionDetect() {
        for (const ball of balls) {
          if (!(this === ball) && ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
                ball.color = this.color = randomColor();
            }
          }
        }
      }
    
}


//DEFININDO CIRCULO
class EvilCircle extends Shape {
    constructor(x, y) {
        super(x, y, 20, 20);

        this.color = 'white';
        this.size = 10;

        window.addEventListener("keydown", (event) => {
            switch (event.key) {
              case "a":
                this.x -= this.velX;
                break;
              case "d":
                this.x += this.velX;
                break;
              case "w":
                this.y -= this.velY;
                break;
              case "s":
                this.y += this.velY;
                break;
            }
          });
    }

    draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    checkBounds() {
        if ((this.x + this.size) >= width) {
            this.x -= this.size;
        }
      
        if ((this.x - this.size) <= 0) {
            this.x += this.size;
        }
    
        if ((this.y + this.size) >= height) {
            his.y -= this.size;
        }
    
        if ((this.y - this.size) <= 0) {
            this.y += this.size;
        }
    }

    collisionDetect() {
        for (const ball of balls) {
          if (ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
                ball.exists = false;
                totalBalls--
                contBalls.textContent = totalBalls;
            }
          }
        }
      }
}

const balls = []

while (balls.length < totalBalls) {
    const size = randomNumber(10, 20)

    const ball = new Ball(
        randomNumber(0 + size, width - size), 
        randomNumber(0 + size, height - size), 
        randomNumber(-7, 7), 
        randomNumber(-7, 7), 
        randomColor(), 
        size,
    );

    balls.push(ball);
}

const evilCircle = new EvilCircle(randomNumber(0, width), randomNumber(0, height))

function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 15%)";
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        if (ball.exists) {
            ball.draw()
            ball.update()
            ball.collisionDetect()
        }
    }

    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    requestAnimationFrame(loop);
}

loop();