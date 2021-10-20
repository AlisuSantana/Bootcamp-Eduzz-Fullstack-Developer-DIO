
import express, { Request, Response, NextFunction } from 'express';
import userRoute from './routes/users_route';

const app = express();

app.use(userRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar', foo2: 'bar2' });
});




app.listen(3000, () => {
    console.log("Runding application...");
});


// console.log("Execute!");

