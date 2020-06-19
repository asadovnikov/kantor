import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const defaultTheme = createMuiTheme({
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
