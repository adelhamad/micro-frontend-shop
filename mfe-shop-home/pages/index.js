import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<>
			<Head>
				<title>µFE Demo</title>
				<meta name="description" content="Micro FE Demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<main>
					<h2>This is a demonstration of how micro frontends with Next.js works</h2>
					<h2>
						Here we have two applications deployed independently (home and products), to make them work as one app we defined the products app as a zone. to read more about it check{' '}
						<a href="https://nextjs.org/docs/advanced-features/multi-zones" target="_blank" rel="noreferrer">Next.js Multi Zones</a>
					</h2>
					<h2>
						Also we are sharing the nav ↑ component from the home app using module federation feature which is introduced in webpack v5 to read more about it check <a  target="_blank" rel="noreferrer" href="https://webpack.js.org/concepts/module-federation/">Module Federation</a>
					</h2>
					<h2>For detailed explanation check this link</h2>
					<h2>
						<a href="https://twitter.com/adelscript" target="_blank" rel="noreferrer">
							@adelscript
						</a>
					</h2>
				</main>
			</Layout>
		</>
	)
}
