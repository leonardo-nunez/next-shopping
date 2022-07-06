import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import fsPromises from 'fs/promises';
// import path from 'path';
import Image from 'next/image';
import products from '../../data/data.json';

const Customer = (props) => {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const { pid } = router.query;

  console.log('props: ', props);

  // useEffect(() => {
  //   const product = products.filter((product) => product.id === Number(pid));
  //   setProduct(product);
  //   // console.log(product);
  // }, [pid]);

  return (
    <div>
      {/* <Image
        src={products[pid - 1]?.image}
        alt="product image"
        height={500}
        width={500}
      /> */}
      <p>{product.image}</p>
      <h1>{product.title}</h1>
      {console.log(product.title)}
      <h3>{product.description}</h3>
      <h2>€ {product.price}</h2>
    </div>
  );
};

export default Customer;

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data.json');

//   const jsonData = await fsPromises.readFile(filePath);
//   const productData = JSON.parse(jsonData);

//   return { props: productData };
// }
