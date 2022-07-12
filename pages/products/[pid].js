import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';

const Product = ({ allProducts }) => {
  const router = useRouter();
  const { pid } = router.query;
  const product = allProducts.find((product) => product.id === Number(pid));
  // console.log('all: ', allProducts);
  // console.log('pid: ', pid);
  // console.log('found: ', product);

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

export async function getServerSideProps(context) {
  const response = await fetch('https://fakestoreapi.com/products');
  const allProducts = await response.json();

  if (!allProducts) return { notFound: true };

  return {
    props: { allProducts },
  };
}
