
/**
 * Conexão com o banco
 */
import { Pool } from 'pg'; 

const connectionString = '';
const db = new Pool({ connectionString });

// name da connction têm que ser connectionString

export default db;

