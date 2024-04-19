// * CLASS TUBERIA
class Tuberia {
    // propiedades
    constructor(type, posY) {
        // nodo de la tuberia
        this.node = document.createElement("img")
        this.node.id = "tuberia"
        // imagen
        if (type === "arriba") {
            this.node.src = "./images/obstacle_top.png"
        }else if (type === "abajo") {
            this.node.src = "./images/obstacle_bottom.png"
        }
        // lo añadimos al gameBox
        gameBoxNode.append(this.node)

        // propiedades de posicion
        this.x = gameBoxNode.offsetWidth // posicion eje X
        this.y = posY // posicion eje Y
        this.w = 60 // ancho
        this.h = 250 // alto
        
        // top y left
        this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
        // height y width
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`

        //velocidad de movimiento
        this.speed = 2
        
    }

    // metodos
    //todo movimiento de tuberias
    automaticMovementEffect() {
        this.x -= this.speed
        this.node.style.left = `${this.x}px`
    }

}