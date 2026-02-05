class Sprite {
    constructor() {
        this.table = document.getElementById("grid");
        this.montar = document.getElementById("montar");
        this.tamanho = document.getElementById("tamanho");
        this.paleta_input = document.getElementById("paleta");

        this.montar.onclick = () => {
            const tamanho_grid = Number(tamanho.value);
            this.dimencionar_paleta(tamanho_grid);
            this.dimencionar_sprite(tamanho_grid);
        };
        this.init();
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
            aux.type = "color";
            this.paleta_input.appendChild(aux);
        }
    }
}

const sprite = new Sprite;