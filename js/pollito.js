// * CLASS POLLITO

class Pollito {
    //propiedades
    constructor() {
        // nodo del pollito
        this.node = document.createElement("img")
        this.node.id = "pollito"
        // imagen
        this.node.src = "./images/flappy.png"

        // lo añadimos al gameBox
        gameBoxNode.append(this.node)

        // propiedades de posicion
        this.x = 50 // posicion eje X
        this.y = 60 // posicion eje Y
        this.w = 40 // ancho
        this.h = 35 // alto
        this.node.style.position = "absolute"
        // top y left
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
        // height y width
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        // velocidad gravedad
        this.gravitySpeed = 2
        // velocidad salto
        this.jumpSepeed = 40
    }

    // metodos
    //efecto de gravedad del pollito
    gravityEffect() {
        if ((this.y + this.h) < gameBoxNode.offsetHeight) {
            this.y += this.gravitySpeed
            //! SIEMPRE QUE MODIFIQUEMOS ALGO DE UN ELEMETO DE DOM, TENEMOS QUE ACTUALIARLO 
            //en este caso, actualizamos la posición top, de la que depende el eje Y
            this.node.style.top = `${this.y}px`
        }
        
    }

    //efect de salto del pollito
    jumpEffect() {
        if (this.y > 0){
            this.y -= this.jumpSepeed
        //actualizamos la propiedad top
        this.node.style.top = `${this.y}px`
        }
    }
}