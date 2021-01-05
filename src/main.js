const resetContainer = (headerName) => {
    const header = document.querySelector("#displayHeader").firstElementChild
    header.innerHTML = headerName
    const CardsContainer = document.querySelector("#displayCards")
    CardsContainer.innerHTML = ""
}

window.onload = () => {
    search("programming", 12).then((ret) => {
        resetContainer("Escolhas da Plataforma")
        ret.forEach(livro => {
            pushCard(livro)
        });
    })
}

// bloco de pesquisa
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn")

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const texto = searchInput.value
    let tipo = document.querySelector('input[name="pesquisarPor"]:checked').id

    search(texto, undefined).then((ret) => {
        if (ret) {
            resetContainer("Resultados da Pesquisa: " + tipo + " = " + texto)
            ret.forEach(livro => {
                pushCard(livro)
            })            
        }
    })
})

document.querySelectorAll(".radiobtn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.firstElementChild.checked = true;
    })
})