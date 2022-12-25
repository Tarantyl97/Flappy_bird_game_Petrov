const imgURL = "..//images/main.png";
// const bottomSourceURL = "..//images/bgbottom.png";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let score = 0;

const img = new Image();
img.src = imgURL;

// const bottomSource = new Image();
// bottomSource.src = bottomSourceURL;
// константа для регулирования скорости анимации
const SPEED = 3.1;
const SIZE = [51, 36];
const BOTTOM = [150, 150];
const PIPETOP = [79, 450];
const PIPEBOTTOM = [79, 400]; //длина, высота
//768-100%, 384-50%  192-25%



// const drawScore = function () {
//     ctx.font = "25px Times New Roman";
//     ctx.fillStyle = "Black";
//     ctx.fillText("Score: " + score, 10, 50);
//     ctx.fillText("Best Score: " + BestScoreTable, 10, 10);
//     ctx.textAlign = "left";
//     ctx.textBaseline = "top";
// };

// let BestScoreTable = localStorage.getItem("score") ?? 0;

// if (BestScoreTable > score) {
//     localStorage.setItem("score", score)
// }

// const BestScore = function () {
//     let BestScoreTable2 = localStorage.setItem("score", score);
//     ctx.font = "20px Courier";
//     ctx.fillStyle = "Black";
//     ctx.textAlign = "left";
//     ctx.textBaseline = "top";
// };

// переменная, необходимая для расчёта
// новых координат на каждом кадре
let index = 0;
let birdIndex = 0;

