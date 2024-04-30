const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"curriculos",
    password:"saokopapi",
    port: 5432,
});

module.exports = pool;
