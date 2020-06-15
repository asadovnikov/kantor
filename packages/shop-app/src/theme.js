import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
	palette: {
		primary: blue,
	},
});

export const blackTheme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: blue,
	},
});

export const blueTheme = createMuiTheme({
	palette: {
		primary: blue,
	},
});

export default theme;
