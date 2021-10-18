const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let order = [];
let clickedOrderPlayer = [];
let score = [];



/**
 * Retorna o elemento cor correspondente ao valor
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



const gameOver = () => {
    alert(`OPSSS... Você errou! Sua pontuação final foi ${score}. Clique em OK para Iniciar um novo jogo`);
    order = [];
    clickedOrderPlayer = [];
    score = 0;
    playGame();
}

const ckeckOrderPlayer = () => {
    for (let key in clickedOrderPlayer) {
        if ( clickedOrderPlayer[key] != order[key] ) {
            gameOver();
            break;
        }
    }
    if(clickedOrderPlayer.length == order.length) {
        alert("Parabêns, Você acertou a sequência! Clique em OK para iniciar o proxímo Nível");
        nextLevel();
    }
}

const playerClick = (color) => {
    clickedOrderPlayer[clickedOrderPlayer.length] = color;

    let element = createColorElement(color);
    element.classList.add('selected');

    setTimeout(() => {
        element.classList.remove('selected');
        ckeckOrderPlayer();
    }, 300);
}

/**
 * Executa as sequências das cores 
 */
 const lightColorAll = async () => {
    for (let i = 0; i < order.length; i++){
        let elementColor = createColorElement(order[i]);
        setTimeout(() => {
                elementColor.classList.add('selected');
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

const nextLevel = () => {
    score++;
    clickedOrderPlayer = [];
    shuffleOrder();
}

const playGame = () => {
    alert("Olá, Vamo Joga ?");
    nextLevel();
}

green.onclick = () => playerClick(0);
red.onclick = () => playerClick(1);
yellow.onclick = () => playerClick(2);
blue.onclick = () => playerClick(3);

const disabledButtons = () => {
    red.disabled = true;
    green.disabled = true;
    yellow.disabled = true;
    blue.disabled = true;
}
const enableButtons = () => {
    red.disabled = true;
    green.disabled = true;
    yellow.disabled = true;
    blue.disabled = true;
}

playGame();