for(let i = 1; i <= 31; i++){
    dia.innerHTML += `<option>${i}</option>`
}

mes.onchange = () => {
    switch (mes.value) {
        case "Janeiro":
            nomeDePagodeiro.innerHTML = "Rei"
            break;
        case "Fevereiro":
            nomeDePagodeiro.innerHTML = "Mô"
            break;
        case "Março":
            nomeDePagodeiro.innerHTML = "Cupido "
            break
        case "Abril":
            nomeDePagodeiro.innerHTML = "Apaixonado "
            break
        case "Maio":
            nomeDePagodeiro.innerHTML = "Pagodeiro "
            break
        case "Junho":
            nomeDePagodeiro.innerHTML = "Cara Perfeito "
            break
        case "Julho":
            nomeDePagodeiro.innerHTML = "Mensageiro "
            break
        case "Agosto":
            nomeDePagodeiro.innerHTML = "Pertubado "
            break
        case "Setembro":
            nomeDePagodeiro.innerHTML = "Gueri Gueri "
            break
        case "Outubro":
            nomeDePagodeiro.innerHTML = "Coração "
            break
        case "Novembro":
            nomeDePagodeiro.innerHTML = "Linda Voz "
            break
        case "Dezembro":
            nomeDePagodeiro.innerHTML = "Criado Mudo "
            break
    }
};

dia.onchange = () => {
    switch (Number(dia.value)) {
        case 1:
            nomeDePagodeiro.innerHTML += "Que Tanto Fez ou Tanto Faz"
            break;
        case 2:
            nomeDePagodeiro.innerHTML += "Que Tanto Fez ou Tanto Faz"
            break;
        // case 3:
        //     nomeDePagodeiro.innerHTML += "Que Tanto Fez ou Tanto Faz"
        //     break;
        // case 4:
        //     nomeDePagodeiro.innerHTML += "Que Desabou o Barraco"
        //     break;
        // case 5:
        //     nomeDePagodeiro.innerHTML += "Que Desabou o Barraco"
        //     break;
        // case 6:
        //     nomeDePagodeiro.innerHTML += "Que Desabou o Barraco"
        //     break;
        // case 7:
        //     nomeDePagodeiro.innerHTML += "Que Largou o Freio"
        //     break;
        // case 8:
        //     nomeDePagodeiro.innerHTML += "Que Largou o Freio"
        //     break;
        // case 9:
        //     nomeDePagodeiro.innerHTML += "Que Largou o Freio"
        //     break;
        // case 10:
        //     nomeDePagodeiro.innerHTML += "Que Quer Futicar"
        //     break;
        // case 11:
        //     nomeDePagodeiro.innerHTML += "Que Quer Futicar"
        //     break;
        // case 12:
        //     nomeDePagodeiro.innerHTML += "Que Quer Futicar"
        //     break;
        // case 13:
        //     nomeDePagodeiro.innerHTML += "Que Tem Fogo Na Roupa"
        //     break;
        // case 14:
        //     nomeDePagodeiro.innerHTML += "Que Tem Fogo Na Roupa"
        //     break;
        // case 15:
        //     nomeDePagodeiro.innerHTML += "Que Tem Fogo Na Roupa"
        //     break;
        // case 16:
        //     nomeDePagodeiro.innerHTML += "Que Se Apaixonou Pela Pessoa Errada"
        //     break;
        // case 17:
        //     nomeDePagodeiro.innerHTML += "Que Se Apaixonou Pela Pessoa Errada"
        //     break;
        // case 18:
        //     nomeDePagodeiro.innerHTML += "Que Se Apaixonou Pela Pessoa Errada"
        //     break;
        // case 19:
        //     nomeDePagodeiro.innerHTML += "Que Desliga E Vem Depressa"
        //     break;
        // case 20:
        //     nomeDePagodeiro.innerHTML += "Que Desliga E Vem Depressa"
        //     break;
        // case 21:
        //     nomeDePagodeiro.innerHTML += "Que Desliga E Vem Depressa"
        //     break;
        // case 22:
        //     nomeDePagodeiro.innerHTML += "Que Está À Deriva"
        //     break;
        // case 23:
        //     nomeDePagodeiro.innerHTML += "Que Está À Deriva"
        //     break;
        // case 24:
        //     nomeDePagodeiro.innerHTML += "Que Está À Deriva"
        //     break;
        // case 25:
        //     nomeDePagodeiro.innerHTML += "Que Segura O Samba"
        //     break;
        // case 26:
        //     nomeDePagodeiro.innerHTML += "Que Segura O Samba"
        //     break;
        // case 27:
        //     nomeDePagodeiro.innerHTML += "Que Segura O Samba"
        //     break;
        // case 28:
        //     nomeDePagodeiro.innerHTML += "Que Ninguém Ama"
        //     break;
        // case 29:
        //     nomeDePagodeiro.innerHTML += "Que Ninguém Ama"
        //     break;
        // case 30:
        //     nomeDePagodeiro.innerHTML += "Que Ninguém Ama"
        //     break;
        // case 31:
        //     nomeDePagodeiro.innerHTML += "Que Ninguém Ama"
        //     break;
        default:
            nomeDePagodeiro.innerHTML= "Error"
    }
}