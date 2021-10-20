import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const userRoute = Router();

userRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ name:"Alisuu" }];
    res.status(StatusCodes.OK).send(users);
});

userRoute.get('/users/:id', (req: Request<{id: String}>, res: Response, next: NextFunction) => {
    const id = req.params.id;   

    res.status(StatusCodes.OK).send({ id });
});

export default userRoute;




/** CRUD
 * GET User
 * POST User
 * PUT User
 * DELETE User
 */