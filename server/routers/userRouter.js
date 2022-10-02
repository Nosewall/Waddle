import express from 'express';
import getConnection from '../utilities/dbConnection.js';
import crypto from 'crypto';

const router = express.Router();

router.post('/signup', (req, res) => {
    const userID = crypto.randomUUID();
    const {
        email,
        password,
        firstName,
        lastName,
        displayName,
        status,
        region,
        city,
        title,
    } = req.body;

    getConnection((connectionErr, connection) => {
        if (connectionErr) {
            console.error(connectionErr);
            return res.status(400).send('Connection failure.');
        }

        connection.query(
            `INSERT INTO user (userId, email, password, firstName, lastName, region, city)
             VALUES ("${userID}", "${email}", "${password}", "${firstName}", "${lastName}", "${region}", "${city}")`,
            (sqlErr, sqlRes) => {
                if (sqlErr) {
                    console.error(sqlErr);
                    return res.status(400).send('Email already exists!');
                }
                return res.status(200).send(userID);
            }
        );
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    getConnection((connectionErr, connection) => {
        if (connectionErr) {
            console.error(connectionErr);
            return res.status(400).send();
        }

        connection.query(
            `SELECT * FROM user WHERE email = "${email}" LIMIT 1`,
            (sqlErr, sqlRes) => {
                if (sqlErr) {
                    console.error(sqlErr);
                    return res.status(400).send('Connection failure.');
                }

                if (!sqlRes[0]) {
                    return res.status(400).send('Something went wrong...');
                }

                if (password === sqlRes[0].password) {
                    return res.status(200).send(sqlRes[0].userId);
                } else {
                    return res.status(400).send('Incorrect password.');
                }
            }
        );
    });
});

router.post('/get-name', (req, res) => {
    const { userId } = req.body;

    getConnection((connectionErr, connection) => {
        if (connectionErr) {
            console.error(connectionErr);
            return res.status(400).send('Connection failure.');
        }

        connection.query(
            `SELECT firstName FROM user WHERE userId = "${userId}"`,
            (sqlErr, sqlRes) => {
                if (sqlErr) {
                    console.error(sqlErr);
                    return res.status(400).send('User does not exist.');
                }

                return res.status(200).send(sqlRes);
            }
        );
    });
});

export default router;
