import { Request, Response, NextFunction } from 'express';
import ForbiddenError from '../models/errors/forbidden_error_models';
import JWT from 'jsonwebtoken';

async function jwtAthenticationMiddleware(req: Request, res: Response, next: NextFunction) 
{
    try {

        const authotizationHeader = req.headers['authorization'];
        
        if( !authotizationHeader ){
            throw new ForbiddenError('Credenciais não infomadas');
        }

        const [authenticationtype, token] = authotizationHeader.split(' ');

        if(authenticationtype !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de authentication inválida');
        }

        const tokenPayload = JWT.verify(token, 'my_secret_key'); 
               
        if(typeof tokenPayload !== 'object' || !tokenPayload.sub) {
            throw new ForbiddenError('token inválido');
        }
        
        const user = {
            uuid: tokenPayload.sub,
            userName: tokenPayload.userName
        };

        req.user = user;
        
        next();
    } catch (error) {
        next(error); //throw new ForbiddenError("token inválido");
    }
}


export default jwtAthenticationMiddleware;