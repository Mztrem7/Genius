// Referências do DOM HTML

const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const amarelo = document.getElementById('amarelo');
const azul = document.getElementById('azul');
const jogarMaquina = document.getElementById('jogarMaquina');
const verificar = document.getElementById('verificar');
const corpo = document.getElementsByTagName("body")

let vetjogador=[], vetmaq=[];


vermelho.onclick = ()=>{
    setTimeout(()=>{
        vermelho.style.backgroundColor='#FF0000';
     },500);
     vetjogador.push(1);
     console.log('Jogador ' + vetjogador);
}
verde.onclick = ()=>{
    
    setTimeout(()=>{
        verde.style.backgroundColor='#228B22'
     },500);
     vetjogador.push(2);
     console.log('Jogador ' + vetjogador);
}

amarelo.onclick = ()=>{
    
    setTimeout(()=>{
        amarelo.style.backgroundColor='#FFD700'
     },500);
     vetjogador.push(3);
     console.log('Jogador ' + vetjogador);
}

azul.onclick = ()=>{
    
    setTimeout(()=>{
        azul.style.backgroundColor='#0000FF'
     },500);
     vetjogador.push(4);
     console.log('Jogador ' + vetjogador);
}
function jogar(){
    vetmaq.push(Math.floor(Math.random() * 4 + 1));
    console.log('Máquina '+ vetmaq);
}
function verifygame2(){
    tamVet = vetmaq.length;
    let i = 0, resp;
    while (i < tamVet) {
        if (vetjogador[i] != vetmaq[i]) {
           resp="perdeu";
           vetmaq=[];
           setTimeout(()=>{
            document.body.style.backgroundColor = " #030351";
            document.body.style.transition = "0.3s ease";
        },250);
        document.body.style.backgroundColor = "red";
            break;
        }else{
            resp="acertou";
            setTimeout(()=>{
                document.body.style.backgroundColor = " #030351";
                document.body.style.transition = "0.3s ease";

            },250);
            document.body.style.backgroundColor = "green";
        }
        i += 1;
     }
     console.log( resp);
     vetjogador=[];
     
}
verificar.onclick=()=>{
    verifygame2();
};
jogarMaquina.onclick = ()=>{
    jogar();
    vetjogador=[];
};