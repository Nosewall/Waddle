import { createPool } from 'mysql';

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'admin',
    password: process.env.DATABASE_PASSWORD || '123',
    database: 'waddle_v2',
    connectionLimit: 100,
});

const getConnection = (callback) => {
    pool.getConnection((err, res) => {
        if (err) return callback(err);
        return callback(err, res);
    });
};

export default getConnection;
