const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

const Genius = {
    order: [],
    clikedOrder: [],
    level: 0,

    async shufferOrder() {
        let ordercolor = Math.floor(Math.random() * 4);
        Genius.order[Genius.level] = ordercolor;
        Genius.level++;
        for(let i = 0; i < Genius.order.length; i++) {
            await Genius.createColorElement(Genius.order[i]).then((element)=>{
                setTimeout(() => {
                    Genius.lightColor(element, Number(i) + 1);
                }, 500);
            });          
        }          
    },

    lightColor(elementColor, number) {     
       elementColor.classList.add('selected');  
       setTimeout(() => {
           elementColor.classList.remove('selected');
       }, 1000);
     },

     async createColorElement(color) {
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
    }


}



