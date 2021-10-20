
import express, { Request, Response, NextFunction } from 'express';
import userRoute from './routes/users_route';
import statusRoute from './routes/status_route';

const app = express(); // criando uma instancia do express

// configuração da aplicação  
app.use(express.json()); // entender o JSON
app.use(express.urlencoded({ extended: true })); // entender as requisiçoes de forma mais dinâsmica

// configuração das rotas
app.use(statusRoute);
app.use(userRoute);


// code application...

// Iniciando o servidor
app.listen(3000, () => {
    console.log("Runding application...");
});


// console.log("Execute!");

