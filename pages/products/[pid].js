import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';

const getAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const allProducts = await response.json();
  return allProducts;
};

const Product = ({ product }) => {
  return (
    <div className="product">
      <Image
        src={product?.image}
        alt="product image"
        height={500}
        width={500}
      />
      <h1>Found title: {product?.title}</h1>
      <h1>{product?.title}</h1>
      <h3>{product?.description}</h3>
      <h5>Category: {product?.category}</h5>
      <h2>€ {product?.price}</h2>
      <Link href="/">
        <Button type="button">Back</Button>
      </Link>
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  const allProducts = await getAllProducts();

  const paths = allProducts.map((product) => ({
    params: {
      pid: `${product.id}`,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const allProducts = await getAllProducts();
  const product = allProducts.find(
    (product) => product.id === Number(params.pid)
  );

  if (!product) return { notFound: true };

  return {
    props: { product },
  };
}
