import React, { useState, useEffect } from 'react';
import {Auth} from 'aws-amplify';
// import { message } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuid } from 'uuid';
import { TextInput, PasswordInput } from '../Components/Inputs';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { defaultVerticalSpacing } from '../Utils/constants';
import SaveIcon from '@material-ui/icons/Save';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const { validate: walletValidator } = WAValidator;
const useStyles = makeStyles((theme) => ({
	topMargin: {
		marginTop: theme.spacing(4),
	},
	bottomMargin: {
		marginBottom: theme.spacing(8),
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

export const ChangePasswordWidget = ({ onPasswordChanged }) => {
	const classes = useStyles();
	const [password, setPassword] = useState();
	const [valid, setValid] = useState(false);
	const [code, setCode] = useState();
	const [loading, setLoading] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(true);
  const applyPass = async () => {
    setLoading(true);
    try {
      const
      const result = await Auth.forgotPasswordSubmit(username, code, new_password);
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false);
    }
  }
	useEffect(() => {
		let isCanceled = false;
		setValid(code.length > o && password.length > 0);
		return () => (isCanceled = true);
	}, [code, password]);
	return (
		<Grid container spacing={defaultVerticalSpacing}>
			<Grid item xs={12} className={classes.marginTop}>
				<TextInput
					labelKey={`Enter provided code`}
					value={code}
					onChange={({ target: { value } }) => setCode(value)}
				/>
			</Grid>
			<Grid item xs={12} className={classes.marginBottom}>
				<PasswordInput
					label={`New password`}
					value={password}
					onChange={({ target: { value } }) => {
						setPassword(value);
					}}
				/>
			</Grid>
			<Grid item xs={12}>
				<Box mt={4}>
					<Button
						startIcon={<SaveIcon />}
						onClick={addWallet}
						disabled={valid !== true}
						variant='contained'
						className='text-uppercase font-weight-bold'
						color='primary'>
						Apply new password
					</Button>
				</Box>
			</Grid>
			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Grid>
	);
};
