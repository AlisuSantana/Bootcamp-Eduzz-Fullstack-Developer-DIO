
import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';
import UserRepository from '../repositories/user_repository';

const userRoute = Router();

userRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
	
	console.log(req.headers['authorization']);
	
    const users = await UserRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

userRoute.get('/users/:id', async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    try {
		const id = req.params.id;   
		const user = await UserRepository.findById(id);
		res.status(StatusCodes.OK).send(user);
	} catch(error) {
		next(error);
	}
});


userRoute.post('/users', async (req: Request, res: Response, nxt: NextFunction) => {
	const newUser = req.body;
	const uuid = await UserRepository.create(newUser);
	
	res.status(StatusCodes.CREATED).send(uuid);
});


userRoute.put('/users/:id', async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
	const id = req.params.id;
	const modifiedUser = req.body;
	
	modifiedUser.uuid = id;	
	await UserRepository.update(modifiedUser);
	
	res.sendStatus(StatusCodes.OK);
});

userRoute.delete('/users/:id', async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
	const id = req.params.id;
	await UserRepository.remove(id);	
	res.sendStatus(StatusCodes.OK);
});



export default userRoute;




/** CRUD
 * GET User
 * POST User
 * PUT User
 * DELETE User
 */