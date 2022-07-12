import { useRouter } from 'next/router';
import Image from 'next/image';
import products from '../../data/data.json';
import { Button } from '@mui/material';
import Link from 'next/link';

const Product = () => {
  const router = useRouter();
  const { pid } = router.query;
  // const product = products.find((product) => product.id === pid);

  return (
    <div className="product">
      <Image
        src={products[pid - 1]?.image}
        alt="product image"
        height={500}
        width={500}
      />
      {/* <h1>Found title: {product?.title}</h1> */}
      <h1>{products[pid - 1]?.title}</h1>
      <h3>{products[pid - 1]?.description}</h3>
      <h5>Category: {products[pid - 1]?.category}</h5>
      <h2>€ {products[pid - 1]?.price}</h2>
      <Link href="/">
        <Button type="button">Back</Button>
      </Link>
    </div>
  );
};

export default Product;
