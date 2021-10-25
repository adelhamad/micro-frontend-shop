import { useRouter } from 'next/router'
import Head from 'next/head'
import products from '../../data/products.json'
import Layout from '../../components/Layout'

const Product = () => {
	const router = useRouter()
	const { id } = router.query
	const selectedId = id === 'random' ? parseInt(Math.random() * 20 + 1) : id
	const product = products.find((prod) => prod.id == selectedId)

	return (
		<>
			<Head>
				<title>µFE Demo | Products</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<main>
					<h1>Product Details</h1>
					{product ? (
						<div>
							<img src={product.img} width="300" />
							<p>
								<strong>Title: </strong>
								{product.title}
							</p>
							<p>
								<strong>Price: </strong>
								{product.price}$
							</p>
							<p>
								<strong>Description: </strong>
								{product.description}
							</p>
						</div>
					) : (
						<p>Invalid Product</p>
					)}
				</main>
			</Layout>
		</>
	)
}

export default Product
