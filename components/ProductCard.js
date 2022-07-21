import Image from 'next/image';

import Button from './Button';
import { categories } from '../pages/index';

import styles from './ProductCard.module.scss';

const ProductCard = (props) => {
  const prod = JSON.parse(props.product);
  const category = categories.find((c) => c.value === prod.category);

  return (
    <div className={styles.card}>
      <div className={styles.card__img_section}>
        <div className={styles.card__img_wrapper}>
          <Button
            style={{ backgroundColor: category.color }}
            className={`${styles.nav__button} ${styles.nav__button_card}`}
            value={category.value}
            icon={
              <Image
                src={category.icon}
                alt={category.value}
                height="20"
                width="20"
              />
            }
          />
          <Image
            src={prod.image}
            alt="product image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.card__content}>
        <p>{prod.title}</p>
        <h4>€ {prod.price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
