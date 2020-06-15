import React from 'react';
import { Layout } from 'antd';
import { DemoRouting } from './Components/DemoRouting';
import { TestMenu } from './Components/TestMenu';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

const { Content, Footer } = Layout;

export const AntdApp = () => {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<TestMenu />
				<Content className='site-layout'>
					<Layout>
						<Content>
							<div className='site-layout-background' style={{ background: '#fff', padding: 24, minHeight: 380 }}>
								<DemoRouting />
							</div>
						</Content>
					</Layout>
				</Content>
				<Footer style={{ textAlign: 'center' }}>kosevych.info © 2020 </Footer>
			</Layout>
		</ThemeProvider>
	);
};
