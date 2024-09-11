function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";
    let Nome = "";
    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "<p>DIGITE UM NOME DE SUPER-HERÓI.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    resultados = "";
    for (let filme of filmes) {       
        Nome = filme.Nome.toLowerCase(); 
        if (Nome.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        ${filme.Nome}
                    </h2>
                    <p class="descricao-meta">
                        ${filme.Descricao}
                    </p>
                    <p class="descricao-meta">
                        ${filme.Poderes}
                    </p>  
                    <p>
                        <a href=${filme.Link} target="_blank">Mais informações</a>
                    </p>
                </div>
            `
        }
    }

    if (!resultados) {
        section.innerHTML = "<p>PERSONAGEM NÃO ENCONTRADO, TENTE NOVAMENTE.</p>";
    } else {
        section.innerHTML = resultados;
    }
}