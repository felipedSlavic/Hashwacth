// const imagemVisualizacao = document.getElementById("visualizacao");
// Utilização do querySelector (MESMA COISA DO getElementById) com mais flexibilidade, tipo no css

const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');



// ARRAY NO JS
const opcoesTamanho = ['41 mm' , '45 mm'];

// VOCE IRA GUARDAR MAIS DE UMA INFORMAÇÃO NESTE ARRAY, LOGO SERÁ UM 
const opcoesCores = [
    "Verde-cipreste",
     "Azul-inverno" , 
     "Meia-noite",
     "Estelar" ,
      "Rosa-claro",
    ];



// Outro Método
// const opcaoImgClicado = document.querySelector('#selecionar-imagem');

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

// console.log(imagemVisualizacao);



function atualizarImgSelecionada(){
    const opcaoImagemSelecionada = document.querySelector('[name = "opcao-imagem"]:checked').id.charAt(0);
    
    numImagemSelecionada = opcaoImagemSelecionada;
    
    // console.log(opcaoImagemSelecionada);
    
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" + opcoesCores[numCorSelecionada].toLowerCase() + "/imagem-" + numImagemSelecionada +  ".jpeg";
}

function atualizarTamanho(){
    const opcaoTamanhoSelecionado = document.querySelector('[name = opcao-tamanho]:checked').id.charAt(0);

    numTamanhoSelecionado = opcaoTamanhoSelecionado;

    // console.log(opcoesTamanho[numTamanhoSelecionado]);

    const tamanhoCaixa =opcoesTamanho[numTamanhoSelecionado];

    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[numCorSelecionada].toLowerCase() + " para caixa de " + tamanhoCaixa;

    if(tamanhoCaixa === '41 mm'){
    imagemVisualizacao.classList.add("caixa-pequena");
    } else{
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
    
    
}


function atualizarCorSelecionada(){
    const opcaoCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);

     numCorSelecionada = opcaoCorSelecionada;

     const nomeCor = opcoesCores[numCorSelecionada];
     
     console.log(nomeCor);

     tituloProduto.innerText = "Pulseira loop esportiva " + nomeCor.toLowerCase() + " para caixa de " + opcoesTamanho[numTamanhoSelecionado];

     nomeCorSelecionada.innerText = "Cor - " + nomeCor;

     imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-" + numImagemSelecionada + ".jpeg";

     imagemMiniatura0.src ="./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-0.jpeg"

     imagemMiniatura1.src ="./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-1.jpeg"

     imagemMiniatura2.src ="./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-2.jpeg"
     
}


// opcaoImgClicado.addEventListener('click' , atualizarImgSelecionada);

