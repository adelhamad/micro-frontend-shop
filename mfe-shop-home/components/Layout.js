import { useSession, signIn, signOut } from 'next-auth/react'
import NavigationBar from './NavigationBar'

export default function Layout({ children }) {
	const { data: session } = useSession()

	return (
		<>
			<NavigationBar username={session?.user?.name} signIn={signIn} signOut={signOut} />
			{children}
		</>
	)
}
