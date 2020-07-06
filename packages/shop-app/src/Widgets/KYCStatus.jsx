import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthContext';
import { id, address, finance } from '../assets';
import { Card, Col, Row, Avatar } from 'antd';
import { Container, Paper, Grid, Typography, ButtonBase } from '@material-ui/core';
import { VerificationSuccessWidget } from './IllustrateResult';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2, 0),
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 500,
	},
	image: {
		width: 64,
		height: 64,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	formPadding: {
		paddingBottom: theme.spacing(4),
	},
}));

const StageItem = ({ onClick, icon, title, description }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<ButtonBase onClick={onClick} component='div'>
					<Grid container spacing={4}>
						<Grid item>
							<div className={classes.image}>
								<img className={classes.img} alt='complex' src={icon} />
							</div>
						</Grid>
						<Grid item xs={12} sm container>
							<Typography gutterBottom variant='subtitle1'>
								{title}
							</Typography>
							<Typography variant='body2' gutterBottom color='textSecondary'>
								{description}
							</Typography>
						</Grid>
					</Grid>
				</ButtonBase>
			</Paper>
		</div>
	);
};

const verificationURI = 'https://p5m841cnq5.execute-api.us-east-1.amazonaws.com/dev/startkyc';

export const KYCStatusWidget = () => {
	const { customer = {} } = useContext(AuthContext);
	const classes = useStyles();
	const { KYCVerification = {} } = customer;
	const goodStatus = 'VALIDATED';

	const { poaVerification = 'FAILED', idVerification = 'FAILED', financeVerification = 'FAILED' } = KYCVerification;

	const postData = (params) => {
		// The rest of this code assumes you are not using a library.
		// It can be made less wordy if you use one.
		const form = document.createElement('form');
		form.method = 'post';
		form.action = `${verificationURI}/${customer.id}`;

		for (const key in params) {
			if (params.hasOwnProperty(key)) {
				const hiddenField = document.createElement('input');
				hiddenField.type = 'hidden';
				hiddenField.name = key;
				hiddenField.value = params[key];

				form.appendChild(hiddenField);
			}
		}

		document.body.appendChild(form);
		form.submit();
	};

	const startJumio = async () => {
		try {
			postData({
				verificationType: 'netverify',
				customerId: customer.id,
				verificationId: KYCVerification.id,
				customerInfo: JSON.stringify(customer),
			});
			// var form = document.createElement('form');
			// document.body.appendChild(form);
			// form.method = 'post';
			// // form.action = `${verificationURI}/${customer.id}.${KYCVerification.id}`;

			// form.innerHTML = `<input type='hidden' name='user' value='${customer.id}' />`;
			// form.submit();
		} catch (err) {
			console.error(err);
		}
	};
	const startJumioDocVerify = async () => {
		postData({
			verificationType: 'document',
			customerId: customer.id,
			verificationId: KYCVerification.id,
			customerInfo: JSON.stringify(customer),
			documentType: 'UB',
		});
	};

	const startJumioFinanceVerify = async () => {
		postData({
			verificationType: 'document',
			customerId: customer.id,
			verificationId: KYCVerification.id,
			customerInfo: JSON.stringify(customer),
			documentType: 'BS',
		});
	};

	return (
		<Container className={classes.formPadding}>
			{idVerification !== goodStatus && (
				<StageItem
					key='idVerification'
					icon={id}
					onClick={startJumio}
					title='ID Verification'
					description='We need photo of your id document to prove your identity'
				/>
			)}
			{poaVerification !== goodStatus && (
				<StageItem
					key='addressVerification'
					icon={address}
					onClick={startJumioDocVerify}
					title='Address Verification'
					description='We need to prove specified address'
				/>
			)}
			{financeVerification !== goodStatus && (
				<StageItem
					key='financeVerification'
					onClick={startJumioFinanceVerify}
					icon={finance}
					title='Financial documents'
					description='You should prove your income'
				/>
			)}
			{idVerification === goodStatus && poaVerification === goodStatus && financeVerification === goodStatus && (
				<VerificationSuccessWidget />
			)}
		</Container>
	);
};
