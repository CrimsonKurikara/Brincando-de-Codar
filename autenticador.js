const prompt = require("prompt-sync")();

// Tentando fazer um autenticador

var falhas = 0;
var sucesso = 0;

var dataBase = [{login: "aghataribeiro", senha: "268751", nome: "Aghata Ribeiro"}, {login: "gabriel_silva", senha: "23071999", nome: "Gabriel Alfredo"}];

function autenticadorNow(valor)
{
    let login1 = prompt("Digite seu login: ");
    console.log();
    let senha1 = prompt("Digite sua senha: ");
    console.log();

    for(let i in valor)
    {
        if (login1 === dataBase[i].login && senha1 === dataBase[i].senha)
        {
            console.log(`Bem vindo(a) ao NOW ${dataBase[i].nome}`);
            sucesso++
        }
    }
    if (sucesso<1)
    {
        falhas++
        console.log("Usuário e/ou Senha está errado.")
        console.log();
    }

}
while(true)
{
    autenticadorNow(dataBase);
    if(falhas>5)
    {
        break;
    }
    if(sucesso>0)
    {
        break;
    }
    
    let loginAgain = prompt("Você gostaria de tentar novamente? ").toLowerCase();
    
    if(loginAgain === "sim"){console.log();}
    
    else
    {
        break;
    }
}

if(falhas>5)
{
    console.log();
    console.log("Você atingiu o número maximo de falhas neste dispositivo, durante uma hora(1hr) você não poderá tentar efetuar nenhum login.");
}