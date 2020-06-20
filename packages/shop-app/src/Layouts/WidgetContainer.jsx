import React from 'react';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { Grid, Card, Button } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const WidgetContainer = ({ show = true, children, title, size, actions = [] }) => {
	return (
		<Slide direction='left' in={show} mountOnEnter unmountOnExit>
			<Container maxWidth={size && 'md'}>
				<Card className='p-4 p-lg-5'>
					<CardContent>
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
												className={`mt-4 mt-lg-0 text-uppercase font-weight-bold px-4 ${act.primary && 'btn-primary'}`}
												size='small'>
												{act.text}
											</Button>
										);
									})}
								</Box>
							</Grid>
						</Box>
						{/* <div className='d-block d-lg-flex text-center text-lg-left align-items-center justify-content-between mb-4'>
						<div className='d-flex align-items-center justify-content-center justify-content-lg-start'>
							<div className='display-4 line-height-1 font-weight-bold mr-3'>{title}</div>
						</div>
						
					</div> */}
						{children}
					</CardContent>
					{/* <CardActions>
						{actions.map((act) => {
							return (
								<Button
									onClick={act.onAction}
									className={`mt-4 mt-lg-0 text-uppercase font-weight-bold px-4 ${act.primary && 'btn-primary'}`}
									size='small'>
									{act.text}
								</Button>
							);
						})}
					</CardActions> */}
				</Card>
			</Container>
		</Slide>
	);
};
