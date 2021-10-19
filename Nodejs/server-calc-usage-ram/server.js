/**
 * Criando um serve
 */
const http = require("http");
const host = 'http://localhost';
const port = 3000;
const stats = require('./computer_ram-usage.js');

// console.log(http); // ports http

http.createServer( (req, res) => {
    let url = req.url;
    if(url === '/stats') {
        res.end(
            JSON.stringify(stats, null, 2)
        );
    } else {
        //res.write("Working"); // executa mas não finalizar a exucução
        res.end("<h1>Working</h1>"); // executa e finalizar 
    }

})
.listen(port, () => console.log(`server is running in ${host}:${port}, - ${stats}`) );

// Quando não se passa o host por padrão é localhost