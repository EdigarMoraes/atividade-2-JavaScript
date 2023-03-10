const { log } = require('console');

const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if ((idade >= 65) || (tempo >= 30) || (idade >= 60 && tempo >= 25)) {
  console.log("Você pode se aposentar.");

// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
if (tempo > 20) {
  sal_aposentadoria = salario * 0.80;
} else {
  sal_aposentadoria = salario * 0.60;
}

// Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
if (sal_aposentadoria < 1212) {
  sal_aposentadoria = 1212;
}
else if (sal_aposentadoria > 7087.22) {
  sal_aposentadoria = 7087.22;
}
console.log("Seu salário de aposentadoria será de:R$" + sal_aposentadoria);
}else {
  console.log("Você não pode se aposentar!");
}
