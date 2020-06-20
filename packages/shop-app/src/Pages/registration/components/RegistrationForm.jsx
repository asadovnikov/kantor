import React from 'react';
import Container from '@material-ui/core/Container';
// import { RegistrationContentRow } from './RegistrationContentRow';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
import { AnimatePresence, motion } from 'framer-motion';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	paper: {
		// margin: theme.spacing(4),
		// padding: theme.spacing(12, 4),
		// width: '550px',
	},
}));

export const RegistrationForm = ({ children }) => {
	const pageVariants = {
		initial: {
			opacity: 0,
		},
		in: {
			opacity: 1,
		},
		out: {
			opacity: 0,
		},
	};

	const pageTransition = {
		type: 'tween',
		ease: 'linear',
		duration: 0.3,
	};
	const classes = useStyles();
	return (
		<Container maxWidth='md'>
			<Card className='p-4 p-lg-5'>
				<AnimatePresence>
					<motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition}>
						<Grid container spacing={3}>
							{children}
						</Grid>
					</motion.div>
				</AnimatePresence>
			</Card>
		</Container>
	);
};
