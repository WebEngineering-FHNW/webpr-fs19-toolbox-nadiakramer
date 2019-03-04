
const radius = 10;
const ball = {x:20, y:0, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "white";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 40);
}


function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    old.y = old.y + ball.dy;
    old.x = old.x + ball.dx;

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies
    if (ball.x > 400){
        ball.dx = -(ball.dx);
    }

    if (ball.x < 0){
        ball.dx = -(ball.dx);
    }

    if (ball.y > 400){
        ball.dy = -(ball.dy);
        ball.dy *= 0.9;
    }

    if (ball.y < 0){
        ball.dy = -(ball.dy);
        ball.dy *= 0.9;
    }

    // calculate new position
    // calculate any changes in velocity due to gravitationial pull or medium resistance
        ball.dy += 0.2;
        ball.x = ball.x + ball.dx;
        ball.y = ball.y + ball.dy;
}

function display(context) {
    context.clearRect(old.x - radius - 6, old.y - radius - 2, 30, 30 );
    fillBox(context);
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}




