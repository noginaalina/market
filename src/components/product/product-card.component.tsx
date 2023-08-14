import { memo, FC } from 'react';
import { ProductModel } from '../../models/product.model';

type ProductCardProps = {
product: ProductModel;
}

const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {

    const { product } = props
    const { title, image, price, description } = product;

    return (<div>
<h1 className="text-3xl font-bold underline text-red-600">{title}</h1>
<img src={image} alt={title} />
<span>{price} $</span>
<div >{description}</div>
    </div>);
};

export default memo(ProductCard);
