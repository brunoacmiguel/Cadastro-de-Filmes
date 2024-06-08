
let cont = 0;
function addFilme() {
    var tituloFilme = document.getElementById('titulo').value;
    var diretorFilme = document.getElementById('diretor').value;
    var anoFilme = document.getElementById('ano').value;
    var listaFilme = document.getElementById('lista');

    class Filme {
        constructor(t, d, a) {
            this.t = t;
            this.d = d;
            this.a = a;
        }

        dadosFilme() {
            return `O título do filme é: ${this.t} <br> O diretor do filme é ${this.d} <br> O ano de lançamento do filme é: ${this.a} <br> <br>`;
        }
    }

    if (tituloFilme === "" || diretorFilme === "" || isNaN(anoFilme) || anoFilme === "") {
        alert('Preencha Todos os Campos');
    } else {
        let novoFilme = new Filme(tituloFilme, diretorFilme, anoFilme);
        let dadosDoFilme = novoFilme.dadosFilme();
        cont += 1;
        listaFilme.innerHTML = listaFilme.innerHTML + dadosDoFilme;
        window.document.getElementById("cont").innerHTML = `(${cont})`
    }
}
