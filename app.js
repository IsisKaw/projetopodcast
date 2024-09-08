function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Desculpe, não encontrei nenhum resultado para sua pesquisa. Você não digitou nenhum idioma.</p>"
        return
    }

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let idioma = "";
    let tag = "";

    campoPesquisa = campoPesquisa.toLowerCase()

    //para cada dado dentro da lista de dados
    // Itera sobre cada objeto de dado na lista 'dados'
    for(let dado of dados) {
        idioma = dado.idioma.toLocaleLowerCase();
        tag = dado.tags.toLocaleLowerCase()
        //se idioma includes campoPesquisa
        if (idioma.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
            // então, cria um novo elemento html para cada resultado 
            resultados += `<div class="item-resultado">
            <h2 class="idioma">${dado.idioma}</h2>
            <h3 class="iniciante">${dado.iniciante}</h3>
            <p class="tituloiciante">${dado.tituloiniciante}</p> 
            <p class="descricaoiniciante">${dado.descricaoiniciante}.</p>
            <a class="linkiniciante" href=${dado.linkiniciante} target="_blank">Ouça no Spotify</a> 
            <h3 class="intermediario">${dado.intermediario}</h3>
            <p class="titulointermediario">${dado.titulointermediario}</p> 
            <p class="descricaointermediario">${dado.descricaointermediario}</p>
            <a class="linkintermediario" href=${dado.linkintermediario} target="_blank">Ouça no Spotify</a> 
            <h3 class="avancado">${dado.avancado}</h3>
            <p class="tituloavancado">${dado.tituloavancado}</p> 
            <p class="descricaoavancado">${dado.descricaoavancado}</p>
            <a class="linkavancado" href=${dado.linkavancado} target="_blank">Ouça no Spotify</a> </div>`;
        }
    }
        
   if (!resultados) {
resultados = "<p>Desculpe, não encontrei nenhum resultado para sua pesquisa.</p>"
   }
    
    // Atribui o HTML gerado para o conteúdo interno da seção
    section.innerHTML = resultados

}