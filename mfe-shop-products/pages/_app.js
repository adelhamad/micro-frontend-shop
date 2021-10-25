import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<Script strategy="beforeInteractive" src={`${process.env.NEXT_PUBLIC_HOME_URL}/_next/static/chunks/remoteEntry.js`} />
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	)
}

export default MyApp
