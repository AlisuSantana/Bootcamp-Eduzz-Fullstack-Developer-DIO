import { Request, Response, NextFunction } from 'express';
import ForbiddenError from '../models/errors/forbidden_error_models';
import UserRepository from '../repositories/user_repository';

async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) 
{
	try {
		
		const authorizationHeader = req.headers['authorization'];
		if(!authorizationHeader) {
			throw new ForbiddenError('Opss... Ocorreu um Error durante o login');
		}
		
		// Basic YWRtaW46YWRtaW4=
		const [authorizationType, token] = authorizationHeader.split(' ');
		if(authorizationType !== 'Basic' || !token){
			throw new ForbiddenError('Opss... Ocorreu um Error na autenticação');
		}		
		
		const tokenContent = Buffer.from(token, 'base64').toString('utf-8');
		const [userName, userPassword] = tokenContent.split(':');
		
		if(!userName || !userPassword) {
			throw new ForbiddenError("Credenciais não informadas");
		}
		
		const user = await UserRepository.findByIdUserNameAndPassword(userName, userPassword);
		
		if(!user) {
			throw new ForbiddenError("Credenciais infalidas");
		}
		
		req.user = user;
		
		next();
		
	} catch(error) {
		next(error);
	}
}

export default basicAuthenticationMiddleware;