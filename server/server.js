import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 9400;

app.use(bodyParser.json());

app.use((req, res, next) => {
    const allowedOrigins = ['localhost:3000'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.header(
        'Access-Control-Allow-Methods',
        'DELETE, GET, PATCH, POST, OPTIONS'
    );
    res.header('Access-Control-Allow-Headers', '*');

    next();
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
