import db from '../db';
import User from '../models/user.models';
import DatabaseError from '../models/database_error_models';

class UserRepository {
	
	async findAllUsers(): Promise<User[]> {
		
		const sql = `SELECT uuid, userName  FROM application_users`;
		const { rows } = await db.query<User>(sql);
		return rows || [];
	}
	
	async findById(uuid: string): Promise<User> {
		try {
			const sql = `SELECT uuid, userName FROM application_users WHERE uuid = $1`;
			const params = [uuid];
			const { rows } = await db.query<User>(sql, params);
			const [ user ] = rows; 
			return user;
		} catch(error) {
			throw new DatabaseError('Erro na consulta por ID', error);
		}
	}	
	
	async create(user: User): Promise<string> {
		const sql = `INSERT INTO application_users (userName, userPassword) 
						VALUES ($1, crypt($2, 'my_salt') )
							RETURNING uuid`;							
		const params = [user.userName, user.userPassword];
		const { rows } = await db.query<{uuid: string}>(sql, params);
		const [newUser] = rows;
		return newUser.uuid;		
	}
	
	async update(user: User): Promise<void> {
		const sql = `UPDATE application_users 
						SET userName = $1, userPassword = crypt($2, 'my_salt')
							WHERE uuid = $3`;
		const params = [user.userName, user.userPassword, user.uuid];
		await db.query(sql, params);
	}
	
	async remove(uuid: string): Promise<void> {
		const sql = `DELETE FROM application_users WHERE uuid = $1`;
		const params = [uuid];
		await db.query(sql, params);
	}
	
}

export default new UserRepository;