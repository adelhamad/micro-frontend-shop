import dynamic from 'next/dynamic'
import { useSession, signIn, signOut } from 'next-auth/react'

const NavigationBar = dynamic(() => import('homeApp/NavigationBar'), {
	ssr: false,
})

export default function Layout({ children }) {
	const { data: session } = useSession()

	return (
		<>
			<NavigationBar username={session?.user?.name} signIn={signIn} signOut={signOut} />
			{children}
		</>
	)
}
