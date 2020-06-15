import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		// marginTop: theme.spacing(8),
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(8),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export const RegistrationContainer = (props) => {
	const classes = useStyles();
	const { main, secondary, children } = props;
	return (
		<Container component='main' maxWidth='sm'>
			<div className={classes.paper}>
				<Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
					{main}
				</Typography>
				<Typography variant='h5' align='center' color='textSecondary' component='p'>
					{secondary}
				</Typography>
				<CssBaseline />
				<form className={classes.form}>
					<Grid container spacing={2}>
						{children}
					</Grid>
				</form>
			</div>
		</Container>
	);
};
