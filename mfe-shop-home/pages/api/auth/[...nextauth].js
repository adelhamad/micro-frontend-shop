import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options = {
	providers: [
		CredentialsProvider({
			name: 'µFE',
			// The credentials property is used to generate a suitable form on the sign in page.
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// Add logic here to look up the user from the credentials supplied
				const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com', meta: 'data' }
				// const user = false
				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user
				}
				// If you return null or false then the credentials will be rejected
				return null
				// You can also Reject this callback with an Error or with a URL:
				// throw new Error('error message') // Redirect to error page
				// throw '/path/to/redirect'        // Redirect to a URL
			},
		}),
	],
	session: {
		jwt: true,
	},
	jwt: {
		secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
		encryption: true,
		signingKey: '{"kty":"oct","kid":"Avyk2ib7GV1zoCXfnCdgHGWTRNT_t6VaXteICSNoAkw","alg":"HS512","k":"J1PUUch-TsGspq1bFMhd9Q-thFRDWwkhQy8nVw0DhEo"}',
		encryptionKey: '{"kty":"oct","kid":"dVO0fAPQDxaZ9S2SnzHEa9-0spte9Y8apTJVqoZG__A","alg":"A256GCM","k":"k576i864CnpP7UkPjkPSV2_YHYe9gApsGX1kF2Ysxls"}',
		// to generate new keys check this commenet https://github.com/nextauthjs/next-auth/issues/484#issuecomment-709357223
	},
	callbacks: {
		async session({ session, user, token }) {
			session.additional = 'data';
			return session
		},
	},
}

export default (req, res) => NextAuth(req, res, options)
