const axios = require('axios');
const express = require('express');
var bodyParser = require('body-parser');
const { v4: uuid } = require('uuid');
const app = express();
const port = 3015;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const username = 'ae47bd25-fe31-4097-ad8b-4dd3ed66ba6c';
const password = 'bpII95sj5Qs7s3eRgHbKnlcn5ulkT9kf';

const verifyAddress = 'https://lon.netverify.com/api/v4/initiate';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

const redirectAddress = 'https://eacf4100eea6.ngrok.io';
const headers = {
	'Content-Type': 'application/json',
	'User-Agent': 'kantorClient kantorApp/v.1.1',
};

app.get('/', async (req, res) => {
	try {
		// const basic = `Basic ${btoa(username + ':' + password)}`;
		const { data } = await axios.post(
			verifyAddress,
			{
				customerInternalReference: 'uuid customer',
				userReference: 'uuid user',
				successUrl: `${redirectAddress}/success`,
				errorUrl: `${redirectAddress}/failed`,
				callbackUrl: `${redirectAddress}/callback`,
			},
			{
				headers: {
					...headers,
				},
				auth: {
					username: 'ae47bd25-fe31-4097-ad8b-4dd3ed66ba6c',
					password: 'bpII95sj5Qs7s3eRgHbKnlcn5ulkT9kf',
				},
			}
		);
		const { redirectUrl } = data;
		res.redirect(redirectUrl);
		// res.send(JSON.stringify(data));
	} catch (err) {
		res.send(JSON.stringify(err));
	}
	// res.send('Hello World!');
});

app.post('/', async (req, res) => {
	try {
		// const basic = `Basic ${btoa(username + ':' + password)}`;
		const { data } = await axios.post(
			verifyAddress,
			{
				customerInternalReference: 'uuid customer',
				userReference: 'uuid user',
				successUrl: `${redirectAddress}/success`,
				errorUrl: `${redirectAddress}/failed`,
				callbackUrl: `${redirectAddress}/callback`,
			},
			{
				headers: {
					...headers,
				},
				auth: {
					username: 'ae47bd25-fe31-4097-ad8b-4dd3ed66ba6c',
					password: 'bpII95sj5Qs7s3eRgHbKnlcn5ulkT9kf',
				},
			}
		);
		const { redirectUrl } = data;
		res.redirect(redirectUrl);
		// res.send(JSON.stringify(data));
	} catch (err) {
		res.send(JSON.stringify(err));
	}
});

app.post('/success', async (req, res) => {
	res.send('OK');
});

app.post('/failed', async (req, res) => {
	res.send('OK');
});

app.post('/callback', async (req, res) => {
	res.send('OK');
});

app.get('/success', async (req, res) => {
	res.send('OK');
});

app.get('/failed', async (req, res) => {
	res.send('OK');
});

app.get('/callback', async (req, res) => {
	res.send('OK');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
