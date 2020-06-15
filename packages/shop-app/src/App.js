import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AntdApp } from './AntdApp';
import { MaterialApp } from './MaterialApp';

const breadcrumbNameMap = {
	'/': 'Home',
	'/home': 'Home',
	'/payment': 'Payment',
	'/paymentfailed': 'Payment Failed',
	'/failed': 'Payment Failed',
	'/paymentsuccessfull': 'Payment successful',
	'/successful': 'Payment successful',
	'/success': 'Payment successful',
	'/kycverification': 'Verify KYC',
	'/kyc': 'Verify KYC',
};

function App() {
	return (
		<Router>
			<MuiPickersUtilsProvider utils={MomentUtils}>
				{/* <MaterialApp /> */}
				<AntdApp />
			</MuiPickersUtilsProvider>
		</Router>
	);
}

export default App;
