import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import { Empty } from 'antd';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { API, graphqlOperation } from 'aws-amplify';
import { listUserWalletss } from '../graphql/queries';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		width: '100%',
// 		backgroundColor: theme.palette.background.paper,
// 	},
// 	backdrop: {
// 		zIndex: theme.zIndex.drawer + 1,
// 		color: '#fff',
// 	},
// }));

const DataList = ({ checked, wallets, onWalletStateToggle }) => {
	return (
		<List fullWidth className='mb-4 list-group-bordered'>
			{wallets.map((wallet) => {
				return (
					<ListItem className='d-flex justify-content-between align-items-center py-3'>
						<div className='d-flex align-items-center mr-4'>
							<div>
								<div className='font-weight-bold'>{wallet.name}</div>
								<span className='opacity-6 d-block'>{wallet.Address}</span>
							</div>
						</div>
						<div className='d-flex align-items-center'>
							<Switch
								edge='end'
								className='switch-medium'
								onChange={onWalletStateToggle(wallet.id)}
								checked={checked.indexOf(wallet.id) !== -1}
								inputProps={{ 'aria-labelledby': wallet.id }}
							/>
						</div>
					</ListItem>
				);
			})}
		</List>
	);
};

export const WalletListWidget = () => {
	const [checked, setChecked] = useState([]);
	const [wallets, setWallets] = useState([]);
	const [loading, setLoading] = useState(false);
	// const [loadData, setLoadData] = useState();
	// const classes = useStyles();

	useEffect(() => {
		let isCancelled = false;
		setLoading(true);
		API.graphql(graphqlOperation(listUserWalletss))
			.then(
				({
					data: {
						listUserWalletss: { items },
					},
				}) => {
					if (!isCancelled) {
						setChecked(items.filter((wallet) => wallet.State !== 'Active').map((wallet) => wallet.id));
						setWallets(items);
					}
				}
			)
			.catch((err) => console.error(err))
			.finally(() => {
				setLoading(false);
			});
		return () => {
			isCancelled = true;
		};
	}, []);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};
	return (
		<>
			{loading === true ? (
				<Fade in={loading} unmountOnExit>
					<Grid container direction='row' justify='center' alignItems='center'>
						<Box mt={6} mb={6}>
							<CircularProgress />
						</Box>
					</Grid>
				</Fade>
			) : (
				<>
					{wallets.length > 0 ? (
						<DataList wallets={wallets} checked={checked} loading={loading} onWalletStateToggle={handleToggle} />
					) : (
						<Empty />
					)}
				</>
			)}
		</>
	);
};
