function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultados = "";
    let encontrouAlgo = false;

    if (campoPesquisa.trim() === "") {
        section.innerHTML = "<p class='nenhum-resultado'>Nada foi encontrado...</p>";
        return;
    }

    for(let dado of dados){
        if(dado.nome.toLowerCase().includes(campoPesquisa)){
            encontrouAlgo = true;
            resultados += ` 
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.nome}">
                <div class="texto-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.nome}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                </div>
            </div>
            `;
        }
    }

    if (!encontrouAlgo) {
        section.innerHTML = "<p class='nenhum-resultado'>Nada foi encontrado...</p>";
    } else {
        section.innerHTML = resultados;
    }
}
