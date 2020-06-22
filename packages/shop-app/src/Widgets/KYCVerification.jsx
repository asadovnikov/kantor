import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Radio, Grid, Typography, Paper, Container } from '@material-ui/core';

const GreenRadio = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Radio color='default' {...props} />);

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(4),
	},
}));

const RadioButtons = () => {
	const [selectedValue, setSelectedValue] = React.useState('a');

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<>
			<Grid container item xs={3} justify='center' alignItems='center'>
				<Radio
					checked={selectedValue === 'notRequired'}
					onChange={handleChange}
					value='notRequired'
					color='default'
					name='radio-button-not-required'
					inputProps={{ 'aria-label': 'Not Required' }}
				/>
			</Grid>
			<Grid container item xs={3} justify='center' alignItems='center'>
				<Radio
					checked={selectedValue === 'declined'}
					onChange={handleChange}
					value='declined'
					color='secondary'
					name='radio-button-declined'
					inputProps={{ 'aria-label': 'Declined' }}
				/>
			</Grid>
			<Grid container item xs={3} justify='center' alignItems='center'>
				<GreenRadio
					checked={selectedValue === 'verified'}
					onChange={handleChange}
					value='verified'
					name='radio-button-verified'
					inputProps={{ 'aria-label': 'Verified' }}
				/>
			</Grid>
		</>
	);
};

const VerificationRow = ({ text }) => {
	return (
		<Grid container item xs={12} justify='center' alignItems='center'>
			<Grid item xs={3}>
				<Container>{text}</Container>
			</Grid>
			<RadioButtons />
		</Grid>
	);
};

export const KYCVerificationWidget = () => {
	const classes = useStyles();
	return (
		<Paper elevation={2}>
			<Container className={classes.container}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Grid container justify='center' alignItems='center'>
							<Grid item xs={3}></Grid>
							<Grid item xs={3} container justify='center' alignItems='center'>
								<Typography varian='h6'>Not Required</Typography>
							</Grid>
							<Grid item xs={3} container justify='center' alignItems='center'>
								<Typography varian='h6'>Declined</Typography>
							</Grid>
							<Grid item xs={3} container justify='center' alignItems='center'>
								<Typography varian='h6'>Approved</Typography>
							</Grid>
						</Grid>
					</Grid>
					<VerificationRow text='ID Verification' />
					<VerificationRow text='POA Verification' />
					<VerificationRow text='Finance Verification' />
				</Grid>
			</Container>
		</Paper>
	);
};
