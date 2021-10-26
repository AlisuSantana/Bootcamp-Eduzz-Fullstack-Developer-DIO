import { User } from '../models/user_models';

declare module 'express-serve-static-core' 
{
	interface Request
	{
		user?: User
	}
}