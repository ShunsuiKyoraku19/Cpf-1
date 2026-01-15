const input = document.getElementById('cpf');
const mensagem = document.getElementById('mensagem');
const botao = document.getElementById('btn');

botao.addEventListener('click', async (event) => {
  event.preventDefault(); // evita o reload da página

  const cpf = input.value.trim();

  // Validação simples
  if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
    mensagem.textContent = '⚠️ CPF inválido. Digite apenas 11 números.';
    mensagem.style.color = 'red';
    return;
  }
  if (/^(\d)\1{10}$/.test(cpf)) {
    mensagem.textContent = '⚠️ CPF inválido. Números repetidos não são permitidos.';
    mensagem.style.color = 'red';
    return;
  }
  // Validação do dígito verificador
  let soma = 0;
  let resto;

  // Primeiro dígito verificador
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) {
    mensagem.textContent = '❌ CPF inválido.';
    mensagem.style.color = 'red';
    return;
  }

  // Segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) {
    mensagem.textContent = '❌ CPF inválido.';
    mensagem.style.color = 'red';
    return;
  }

  mensagem.textContent = '✅ CPF válido!';
  mensagem.style.color = 'green';

});