const render = () => {
  index += 0.3;
  birdIndex += 0.3;
// координата по оси Х фонового изображения
  const backgroudX = -((index * SPEED) % canvas.width);

  // объект, который хотим получить
  // из изображения-источника
  const bgSource = { //фон полной картинки
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
  };

   // объект, который хотим
  // отобразить на Canvas
  const bgPartOneResult = { //движение фона 
    x: backgroudX + canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height,
  };

  const bgPartTwoResult = { //движение фона с наложением на первый
    x: backgroudX,
    y: 0,
    width: canvas.width,
    height: canvas.height,
  };
// изображение птицы, которое копируем
  // из изображения-источника
  const birdSource = {
    x: 432,
    y: Math.floor((index % 9) / 3) * SIZE[1],
    width: SIZE[0],
    height: SIZE[1],
    // gravity: 10,
};
// координаты, по которым птица
  // будет расположена на Canvas
const birdResult = {
    // gravity: 10,
    x: canvas.width / 2 - SIZE[0] / 2,
    y: Math.max(birdIndex * index), //падает с ускорением
    // y: Math.floor(canvas.height / birdSource.gravity + SIZE[0]),
    // y: canvas.height / 2 - SIZE[1] / 2,
    width: SIZE[0],
    height: SIZE[1],
    // draw() {
    //     ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    // },
    // fly() {
    //     this.y = (index * this.y);
    // },

    // moveBird() {
    //     // birdResult.gravity += -50.5;
    //     this.y = this.y - this.gravity; 
    // },
};



// fly()
// moveBird()

// console.log(birdResult)
    birdResult.y += birdIndex;
    // console.log(fly())
    canvas.onclick = () => {
        // moveBird()
        // console.log("click")
        // birdResult.y += 100;
        birdIndex = -15;
        // birdResult.fly()
        // birdResult.moveBird()
    }  
    // console.log(canvas.onclick)

    // function fly() {
    //     gravity = 5.5
    // birdResult.y = Math.floor(canvas.height / gravity + SIZE[0]);
    // birdResult.y = canvas.height / 2 + 100 - SIZE[1] / 2;
// };
    // canvas.addEventListener("click", () => {
    //     moveBird()
    //     fly()
        // ctx.drawImage(
        //     img,
        
        //     birdSource.x,
        //     birdSource.y,
        //     birdSource.width,
        //     birdSource.height,
        
        //     birdResult.x,
        //     birdResult.y,
        //     birdResult.width,
        //     birdResult.height,
        //   );

        // console.log("dssd")
    // });
    //     birdResult.y += 15

    // })
    // console.log(fly)

    // const isTubeOffScreen = pipe.x + pipe.width < 0
    // console.log(birdResult.y)

  const pipeSourceTop = {
    x: 432.5,  //смещение с права на лево 
    // y: Math.floor((index % 9) / 3) * PIPETOP[1],
    y: 150, //смещение трубы с верху до Math.floor(Math.random(y))
    width: PIPETOP[0],
    height: PIPETOP[1],
  };

//   if(birdResult.y > canvas.height) {
//     window.cancelAnimationFrame(render)
//   }

  const pipeResultTop = {
    x: backgroudX + canvas.width, //по оси х
    y: 0, //расположение по оси y
    // y: Math.floor(Math.random() * 250 + 50),
    width: PIPETOP[0],
    height: PIPETOP[1],
  };

  const pipeEndResultTop = {
    x: backgroudX, //по оси х
    y: 0, //расположение по оси y
    width: PIPETOP[0],
    height: PIPETOP[1],
  };
// canvas.onclick = () => {fly()}
  const pipeSourceBottom = {
    x: 511,  //смещение с права на лево 
    y: 100, //длина трубы с верху до Math.floor(Math.random(y))
    width: PIPEBOTTOM[0],
    height: PIPEBOTTOM[1],
  };

  const pipeResultBottom = {
    x: backgroudX + canvas.width, //по оси х
    y: 700, //расположение по оси y (должно быть одинаково)
    width: PIPEBOTTOM[0],
    height: PIPEBOTTOM[1],
  };

  const pipeEndResultBottom = {
    x: backgroudX, //по оси х
    y: 700, //расположение по оси y (должно быть одинаково)
    width: PIPEBOTTOM[0],
    height: PIPEBOTTOM[1],
  };

  function Tube(x) {
    this.x = x
    this.y = 0
    this.width = 60
    this.height = 150
    this.distanse = 150
    this.draw = () => {
        // ctx.fillStyle = "green";
        ctx.drawImage(img, this.x, this.y , this.width, this.height) //tube
        ctx.drawImage(img, this.x, this.height + this.distanse, this.width, canvas.height) //tube
    };
};

  ctx.drawImage(
    img,

    bgSource.x,
    bgSource.y,
    bgSource.width,
    bgSource.height,

    bgPartOneResult.x,
    bgPartOneResult.y,
    bgPartOneResult.width,
    bgPartOneResult.height
  );

  

  ctx.drawImage(
    img,

    bgSource.x,
    bgSource.y,
    bgSource.width,
    bgSource.height,

    bgPartTwoResult.x,
    bgPartTwoResult.y,
    bgPartTwoResult.width,
    bgPartTwoResult.height
  );

  ctx.drawImage(
    img,

    birdSource.x,
    birdSource.y,
    birdSource.width,
    birdSource.height,

    birdResult.x, 
    birdResult.y,
    birdResult.width,
    birdResult.height,

    // birdResult.fly(),
    // birdResult.moveBird()
  );

  ctx.drawImage(
    img,

    pipeSourceTop.x,
    pipeSourceTop.y,
    pipeSourceTop.width,
    pipeSourceTop.height,

    pipeResultTop.x,
    pipeResultTop.y,
    pipeResultTop.width,
    pipeResultTop.height
  );

  ctx.drawImage(
    img,

    pipeSourceTop.x,
    pipeSourceTop.y,
    pipeSourceTop.width,
    pipeSourceTop.height,

    pipeEndResultTop.x,
    pipeEndResultTop.y,
    pipeEndResultTop.width,
    pipeEndResultTop.height,
  );

  ctx.drawImage(
    img,

    pipeSourceBottom.x,
    pipeSourceBottom.y,
    pipeSourceBottom.width,
    pipeSourceBottom.height,

    pipeResultBottom.x,
    pipeResultBottom.y,
    pipeResultBottom.width,
    pipeResultBottom.height,
  );

  ctx.drawImage(
    img,

    pipeSourceBottom.x,
    pipeSourceBottom.y,
    pipeSourceBottom.width,
    pipeSourceBottom.height,

    pipeEndResultBottom.x,
    pipeEndResultBottom.y,
    pipeEndResultBottom.width,
    pipeEndResultBottom.height
  );
    if(birdResult.x && birdResult.y === pipeEndResultBottom.x && pipeEndResultBottom.y) {
        gameOver()
    }

    function gameOver() {
        ctx.fillStyle = "white";
        ctx.font = "40px Arial";
        ctx.fillText(`Game Over`, canvas.width / 4 , canvas.height / 2);
    }
//   window.cancelAnimationFrame(render)
  const aaa = window.requestAnimationFrame(render);
  if(birdResult.y > canvas.height - SIZE[1]) {
    window.cancelAnimationFrame(aaa)
    gameOver()
  }

//   canvas.onclick = () => {
//     fly() 
// }

//   if(score > BestScoreTable) {
//     BestScore();
//  } 
//   drawScore();
};

// function fly() {
//     if (SPEED === 0) SPEED = 1;
//     birdResult.fly();
//   };
//   document.addEventListener('click', fly);

img.onload = render;