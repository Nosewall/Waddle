import express from 'express';
import getConnection from '../utilities/dbConnection.js';

const router = express.Router();

router.post('/create-event', (req, res) => {
    const { scope, location, time, title, body, contactInfo } = req.body;

    getConnection((connectionErr, connection) => {
        if (connectionErr) {
            console.error(connectionErr);
            return res.status(400).send('Connection failure.');
        }

        connection.query(
            `INSERT INTO event (scope, location, time, title, body, contactInfo) VALUES ("${scope}", "${location}", "${time}", "${title}", "${body}", "${contactInfo}")`,
            (sqlErr, sqlRes) => {
                if (sqlErr) {
                    console.error(sqlErr);
                    return res.status(400).send('Something went wrong...');
                }
                return res.status(200).send('Event created!');
            }
        );
    });
});

router.get('/get-all-events', (req, res) => {
    getConnection((connectionErr, connection) => {
        if (connectionErr) {
            console.error(connectionErr);
            return res.status(400).send('Connection failure');
        }

        connection.query(`SELECT * FROM event`, (sqlErr, sqlRes) => {
            if (sqlErr) {
                console.error(sqlErr);
                return res.status(400).send('Something went wrong...');
            }

            return res.status(200).send(sqlRes);
        });
    });
});

export default router;
