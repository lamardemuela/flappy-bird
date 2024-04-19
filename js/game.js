// * CLASS GAME
class Game {
    // propiedades
    constructor() {
        // background CHECK (en style.css)
        // Creamos un pollito: el juego empieza con un pollito
        this.pollito = new Pollito()
        // creamos tuberias
        // this.unaTuberia = new Tuberia() //ejemplo si hubiera solo una tuberia
        this.tuberiasArr = []
        //propiedad para almacenar los IDs de los intervalos
        this.gameIntervalId
        this.tuberiasIntervalId
    }

    // metodos
    // efecto de cuando las tuberias aparecen. Creamos una función de frecuencia
    tuberiaAparece() {
        //las tuberias van a aparecer de dos en dos, es decir, en lugar de crear una, creamos dos
        //primero definimos la posicion aleatoria de las tuberias en el ejeY
        let randomPosY = Math.floor(Math.random() * -200) //valor aleatorio (y redondeado) etre -200 y 0
        let distanciaEntreTuberias =  350
        let nuevaTuberia1 = new Tuberia("arriba", randomPosY)
        this.tuberiasArr.push(nuevaTuberia1)

        let nuevaTuberia2 = new Tuberia("abajo", randomPosY + distanciaEntreTuberias)
        this.tuberiasArr.push(nuevaTuberia2)
    }

    iniciarFrecuenciaTuberias() {
        this.tuberiasIntervalId = setInterval(() => {
            this.tuberiaAparece()
        }, 2000)
    }

    //efecto de cuando las tuberias desaparecen
    eliminarTuberiasAlSalirDeLaPantalla() {
        this.tuberiasArr.forEach( (cadaTuberia, index) => {
            if ( (cadaTuberia.x + cadaTuberia.w) < 0 ) {
                //! al eliminar elementos de juego, debo considerar:
                //! 1. Debo eliminar el objeto, en este caso del array
                this.tuberiasArr.splice(index, 1) //remueve el elemento del array
                //! 2. Debo eliminar el nodo del DOM
                cadaTuberia.node.remove()
            }
        } )
    }

    // colision entre pollito y tuberias
    colisionPollitoTuberias() { 
        //comparamos cada pollito, que será this.pollito con cadaTuberia
        this.tuberiasArr.forEach( (cadaTuberia) => {
            if (
                this.pollito.x < cadaTuberia.x + cadaTuberia.w &&
                this.pollito.x + this.pollito.w > cadaTuberia.x &&
                this.pollito.y < cadaTuberia.y + cadaTuberia.h &&
                this.pollito.y + this.pollito.h > cadaTuberia.y
              ) {
                // Collision detected!
                console.log("el pollito se estampó");
                this.gameOver()
              }
        } )
    }

    // acción de gameOver
    gameOver() {
        // 1. tenemos que hacer que todos los intervalos se detengan
        clearInterval(this.gameIntervalId)
        clearInterval(this.tuberiasIntervalId)
        // 2. ocultar la pantalla de juego
        gameScreenNode.style.display = "none"
        // 3. mostrar la pantalla de game over
        gameOverScreenNode.style.display = "flex"

    }

    // metodo para guardar todo lo que se va a ejecutar dentro de setInterval
    gameLoop(){
        //invocamos la función de efecto de gravedad: le decimos al código que el pollito tiene que moverse hacia abajo
        this.pollito.gravityEffect()
        // this.unaTuberia.automaticMovementEffect()//ejemplo si hubiera solo una tuberia
        this.tuberiasArr.forEach((cadaTuberia) => {
            cadaTuberia.automaticMovementEffect()
        })
        this.eliminarTuberiasAlSalirDeLaPantalla()
        this.colisionPollitoTuberias()
    }


    start() {
        this.gameIntervalId = setInterval( () => {
            this.gameLoop()
        }, Math.round(1000/60) )
    }

}

