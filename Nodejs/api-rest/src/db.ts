
/**
 * Conexão com o banco
 */
import { Pool } from 'pg'; 

const connectionString = 'postgres://roubuckl:2COQBVhIk05cN-YrGamf9YsMQmuh6WXX@kesavan.db.elephantsql.com/roubuckl';
const db = new Pool({ connectionString });

// name da connction têm que ser connectionString

export default db;

