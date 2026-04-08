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

        this.conteudo = document.createElement("div");
        this.div.appendChild(this.conteudo);
    }
    fechar(){
        document.body.removeChild(this.div);
    }
    mostrar(){
        document.body.appendChild(this.div);
    }
} 

export class Alerta extends PopUp{
    constructor(texto) {
        super();
        this.alerta = document.createElement("label");
        this.alerta.innerText = texto;
        this.conteudo.appendChild(this.alerta);

        this.ok = document.createElement("button");
        this.ok.innerText = "OK"
        this.div.appendChild(this.ok);

        this.ok.addEventListener("click", () => {
            this.fechar();
        });
        document.body.appendChild(this.div);
    }
}

export class EditorPaleta extends PopUp{
    constructor(tamanho_grid){
        console.log(tamanho_grid);
        super();
        this. paleta = ['#000000', '#000000', '#000000'];
        this.conteudo.innerHTML = "";
        this.tamanho_paleta = 0;
        let aux;

        if (tamanho_grid == 8 || tamanho_grid == 16) {
            this.tamanho_paleta = 3;
        } else if (tamanho_grid == 32) {
            this.tamanho_paleta = 7;
        } else if (tamanho_grid == 64) {
            this.tamanho_paleta = 15;
        }

        for (let i = 0; i < this.tamanho_paleta; i++) {
            aux = document.createElement("input");
            aux.type = "color";
            this.conteudo.appendChild(aux);
        }

        this.ok = document.createElement("button");
        this.ok.innerText = "OK"
        this.div.appendChild(this.ok);

        this.ok.onclick = () => {
            this.confirma();
            this.fechar();
        };
    }
    redimencioar(tamanho_grid){
        this.conteudo.innerHTML = "";
        let aux;

        if (tamanho_grid == 8 || tamanho_grid == 16) {
            this.tamanho_paleta = 3;
        } else if (tamanho_grid == 32) {
            this.tamanho_paleta = 7;
        } else if (tamanho_grid == 64) {
            this.tamanho_paleta = 15;
        }

        for (let i = 0; i < this.tamanho_paleta; i++) {
            aux = document.createElement("input");
            aux.type = "color";
            this.conteudo.appendChild(aux);
        }
    }

    confirma(){
        let botoes = document.getElementById("paleta").children;

        for(let i = 0; i < this.tamanho_paleta; i++){
            this.paleta[i] = this.conteudo.children[i].value;
            botoes[i].style.backgroundColor = this.conteudo.children[i].value;
            botoes[i].value = this.conteudo.children[i].value;
            botoes[i].readOnly = true;
        }
        
    }
}

export class NovoSprite extends PopUp{
    constructor(){
        super();

        this.tamanho = 32;

        this.titulo = document.createElement("h2");
        this.titulo.innerText = "Criar novo Sprite";

        this.label = document.createElement("label");
        this.label.innerText = "Tamanho da paleta: ";
        
        this.select = document.createElement("select");

        let op = document.createElement("option");
        op.value = "8";
        op.innerText = "8x8"
        this.select.appendChild(op);

        op = document.createElement("option");
        op.value = "16";
        op.innerText = "16x16"
        this.select.appendChild(op);

        op = document.createElement("option");
        op.value = "32";
        op.innerText = "32x32"
        this.select.appendChild(op);

        op = document.createElement("option");
        op.value = "64";
        op.innerText = "64x64"
        this.select.appendChild(op);

        this.confirma = document.createElement("button");
        this.confirma.innerText = "criar";
        this.confirma.onclick = () =>{
            this.fechar();
            this.tamanho = Number(this.select.value);
        };

        this.div.appendChild(this.titulo);
        this.div.appendChild(this.label);
        this.div.appendChild(this.select);
        this.div.appendChild(this.confirma);
    }
}