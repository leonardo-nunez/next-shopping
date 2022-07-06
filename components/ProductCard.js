import Image from 'next/image';

const ProductCard = (props) => {
  const prod = JSON.parse(props.product);

  return (
    <div className="card">
      <Image src={prod.image} alt="product image" width="50" height="50" />
      <div className="card__content">
        <h4>{prod.title}</h4>
        <p>€ {prod.price}</p>
        <p>Cathegory: {prod.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
