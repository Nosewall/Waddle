import express from 'express';
import getConnection from '../utilities/dbConnection.js';

const router = express.Router();

router.post('/create-message', (req, res) => {
    const { userId, email, body } = req.body;

    const cleanedBody = body.replace(/"/g, "'");

    getConnection((connectionErr, connection) => {
        if (connectionErr) {
            console.error(connectionErr);
            return res.status(400).send('Connection failure.');
        }

        connection.query(
            `INSERT INTO message (senderId, recipient, body, seen) VALUES ("${userId}", "${email}", "${cleanedBody}", "${0}")`,
            (sqlErr, sqlRes) => {
                if (sqlErr) {
                    console.error(sqlErr);
                    return res.status(400).send('Something went wrong...');
                }
                return res.status(200).send('Message created!');
            }
        );
    });
});

router.post('/get-messages', (req, res) => {
    const { userId } = req.body;

    getConnection((connectionErr, connection) => {
        if (connectionErr) {
            console.error(connectionErr);
            return res.status(400).send('Connection failure.');
        }

        connection.query(
            `SELECT * FROM message WHERE recipient = (
                SELECT email FROM user WHERE userId = "${userId}"
            )`,
            (sqlErr, sqlRes) => {
                if (sqlErr) {
                    console.error(sqlErr);
                    return res.status(400).send('Something went wrong...');
                }

                return res.status(200).send(sqlRes);
            }
        );
    });
});

export default router;
