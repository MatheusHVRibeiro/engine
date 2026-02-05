class PopUp{
    constructor(){
        this.x = window.innerWidth / 3;
        this.y = window.innerHeight / 3;

        this.div = document.createElement("div");
        this.div.className = "menu";
        this.div.style.position = "absolute";
        this.div.style.backgroundColor = "white";
        this.div.style.border = "1px solid black";
        this.div.style.padding = "5px";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.display = "flex";
        this.div.style.flexDirection = "column";

        this.fecha = document.createElement("button");
        this.fecha.id = "botao_fecha"
        this.fecha.onclick = ()=>{
            this.fechar();
        };
        this.div.appendChild(this.fecha);

    }
    fechar(){
        document.body.removeChild(this.div);
    }
} 

export class Alerta extends PopUp{
    constructor(texto) {
        super();
        this.alerta = document.createElement("label");
        this.alerta.innerText = texto;
        this.div.appendChild(this.alerta);

        this.adiciona = document.createElement("button");
        this.adiciona.innerText = "OK"
        this.div.appendChild(this.adiciona);

        this.adiciona.addEventListener("click", () => {
            this.fechar();
        });
        document.body.appendChild(this.div);
    }
}