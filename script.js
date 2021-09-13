// puxando os dados do formulário
const simular = document.getElementById('simular');

function simulador() {
    const input_nome = document.getElementById('input_nome').value;
    const input_mensalidade = document.getElementById('input_mensalidade').value;
    const input_tempo = document.getElementById('input_tempo').value;
    const resultado = document.getElementById('resultado');

    // repetição das variavéis para resetar o formulário
    document.getElementById('input_nome').value = ""
	document.getElementById('input_mensalidade').value = "";
	document.getElementById('input_tempo').value = "";

    // validação do formulário
    if (input_nome !== '' && input_mensalidade !== '' && input_tempo !== '') {
        // tofixed para arredondar as casas decimais
        const calculo = (input_tempo * 12 * input_mensalidade).toFixed(2);
        resultado.textContent = `Olá, ${input_nome}! Juntando R$ ${input_mensalidade} todo mês, você terá ${calculo} em ${input_tempo} ano(s).`;
    } else {
        resultado.textContent = "Preencha todos os campos.";
    }
}

// quando o usuário cliclar no botão de "simular", o evento de clique irá acontecer e pegará os dados informados no formulário
simular.addEventListener('click', simulador);
