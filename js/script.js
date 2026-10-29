const listaItens = [
  { id: 1, nome: "Poké Ball", preco: 200, imagem: "./img/pokeball.png" },
  { id: 2, nome: "Potion", preco: 300, imagem: "./img/potion.png" },
  { id: 3, nome: "Antidote", preco: 100, imagem: "./img/antidote.png" },
  { id: 4, nome: "Great Ball", preco: 600, imagem: "./img/greatball.png" },
  { id: 5, nome: "Super Potion", preco: 700, imagem: "./img/superpotion.png" },
  { id: 6, nome: "Parlyz Heal", preco: 200, imagem: "./img/paralyzeheal.png" },
  { id: 7, nome: "Awakening", preco: 250, imagem: "./img/awekening.png" },
  { id: 8, nome: "Burn Heal", preco: 250, imagem: "./img/burnheal.png" },
  { id: 9, nome: "Ice Heal", preco: 250, imagem: "./img/ice-heal.png" },
  { id: 10, nome: "Repel", preco: 350, imagem: "./img/repel.png" },
  { id: 11, nome: "Escape Rope", preco: 550, imagem: "./img/escaperope.png" },
  {
    id: 12,
    nome: "Hyper Potion",
    preco: 1200,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CeA73E3DVgMbXNlZMXBOkCJ7syI_JgXc7PBe83rwp9MrnVRI-Phy8TY&s=10",
  },
  {
    id: 13,
    nome: "Max Repel",
    preco: "700",
    imagem:
      "https://static.wikia.nocookie.net/pokemon-daybreak/images/2/2e/Bag_Max_Repel_Sprite.png/revision/latest/thumbnail/width/360/height/450?cb=20200814060008",
  },
  {
    id: 14,
    nome: "Super Repel",
    preco: "500",
    imagem: "https://pokestop.io/img/item/super-repel-160x160.png",
  },
  {
    id: 15,
    nome: "Revive",
    preco: "1500",
    imagem:
      "https://static.wikia.nocookie.net/project-pokemon/images/1/13/Revive.png/revision/latest?cb=20170106012058",
  },
  {
    id: 16,
    nome: "Full Restore",
    preco: "3000",
    imagem: "https://pokestop.io/img/item/full-restore-160x160.png",
  },
  {
    id: 17,
    nome: "Ultra Ball",
    preco: "1200",
    imagem:
      "https://www.nicepng.com/png/detail/267-2670644_ultra-ball-ultra-ball-pixel-art.png",
  },
  {
    id: 18,
    nome: "Master Ball",
    preco: "99999999",
    imagem:
      "https://i.pinimg.com/474x/62/6c/ff/626cff6c573acc236180e6630d5cefb3.jpg",
  },
];

const listaTMs = [
  {
    id: 101,
    nome: "TM01 Mega Punch",
    preco: 3000,
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm125.png",
  },
  {
    id: 102,
    nome: "TM02 Razor Wind",
    preco: 2000,
    imagem: "https://assets.pokeos.com/items/408.png",
  },
  {
    id: 103,
    nome: "TM05 Mega Kick",
    preco: 3000,
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm125.png",
  },
  {
    id: 104,
    nome: "TM07 Horn Drill",
    preco: 2000,
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm104.png",
  },
  {
    id: 105,
    nome: "TM09 Take Down",
    preco: 3000,
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm125.png",
  },
  {
    id: 106,
    nome: "TM15 Hyper Beam",
    preco: 5500,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweAXLxMiUa1TjIAJTC-Z10qBRhW5tWyaOFknnnWkjKA&s",
  },
  {
    id: 107,
    nome: "TM17 Submission",
    preco: 3000,
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm125.png",
  },
  {
    id: 108,
    nome: "TM19 Seismic Toss",
    preco: 3000,
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm125.png",
  },
  {
    id: 109,
    nome: "TM21 Mega Drain",
    preco: 2000,
    imagem: "https://assets.pokeos.com/items/408.png",
  },
  {
    id: 110,
    nome: "TM23 Iron Tail",
    preco: 3000,
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm125.png",
  },
  {
    id: 111,
    nome: "TM03 - Swords Dance",
    preco: "3000",
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm125.png",
  },
  {
    id: 112,
    nome: "TM04 - Whirlwind",
    preco: "2000",
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm025.png",
  },
  {
    id: 113,
    nome: "TM06 - Toxic",
    preco: "4000",
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm042.png",
  },
  {
    id: 114,
    nome: "TM08 - Body Slam",
    preco: "3000",
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm078.png",
  },
  {
    id: 115,
    nome: "TM10 - Double-Edge",
    preco: "4000",
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm010.png",
  },
  {
    id: 116,
    nome: "TM11 - Bubble Beam",
    preco: "2500",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweAXLxMiUa1TjIAJTC-Z10qBRhW5tWyaOFknnnWkjKA&s",
  },
  {
    id: 117,
    nome: "TM12 - Water Gun",
    preco: "1000",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweAXLxMiUa1TjIAJTC-Z10qBRhW5tWyaOFknnnWkjKA&s",
  },
  {
    id: 118,
    nome: "TM13 - Ice Beam",
    preco: "4500",
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm010.png",
  },
  {
    id: 119,
    nome: "TM14 - Blizzard",
    preco: "5500",
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm010.png",
  },
  {
    id: 120,
    nome: "TM16 - Pay Day",
    preco: "2000",
    imagem: "https://www.serebii.net/itemdex/sprites/sv/tm025.png",
  },
];

