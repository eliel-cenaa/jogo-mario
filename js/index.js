const jogador= document.querySelector('.mario')
const cano= document.querySelector('.pipe')
const cloud= document.querySelector('.cloud')
const placar= document.querySelector('.numero')

function pulo(){
    jogador.classList.add('pulo')
    setTimeout(() => {
      jogador.classList.remove('pulo')   
    }, 800);
}


const loop = setInterval(() => {
    const distanciacano= cano.offsetLeft;
    const distancianuvem= cloud.offsetLeft;
    const alturapulo= +window.getComputedStyle(jogador).bottom.replace('px','')
    if ( distanciacano<300 &&alturapulo<150 &&distanciacano>0) {
     
      cano.style.animation= 'none'
      cano.style.left=`${distanciacano}px`

      jogador.src='img/game_over.gif'
      jogador.style.height='400px'
      jogador.style.animation='none'

      cloud.style.animation='none'
      cloud.style.left=`${distancianuvem}px`

    }
    if(alturapulo>150){
      placar.innerHTML= +placar.textContent+1
        }
}, 10);




document.addEventListener('click',pulo)