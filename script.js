// Função para validar a idade
function validarIdade() {
    const idade = document.getElementById("idade").value;
    const mensagemErro = document.getElementById("mensagemErro");

    if (idade < 18) {
        mensagemErro.textContent = "Por favor, insira uma idade válida (maior ou igual 18 anos).";
    } else if (idade > 115) {
        mensagemErro.textContent = "Atualmente, a pessoa mais velha do mundo é a espanhola Maria Branyas, com 116 anos.";
    } else {
        mensagemErro.textContent = "";
    }
}

// Adicionar ouvinte de evento para o campo de idade
document.getElementById("idade").addEventListener("input", validarIdade);