const catalogoCompleto = [...listaItens, ...listaTMs];
let carrinho = {};

const elementoGrade = document.getElementById("grade-produtos");
const elementoTituloProdutos = document.getElementById("titulo-produtos");
const elementoListaCarrinho = document.getElementById("lista-carrinho");
const elementoTotal = document.getElementById("valor-total");
const botaoFinalizar = document.getElementById("botao-finalizar");
const modalSucesso = document.getElementById("modal-sucesso");

function renderizarProdutos(listaParaMostrar) {
  elementoGrade.innerHTML = "";

  listaParaMostrar.forEach((produto) => {
    const cartao = document.createElement("article");
    cartao.className = "cartao-produto";

    cartao.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="imagem-produto">
            <h3 class="nome-produto">${produto.nome}</h3>
            <div class="rodape-cartao">
                <span class="texto-escuro">$ ${produto.preco}</span>
                <button class="botao-comprar-item" onclick="adicionarAoCarrinho(${produto.id})">Comprar</button>
            </div>
        `;
    elementoGrade.appendChild(cartao);
  });
}

function mudarAba(aba) {
  document.getElementById("aba-itens").classList.remove("ativo");
  document.getElementById("aba-tms").classList.remove("ativo");

  // Limpa o texto da barra de pesquisa ao mudar de aba
  inputPesquisa.value = "";

  if (aba === "itens") {
    document.getElementById("aba-itens").classList.add("ativo");
    elementoTituloProdutos.innerText = "Itens Disponíveis";
    renderizarProdutos(listaItens);
  } else {
    document.getElementById("aba-tms").classList.add("ativo");
    elementoTituloProdutos.innerText = "Máquinas Técnicas (TMs)";
    renderizarProdutos(listaTMs);
  }
}

function mudarTema(novoTema) {
  document.body.className = "";
  if (novoTema !== "padrao") document.body.classList.add(novoTema);
}

function adicionarAoCarrinho(idProduto) {
  carrinho[idProduto] = (carrinho[idProduto] || 0) + 1;
  atualizarCarrinho();
}

function removerDoCarrinho(idProduto) {
  if (carrinho[idProduto]) {
    carrinho[idProduto]--;
    if (carrinho[idProduto] <= 0) delete carrinho[idProduto];
  }
  atualizarCarrinho();
}

function atualizarCarrinho() {
  elementoListaCarrinho.innerHTML = "";
  let valorTotal = 0;
  const idsNoCarrinho = Object.keys(carrinho);

  if (idsNoCarrinho.length === 0) {
    elementoListaCarrinho.innerHTML =
      '<p style="color: #000;">Sua mochila está vazia.</p>';
    elementoTotal.innerText = "$ 0";
    botaoFinalizar.disabled = true;
    return;
  }

  botaoFinalizar.disabled = false;

  idsNoCarrinho.forEach((idString) => {
    const idInt = parseInt(idString);
    const quantidade = carrinho[idInt];
    const produtoInfo = catalogoCompleto.find((p) => p.id === idInt);

    valorTotal += produtoInfo.preco * quantidade;

    const divItem = document.createElement("div");
    divItem.className = "item-carrinho";
    divItem.innerHTML = `
            <div class="info-item">
                <div class="nome-item">${produtoInfo.nome}</div>
                <div class="texto-escuro">$ ${produtoInfo.preco}</div>
            </div>
            <div class="controles-quantidade">
                <button class="botao-qtd" onclick="removerDoCarrinho(${idInt})">-</button>
                <span class="texto-escuro">${quantidade}</span>
                <button class="botao-qtd" onclick="adicionarAoCarrinho(${idInt})">+</button>
            </div>
        `;
    elementoListaCarrinho.appendChild(divItem);
  });

  elementoTotal.innerText = `$ ${valorTotal}`;
}

function finalizarCompra() {
  modalSucesso.classList.remove("oculto");
  carrinho = {};
  atualizarCarrinho();
}

function fecharModal() {
  modalSucesso.classList.add("oculto");
}

window.onload = () => {
  renderizarProdutos(listaItens);
  atualizarCarrinho();
};
// Referência da barra de pesquisa
const inputPesquisa = document.getElementById("barra-pesquisa");

// Função para filtrar os produtos
function pesquisarProdutos() {
  const termo = inputPesquisa.value.toLowerCase();
  const verificadorAbaItens = document
    .getElementById("aba-itens")
    .classList.contains("ativo");

  // Verifica qual lista deve ser filtrada baseada na aba ativa
  const listaAtual = verificadorAbaItens ? listaItens : listaTMs;

  // Filtra os itens que incluem o termo digitado no nome
  const produtosFiltrados = listaAtual.filter((produto) =>
    produto.nome.toLowerCase().includes(termo)
  );

  // Renderiza apenas os produtos encontrados
  renderizarProdutos(produtosFiltrados);
}
