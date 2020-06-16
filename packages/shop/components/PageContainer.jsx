import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from './theme';

import { PresentationLayout } from './layout-blueprints';

export const PageContainer = ({ children }) => {
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

	return (
		<ThemeProvider theme={MuiTheme}>
			<AnimatePresence>
				<PresentationLayout>
					<motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition}>
						{children}
					</motion.div>
				</PresentationLayout>
			</AnimatePresence>
		</ThemeProvider>
	);
};
