import Link from 'next/link'
import styles from '../styles/Nav.module.css'

function NavigationBar({ username, signIn, signOut }) {
	const rootURL = typeof window !== 'undefined' ? window.location.protocol + '//' + window.location.host : '#'
	return (
		<nav className={styles.sharednav}>
			<p>µFE Nav</p>
			<div className="links">
				<Link href={rootURL}>
					<a>Home</a>
				</Link>
				<Link href={`${rootURL}/products`}>
					<a>Products</a>
				</Link>
				<Link href={`${rootURL}/products/product/random`}>
					<a>Random Product</a>
				</Link>
			</div>
			{username ? (
				<div>
					<Link href={`${rootURL}/profile`}>
						<a>{username}</a>
					</Link>
					<button onClick={signOut}>Logout</button>
				</div>
			) : (
				<button onClick={signIn}>Login</button>
			)}
		</nav>
	)
}

export default NavigationBar
