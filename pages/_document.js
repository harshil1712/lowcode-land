import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* Umami script */}
					<script
						async
						defer
						data-website-id="6b84ff49-49d1-4413-a292-6d464146f1a4"
						src="https://um.app.harshil.dev/umami.js"
					></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
