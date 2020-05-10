import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import '../styles/theme.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet='utf-8'></meta>
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'></meta>
				<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap' rel='stylesheet'></link>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
