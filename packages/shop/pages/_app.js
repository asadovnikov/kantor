import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import '../styles/theme.css';

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
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
}
