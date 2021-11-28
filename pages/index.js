import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>LowCode Land</title>
				<meta
					name="description"
					content="Your place to learn and create lowCode powered apps"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex h-screen justify-center items-center">
				<div clasName="m-auto">
					<h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-red-600">
						LowCode Land
					</h1>
					<h3 className="pt-8 text-xl text-center text-white">Coming Soon</h3>
				</div>
			</main>
		</div>
	);
}
