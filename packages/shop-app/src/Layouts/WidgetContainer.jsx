import React from 'react';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { Grid, Card, Button } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const WidgetContainer = ({ show = true, showHeader = true, children, title, size, actions = [] }) => {
	return (
		<Slide direction='left' in={show} mountOnEnter unmountOnExit>
			<Container maxWidth={size && 'md'}>
				<Card>
					<CardContent>
						{showHeader === true && (
							<Box mb={3}>
								<Grid container direction='row' justify='space-between' alignItems='center'>
									<Typography gutterBottom variant='h4' component='h2'>
										{title}
									</Typography>
									<Box>
										{actions.map((act) => {
											return (
												<Button
													onClick={act.onAction}
													className={`mt-4 mt-lg-0 text-uppercase font-weight-bold px-4 ${
														act.primary && 'btn-primary'
													}`}
													size='small'>
													{act.text}
												</Button>
											);
										})}
									</Box>
								</Grid>
							</Box>
						)}

						{children}
					</CardContent>
				</Card>
			</Container>
		</Slide>
	);
};
