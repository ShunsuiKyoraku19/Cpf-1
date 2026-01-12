let cpf = document.getElementById("cpf");
let botao = document.getElementById("btn");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", ()=>{
    let valorCPF = cpf.value.replace(/\D/g, '');
    let resto;
    let i;
    let soma;
    let d;

    if (valorCPF.length !== 11) {
        mensagem.textContent = "CPF deve ter 11 dígitos!";
        mensagem.style.color = "red";
        return;
    }
    
    soma = 0;
    for(i=0; i<9; i++){
        d = valorCPF[i] - '0';
        soma += d * (10 - i);
    }
    resto = soma % 11;

    if(resto < 2){
        d1 = 0;
    }
    else{
        d1 = 11 - resto;
    }

    soma = 0;
    for(i=0; i<9; i++){
        d = valorCPF[i] - '0';
        soma += d * (11 - i);
    }
    soma += d1 * 2;

    resto = soma % 11;

    if(resto < 2){
        d2 = 0;
    }
    else{
        d2 = 11 - resto;
    }

    if(d1 == (valorCPF[9] - '0') && d2 == (valorCPF[10] - '0')){
        mensagem.textContent = "CPF VÁLIDO!";
        mensagem.style.color = "green";
    }
    else{
        mensagem.textContent = "CPF INVÁLIDO!";
        mensagem.style.color = "red";
    }

});
