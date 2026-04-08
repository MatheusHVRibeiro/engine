import {EditorPaleta} from "./popup.js";
import {NovoSprite} from "./popup.js"

class Sprite {
    constructor() {
        this.table = document.getElementById("grid");
        this.criar = document.getElementById("criar");
        this.criador = new NovoSprite();
        this.tamanho = document.getElementById("select_tamanho");
        this.paleta_input = document.getElementById("paleta");
        this.botao_editar = document.getElementById("edita_paleta");
        this.editorPaleta = new EditorPaleta(16);
        this.selectedColor = "#000000"

        this.botao_editar.onclick = ()=>{
            this.editorPaleta.mostrar();
        };

        this.criar.onclick = () => {
            this.criador.mostrar();
            const tamanho_grid = this.criador.tamanho;
            this.dimencionar_paleta(tamanho_grid);
            this.dimencionar_sprite(tamanho_grid);
            this.editorPaleta.redimencioar(tamanho_grid);
        };
        this.init();
    }
    
    select_color(){
        

    }

    init(){
        this.dimencionar_paleta(16);
        this.dimencionar_sprite(16);
    }

    dimencionar_sprite(tamanho_grid) {
        this.table.innerHTML = "";
        let tr;
        let td;

        for (let i = 0; i < tamanho_grid; i++) {
            tr = document.createElement("tr");
            for (let j = 0; j < tamanho_grid; j++) {
                td = document.createElement("td");
                td.innerText = "";
                tr.appendChild(td);
            }
            this.table.appendChild(tr);
        }
    }

    dimencionar_paleta(tamanho_grid) {
        this.paleta_input.innerHTML = "";
        let tamanho_paleta = 0;
        let aux;

        if (tamanho_grid == 8 || tamanho_grid == 16) {
            tamanho_paleta = 3;
        } else if (tamanho_grid == 32) {
            tamanho_paleta = 7;
        } else if (tamanho_grid == 64) {
            tamanho_paleta = 15;
        }

        for (let i = 0; i < tamanho_paleta; i++) {
            aux = document.createElement("input");
            aux.type = "ratio";
            aux.name = "paleta";
            aux.className = "paleta";
            aux.style.backgroundColor = "black";
            this.paleta_input.appendChild(aux);
        }
    }
}

const sprite = new Sprite;