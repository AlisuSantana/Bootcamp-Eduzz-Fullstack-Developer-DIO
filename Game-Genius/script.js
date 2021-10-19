const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//                   green     red     yellow   blue    complete  faiel
const fileAudios = ['0.mp3', '1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3'];

let order = [];
let clickedOrderPlayer = [];
let score = [];
let audios = [];

/**
 * Retorna o objeto elemento cor correspondente ao valor
 */
const createColorElement = (color) => {
    if(color == 0) {
        return green;
    }
    else if(color == 1) {
        return red;
    }
    else if(color == 2) {
        return yellow;
    }
    else if(color == 3) {
        return blue;
    }
    else {
        alert("OPSSSS... Algo deu errado" );
    }
}

/**
 * Function de fim de jogo
 */
const gameOver = () => {
    playAudio(5);
    alert(`OPSSS... Você errou! Sua pontuação final foi ${score}. Clique em OK para Iniciar um novo jogo`);
    order = [];
    clickedOrderPlayer = [];
    score = 0;
    playGame();
}

/**
 * Checa se as ordens digitadas pelo Player estão corretas
 */
const ckeckOrderPlayer = () => {
    for (let key in clickedOrderPlayer) {
        if ( clickedOrderPlayer[key] != order[key] ) {
            gameOver();
            break;
        }
    }
    if(clickedOrderPlayer.length == order.length) {
        if (clickedOrderPlayer.length != 0 && order.length != 0) {
            playAudio(4); // audio complete
            alert("Parabêns, Você acertou a sequência! Clique em OK para iniciar o proxímo Nível");
        }        
        nextLevel();
    }
}

/**
 * Function de resposta de clique do Player
 */
const playerClick = (color) => {
    clickedOrderPlayer[clickedOrderPlayer.length] = color;

    let element = createColorElement(color);
    element.classList.add('selected');
    playAudio(color);

    setTimeout(() => {
        element.classList.remove('selected');
        ckeckOrderPlayer();
    }, 300);
}

/**
 * Executa as sequências das cores com times terteminados
 */
 const lightColorAll = async () => {
    for (let i = 0; i < order.length; i++){
        let elementColor = createColorElement(order[i]);

        setTimeout(() => {
            elementColor.classList.add('selected');
            playAudio(order[i]);
            
            setTimeout(() => {
                elementColor.classList.remove('selected');
            }, 500 );  
        }, 500 * i + 1); 
    }
}

/**
 * Cria as ordens aleatórias das cores
 * OBS: o elemento criado não pode ser igual ao anterior 
 */ 
 const shuffleOrder = () => {    
    do{
        var orderColor = Math.floor(Math.random() * 4);
    }while (orderColor == order[order.length - 1]); 

    order[order.length] = orderColor;

    lightColorAll();
};

/**
 * Function que eleva a dificuldade do Game - Niveis
 */
const nextLevel = () => {
    score++;
    clickedOrderPlayer = [];

    shuffleOrder();
}

/**
 * Function inicia Gamae
 */
const playGame = () => {
    if (audios == "") loadAudios();
    alert("Olá, Vamo Joga ?");    
    nextLevel();
}

/**
 * Adiciona evento de clique ao objects color
 */
green.onclick = () => playerClick(0);
red.onclick = () => playerClick(1);
yellow.onclick = () => playerClick(2);
blue.onclick = () => playerClick(3);

/**
 * Function Disableed Buttons
 */
const disabledButtons = () => {
    red.disabled = true;
    green.disabled = true;
    yellow.disabled = true;
    blue.disabled = true;
}

/**
 * Function Enable Buttons
 */
const enableButtons = () => {
    red.disabled = true;
    green.disabled = true;
    yellow.disabled = true;
    blue.disabled = true;
}

/**
 * Function carrega obejects audios e atribui ao array audios
 */
const loadAudios = () => {  
    audios = fileAudios.map( (audio) => prepareAudios(audio));    
}

/**
 * Prepara o audio para object e retorna, onde é 
 * atribuida a variavel audios na function loadAudios
 */
const prepareAudios = (filename) => {    
    const file = `./audios/${filename}?cb=${new Date().getTime()}`;
    const audio = new Audio(file);
    audio.allow="autoplay"
    audio.load();
    return audio;
}

 /**
  * Executar a função de sons
  */
const playAudio = (position) => {
    audios[position].play();
};

/**
 * Function necessaria para não ocorrer o erro -> Uncaught (in promise) DOMException: play() 
 * failed because the user didn't interact with the document first. https://goo.gl/xX8pDD
 */
document.querySelector('.start').addEventListener('click', () => {

    document.querySelector('.start').classList.add('start-none');
    
    setTimeout(() => {
        playGame();
    }, 300);

})



