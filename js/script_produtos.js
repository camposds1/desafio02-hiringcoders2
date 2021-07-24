class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvaProduto() {
        let produto = this.lerDados();

        if(this.validaCampo(produto) == true) {
            this.adicionar(produto);
        }

        this.listaTabela();
        this.limpaCampo();
    }

    listaTabela() {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_fabricante = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_remover = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_fabricante.innerText = this.arrayProdutos[i].fabricante;
            td_valor.innerText = this.arrayProdutos[i].valor;

            td_id.classList.add("center");

            let imgDelete = document.createElement("img");
            imgDelete.src = "img/delete.png"
            imgDelete.setAttribute("onclick", "produto.deletaProduto("+ this.arrayProdutos[i].id +")");
            imgDelete.classList.add("hover");

            td_remover.appendChild(imgDelete);
            td_remover.classList.add("center");
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {}
        
        produto.id = this.id;
        produto.nomeProduto = document.getElementById("produto").value;
        produto.fabricante = document.getElementById("fabricante").value;
        produto.valor = document.getElementById("valor").value;
        
        return produto;
    }

    validaCampo(produto) {
        let msg = "";

        if(produto.nomeProduto == "") {
            msg += "- Informe o nome do produto\n";
        }

        if(produto.fabricante == "") {
            msg += "- Informe o fabricante do produto\n";
        }
        
        if(produto.valor == "") {
            msg += "- Informe o valor do produto\n";
        }

        if(msg != "") {
            alert(msg);
            return false;
        }

        return true;
    }

    limpaCampo() {
        document.getElementById("produto").value = ""
        document.getElementById("fabricante").value = ""
        document.getElementById("valor").value = ""
    }

    deletaProduto(id) {

        let tbody = document.getElementById("tbody");

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }

        alert("Produto excluído")
    }
}

var produto = new Produto()