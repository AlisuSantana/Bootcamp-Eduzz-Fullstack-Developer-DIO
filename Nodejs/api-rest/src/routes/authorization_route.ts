import { Router, Request, Response, NextFunction } from "express";
import ForbiddenError from '../models/errors/forbidden_error_models';
import { StatusCodes } from 'http-status-codes';
import JWT from 'jsonwebtoken';
import basicAuthenticationMiddleware from '../middlewares/basic_authentication_middleware';
import jwtAthenticationMiddleware from "../middlewares/jwt_authentication_middleware";

const authorization = Router();

authorization.post('/token/validate', jwtAthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
	res.sendStatus(StatusCodes.OK);
});


authorization.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
		
	try {
		const user = req.user;
		if(!user) {
			throw new ForbiddenError("Opsss... Não foi informado o usuário");
		}
		const jwtPayload = { userName: user.userName };
		const jwtOptions = { subject: user?.uuid };
		const secretKey = 'my_secret_key';		
		
		const jwt = JWT.sign( jwtPayload, secretKey, jwtOptions );
		res.status(StatusCodes.OK).json({ token: jwt });
	
	} catch(error) {
		next(error);
	}
	
});



export default authorization;