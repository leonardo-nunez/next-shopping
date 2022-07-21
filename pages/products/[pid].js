import Image from 'next/image';

import Button from '../../components/Button';

import Link from 'next/link';
import styles from '../../styles/Product.module.scss';

import { categories } from '../index';

const getAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const allProducts = await response.json();
  return allProducts;
};

const Product = ({ product }) => {
  const category = categories.find((c) => c.value === product.category);
  return (
    <div className={styles.product}>
      <div
        className={styles.product_img__wrapper}
        style={{
          position: 'relative',
          width: '300px',
          height: '300px',
          maxHeight: '500px',
          maxWidth: '500px',
        }}
      >
        <Image
          src={product.image}
          alt="product image"
          layout="fill"
          objectFit="contain"
          priority
        />
        <Button
          style={{ backgroundColor: category.color }}
          className={`${styles.nav__button} ${styles.nav__button__product_page}`}
          value={category.value}
          icon={
            <Image
              src={category.icon}
              alt={category.value}
              height="50"
              width="50"
            />
          }
        />
      </div>
      <div className={styles.content}>
        <h1>{product.title}</h1>
        <h3>{product.description}</h3>
        <h2>€ {product.price}</h2>
        <Link href="/">
          <button className={styles.back_button} type="button">
            &lt;
          </button>
        </Link>
      </div>
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
