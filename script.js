// Referências do DOM HTML

const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const amarelo = document.getElementById('amarelo');
const azul = document.getElementById('azul');
const jogarMaquina = document.getElementById('jogarMaquina');
const verificar = document.getElementById('verificar');

let vetjogador = [],
    vetmaq = [];


vermelho.onclick = () => {
    setTimeout(() => {
        vermelho.style.backgroundColor = '#FF0000';
    }, 500);
    vetjogador.push(1);
    console.log('Jogador ' + vetjogador);
}
verde.onclick = () => {

    setTimeout(() => {
        verde.style.backgroundColor = '#228B22'
    }, 500);
    vetjogador.push(2);
    console.log('Jogador ' + vetjogador);
}

amarelo.onclick = () => {

    setTimeout(() => {
        amarelo.style.backgroundColor = '#FFD700'
    }, 500);
    vetjogador.push(3);
    console.log('Jogador ' + vetjogador);
}

azul.onclick = () => {

    setTimeout(() => {
        azul.style.backgroundColor = '#0000FF'
    }, 500);
    vetjogador.push(4);
    console.log('Jogador ' + vetjogador);
}

function jogar() {
    vetmaq.push(Math.floor(Math.random() * 4 + 1));
    console.log(vetmaq);
    pisca()
}


function pisca() {
    for(i=0; i <= vetmaq.length; i++){
            if (vetmaq[i] == 1) {
                setTimeout(() => {
                    vermelho.style.backgroundColor = "#d01f1f"
                    vermelho.style.opacity = "0.5"
                    vermelho.style.transition = "0.3s ease"
                }, 350)
                vermelho.style.opacity = "1"
            }
            if (vetmaq[i] == 2) {
                setTimeout(() => {
                    verde.style.backgroundColor = "#14ba14"
                    verde.style.opacity = "0.5"
                    verde.style.transition = "0.3s ease"
                }, 350)
                verde.style.opacity = "1"
            }
            if (vetmaq[i] == 3) {
                setTimeout(() => {
                    amarelo.style.backgroundColor = "#919107"
                    amarelo.style.opacity = "0.5" 
                    amarelo.style.transition = "0.3s ease"
                }, 350)
                amarelo.style.opacity = "1"
            }
            if (vetmaq[i] == 4) {
                setTimeout(() => {
                    azul.style.backgroundColor = "#0a0ab9"
                    azul.style.opacity = "0.5"
                    azul.style.transition = "0.3s ease"
                }, 350)
                azul.style.opacity = "1" 
            }
    }
}

function verifygame2() {
    tamVet = vetmaq.length;
    let i = 0,
    resp;
    while (i < tamVet) {
        if (vetjogador[i] != vetmaq[i]) {
            resp = "perdeu";
            vetmaq = [];
            setTimeout(() => {
                document.body.style.backgroundColor = "#131313";
                document.body.style.transition = "0.3s ease";
            }, 250);
            document.body.style.backgroundColor = "red";
            break;
        } else {
            resp = "acertou";
            setTimeout(() => {
                document.body.style.backgroundColor = "#131313";
                document.body.style.transition = "0.3s ease";

            }, 250);
            document.body.style.backgroundColor = "green";
        }
        i += 1;
    }
    console.log(resp);
    vetjogador = [];

}
verificar.onclick = () => {
    verifygame2();
};
jogarMaquina.onclick = () => {
    jogar();
    vetjogador = [];
};