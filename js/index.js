const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(c);

class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velX = 0;
        this.velY = 0;
        this.accX = 0;
        this.accY = 0;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    update() {
        this.velX += this.accX;
        this.velY += this.accY;

        if (this.x > innerWidth - this.radius) {
            this.velX = -Math.abs(this.velX) * 0.9;
        } else if (this.x < this.radius) {
            this.velX = Math.abs(this.velX) * 0.9;
        } else if (this.y > innerHeight - this.radius) {
            this.velY = -Math.abs(this.velY) * 0.9;
        } else if (this.y < this.radius) {
            this.velY = Math.abs(this.velY) * 0.9;
        }

        this.x += this.velX;
        this.y += this.velY;

    }
}

class Projectile {
    constructor(x, y, radius, color, velicity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.velicity = velicity;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}

const player = new Player(canvas.width / 2, canvas.height / 2, 20, 'black');
player.draw();

// addEventListener('click', (event) => {
//     const prog = new Projectile(canvas.width / 2, canvas.height / 2, Math.random() * 10, 'red', 0);
//     prog.draw();
// });

addEventListener('keydown', function(event) {
    console.log(event);
    if (event.key == 'ArrowDown') {
        player.accY = 0.05;
    }
    if (event.key == 'ArrowUp') {
        player.accY = -0.05;
    }
    if (event.key == 'ArrowRight') {
        player.accX = 0.05;
    }
    if (event.key == 'ArrowLeft') {
        player.accX = -0.05;
    }
    if (event.key == 'w') {
        player.velX = 0;
        player.velY = 0;
    }
});

addEventListener('keyup', function(event) {
    if (event.key == 'ArrowDown') {
        player.accY = 0;
    }
    if (event.key == 'ArrowUp') {
        player.accY = 0;
    }
    if (event.key == 'ArrowRight') {
        player.accX = 0;
    }
    if (event.key == 'ArrowLeft') {
        player.accX = 0;
    }
});

addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

setInterval(() => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    player.draw();
}, 5)