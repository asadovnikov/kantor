import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(0, 0),
	},
	total: {
		fontWeight: 700,
	},
	title: {
		marginTop: theme.spacing(2),
	},
	fee: {
		marginTop: '-10px',
	},
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 120,
	},
	formContainer: {
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(6),
	},
}));

const DetailsLine = ({ label, value }) => {
	return (
		<>
			<Grid item xs={6}>
				<Typography gutterBottom>{label}</Typography>
			</Grid>
			<Grid item xs={6}>
				<Typography gutterBottom>{value}</Typography>
			</Grid>
		</>
	);
};

export const UserProfileWidget = () => {
	const classes = useStyles();
	const { customer = {} } = useContext(AuthContext);
	const {
		City,
		Country,
		PostalCode,
		DateOfBirth,
		Email,
		Firstname,
		StreetLine1,
		StreetLine2,
		Surname,
		Telephone,
	} = customer;
	return (
		<>
			<Container maxWidth='md' className={classes.formContainer}>
				<Grid item container direction='column' xs={12} sm={6}>
					<Grid container spacing={2}>
						<DetailsLine label='Name' value={`${Firstname} ${Surname}`} />
						<DetailsLine label='Date of birth' value={moment(DateOfBirth).format('MM/DD/YY')} />
						<DetailsLine label='Email' value={Email} />
						<DetailsLine label='Phone' value={Telephone} />
						<DetailsLine label='Address' value={`${Country}, ${City}, ${PostalCode}, ${StreetLine1}`} />
					</Grid>
				</Grid>
				{/* <Grid container spacing={6} justify='center' alignItems='center'>
					<Grid item xs={12}>
						<Typography align='center' variant='h4'>
							Profile
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Grid container justify='center' alignItems='center'>
							<Typography>
								Name: {Firstname} {Surname}
							</Typography>
							<Typography>Email: {Email}</Typography>
							<Typography>Date of birth: {DateOfBirth}</Typography>
							<Typography>
								Location: {Country}, {City}
							</Typography>
							<Typography>
								Address: {StreetLine1}, {PostalCode}
							</Typography>
						</Grid>
					</Grid>
				</Grid> */}
			</Container>
		</>
	);
};
