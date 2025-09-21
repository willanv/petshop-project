let value = [
    {
        id: 1,
        nome: "Ração Úmida Pedigree 100g",
        categoria: "cachorro",
        preco: 3.99,
        imagem: "img/img_produtos/racao-pedigree-100g.png",
        descricao: "Indicada para cães, refeição 100% completa Sem conservantes, sem corantes e sem aromas artificiais;"
    },
    {
        id: 2,
        nome: "Tapetes Higiênicos (30 un.)",
        categoria: "cachorro",
        preco: 39.99,
        imagem: "img/img_produtos/tapetes-higienicos.png",
        descricao: "Desenvolvidos com 7 camadas de proteção, esses tapetes oferecem máxima absorção e mantêm o ambiente limpo e seco por muito mais tempo."
    },
    {
        id: 3,
        nome: "Ração Úmida Whiskas 85g",
        categoria: "gato",
        preco: 3.99,
        imagem: "img/img_produtos/racao-whiskas-85g.png",
        descricao: "Refeição completa e balanceada, suculentos pedacinhos cozidos a vapor, ajuda a manter a saúde do trato urinário"
    },
];

let produtosvalue = document.querySelector(".container-produtos");

function mostrarvalue() {
    let htmlvalue = ""

    value.forEach(prd => {

        htmlvalue = htmlvalue + `
        <div class="cartao-value">
           <img src="${prd.imagem}" class="imagem-value">
           <div class="info-value">
              <h3 class="nome-value">${prd.nome}</h3>
              <p class="descricao-value">${prd.descricao}</p>
              <p class="preco-value">R$ ${prd.preco}</p>
           </div>
        </div>   
        `
    })

    produtosvalue.innerHTML = htmlvalue


}

mostrarvalue()