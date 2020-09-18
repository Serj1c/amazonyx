const functions = require('firebase-functions');
const express = require ('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HR8FrFvImqCvcoMyve70M8QoJ3DZT8Hvs6UpdAxRwE3ov7rpHf8BuZv963SBL54fcjGSia5wiRbHeHWXdf0BSH900jnRLfsA3');

/* API */

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment received BOOM! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// - Listen command
exports.api = functions.https.onRequest(app);

// Test (local) endpoint
// http://localhost:5001/yx-a8e74/us-central1/api