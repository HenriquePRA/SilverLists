// recebe um json com os dados de um livro e o insere no container de livros
const pushCard = (livro) => {
    const cartao = document.createElement("div");
    cartao.className = "cartao";
    cartao.id = livro.id

    // thumbnail
    const cardimg = document.createElement("div");
    const img = document.createElement("img");
    const imglinks = livro.volumeInfo.imageLinks
    if (imglinks) {
        img.src = imglinks.thumbnail;
    } else {
        img.src = "https://via.placeholder.com/150x180"
    } 

    cardimg.className = "card_imagem";
    cardimg.appendChild(img);

    // txt container
    const txtContainer = document.createElement("div")
    txtContainer.style.width = "100%"

    // titulo
    const cardtitle = document.createElement("div");
    const title = document.createElement("p");
    let sub_title = "";
    if (livro.volumeInfo.title) {
        let tamanho = livro.volumeInfo.title.length
        if (tamanho > 55) tamanho = 55 
        for (let i = 0; i < tamanho; i++) {
            if (livro.volumeInfo.title[i] !== undefined) {
                sub_title += livro.volumeInfo.title[i];
            }
        }
        if (tamanho === 55) sub_title += "..."
    } else {
        sub_title = "Livro sem Título"
    }
    title.innerHTML = sub_title;

    if (livro.volumeInfo.title.length > 26) {
        cardtitle.classList.add("longtitle")
    }

    cardtitle.classList.add("card_titulo");
    cardtitle.appendChild(title);

    // descrição
    const carddescricao = document.createElement("div");
    const descricao = document.createElement("p");
    

    carddescricao.className = "card_descricao";
    carddescricao.appendChild(descricao);
    
    let sub_descri = "";
    if (livro.volumeInfo.description) {
        for (let i = 0; i < 90; i++) {
            if (livro.volumeInfo.description[i]!== undefined) {
                sub_descri += livro.volumeInfo.description[i]
            }
        }
        if (livro.volumeInfo.description.length > 90) sub_descri += "..."
    } else {
        sub_descri = livro.volumeInfo.title + ", não possúi descrição."
    }
    
    descricao.innerHTML = sub_descri

    txtContainer.appendChild(cardtitle);
    txtContainer.appendChild(carddescricao)
    cartao.appendChild(cardimg)
    cartao.appendChild(txtContainer)

    document.querySelector("#displayCards").appendChild(cartao)
}