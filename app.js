let amigos = [];
let amigoAdicionado = document.getElementById("amigo")
let listaDeAmigos = document.getElementById("listaAmigos")
let resultado = document.getElementById("resultado")

//adicionar amigo
function adicionarAmigo() {
    let nomeDoAmigo = amigoAdicionado.value

    if (nomeDoAmigo == "") {
        alert("Por favor, insira um nome");
        return;
    }

    if (amigos.includes(nomeDoAmigo)) {
        alert("esse amigo já foi adicionado");
        return;

    } else amigos.push(nomeDoAmigo);
    atualizarLista();
    amigoAdicionado.value = "";
}

//amigos na tela 
function atualizarLista() {
    listaDeAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement("li")
        item.textContent = amigo;
        listaDeAmigos.appendChild(item);
    });
}

//sortear o amigo

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, adicione um amigo");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML += `<li>O amigo secreto sorteado é: ${amigoSorteado} </li>`;

}