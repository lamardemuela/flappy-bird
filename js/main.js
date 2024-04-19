//* ELEMENTOS DE DOM Y VARIABLES GLOBALES

// pantallas
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// botones
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")

// game: estará vacío y la llamaremos cuando inicie el juego
let game; //la ponemos en el scope global para poder acceder a ella desde cualquier lugar



//* FUNCIONES GLOBALES DE CAMBIO DE ESTADO E INICIO
function startGame() {
    //1. ocultar la pantalla de inicio
    splashScreenNode.style.display = "none"
    //2. mostrar pantalla de juego
    gameScreenNode.style.display = "flex"
    //3. iniciar el juego
    game = new Game()
    console.log(game) //vemos qué es Game en consola para ver qué tenemos
    game.start() //invocamos el método start de nuestra clase Game
    game.iniciarFrecuenciaTuberias()
}





//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame) //la función sólo la nombramos, no hay que invocarla

gameBoxNode.addEventListener("click", () => {
    game.pollito.jumpEffect()
})




