import { Pool } from "pg";

const connectionString = 'postgres://swqcvqjw:kkxVRuSDUIcmO1PKEvIyoi3w1ACASSwq@motty.db.elephantsql.com/swqcvqjw';
const db = new Pool({connectionString});

export default db;

//Documentação node-postgres: https://node-postgres.com/
//Banco de dados em nuvem: elephantSQL - https://api.elephantsql.com/