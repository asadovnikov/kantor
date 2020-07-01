import React from 'react';
import { useHistory } from 'react-router-dom';
import {
	successIllustration,
	notFoundIllustration,
	notAuthorized,
	paymentFailed,
	paymentSuccessfull,
	processingKYC,
} from '../assets';
import { Container, Typography, Button } from '@material-ui/core';

const IllustrationWidget = ({ message, subMessage, illustration, children }) => {
	return (
		<>
			<Container maxWidth='sm'>
				<img style={{ maxWidth: '550px' }} src={illustration} alt='illustration' />
				<Typography variant='h6' align='center' gutterBottom={true}>
					{message}
				</Typography>
				<Typography variant='body2' align='center' gutterBottom={true}>
					{subMessage}
				</Typography>
				<Container align='center'>{children}</Container>
			</Container>
		</>
	);
};

export const PaymentFailedWidget = () => {
	const history = useHistory();
	return (
		<>
			<IllustrationWidget
				message='Payment Failed'
				subMessage='Something went wrong. Please try again.'
				illustration={paymentFailed}>
				<Button
					onClick={() => {
						history.push('/mytransactions');
					}}
					color='primary'>
					Go to payments
				</Button>
			</IllustrationWidget>
		</>
	);
};

export const ProcessingKYCDocumentsWidget = () => {
	const history = useHistory();
	return (
		<>
			<IllustrationWidget
				message='We are processing your documents'
				subMessage='This process can take some time.'
				illustration={processingKYC}>
				<Button
					onClick={() => {
						history.push('/kyc/0');
					}}
					color='primary'>
					Continue with other documents
				</Button>
			</IllustrationWidget>
		</>
	);
};

export const PaymentSuccessWidget = () => {
	const history = useHistory();
	return (
		<>
			<IllustrationWidget
				message='Payment Completed'
				subMessage='You can check details in your transaction history.'
				illustration={paymentSuccessfull}>
				<Button
					onClick={() => {
						history.push('/mytransactions');
					}}
					color='primary'>
					Go to payments
				</Button>
			</IllustrationWidget>
		</>
	);
};

export const VerificationSuccessWidget = () => {
	const history = useHistory();
	return (
		<>
			<IllustrationWidget
				message='Congratulations! You successfully passed verification.'
				illustration={successIllustration}>
				<Button
					onClick={() => {
						history.push('/payment');
					}}
					color='primary'>
					Go buy some crypto
				</Button>
			</IllustrationWidget>
		</>
	);
};

export const NotAuthorizedWidget = () => {
	const history = useHistory();
	return (
		<IllustrationWidget
			message='403'
			subMessage='Sorry, you are not authorized to access this page.'
			illustration={notAuthorized}>
			<Button
				onClick={() => {
					history.push('/');
				}}
				color='primary'>
				Back to home
			</Button>
		</IllustrationWidget>
	);
};

export const NotFoundWidget = () => {
	return (
		<>
			<IllustrationWidget
				message='404'
				subMessage='Sorry, the page you visited does not exist.'
				illustration={notFoundIllustration}
			/>
		</>
	);
};
