import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Layout from '../components/Layout'

export default function Home() {
	const { data: session } = useSession()

	return (
		<>
			<Head>
				<title>µFE Demo | Profile</title>
				<meta name="description" content="Micro FE Demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<main>
					<h2>Simple Profile Page, data here is based on next-auth session</h2>

					{session ? (
						<>
							<h3>Name: {session.user.name}</h3>
							<h3>Email: {session.user.email}</h3>
						</>
					) : (
						<>
							<p>Unauthorized, Please Login.</p>
						</>
					)}
				</main>
			</Layout>
		</>
	)
}
