const PRODUCTS_URL = process.env.PRODUCTS_URL

const { withFederatedSidecar } = require('./lib/@module-federation/nextjs-mf')

module.exports = withFederatedSidecar({
	name: 'homeApp',
	filename: 'static/chunks/remoteEntry.js',
	exposes: {
		'./NavigationBar': './components/NavigationBar.js',
	},
	shared: {
		react: {
			// Notice shared are NOT eager here.
			requiredVersion: false,
			singleton: true,
		},
	},
})({
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: `/:path*`,
			},
			{
				source: '/products',
				destination: `${PRODUCTS_URL}/products`,
			},
			{
				source: '/products/:path*',
				destination: `${PRODUCTS_URL}/products/:path*`,
			},
		]
	},
})
