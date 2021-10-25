import Link from 'next/link'

const ProductCard = ({product}) => {
    return(
        <Link href={`/product/${product.id}`} passHref>
        <a className="product-card">
            <img src={product.img} alt="product-image" />
            <p>{product.title}</p>
            <p>{product.price}$</p>
        </a>
        </Link>
    )
}


export default ProductCard