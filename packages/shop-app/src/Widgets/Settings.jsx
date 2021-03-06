import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Paper, Grid, Typography, ButtonBase } from '@material-ui/core';
import { resetPassword, cancelAccount } from '../assets';
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
}));

const SettingsAction = ({ onClick, icon, title }) => {
	const classes = useStyles();
	return (
		<ButtonBase className={classes.root} onClick={onClick} component='div'>
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item>
							<div className={classes.image}>
								<img className={classes.img} alt='complex' src={icon} />
							</div>
						</Grid>
						<Grid item xs={12} sm container justify='flex-start' alignItems='center'>
							<Typography gutterBottom variant='subtitle1'>
								{title}
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</div>
		</ButtonBase>
	);
};

export const SettingsWidget = () => {
	const history = useHistory();
	return (
		<>
			<Grid container direction='column' justify='center' alignItems='stretch'>
				<SettingsAction onClick={() => history.push('/change-password')} icon={resetPassword} title='Change password' />
				<SettingsAction icon={cancelAccount} title='Close account' />
			</Grid>
		</>
	);
};
