import React from 'react';
import { ProductCard } from '@/components/QualityAssurance/QALayout/QAGeneral.styled';
import { formatAmount } from '@/utils/helpers';
import BeautyStars from 'beauty-stars';

const ProductImageCard = (props: any) => {
    const { details } = props;
    console.log('car', details?.products[0]);
    const { name, price, averageRating, images } = details?.products[0].product;
    return (
        <ProductCard>
            <div className="imageholder">
                <img src={images[0]} alt={name} />
            </div>
            <div className="i_details">
                <p>{name}</p>
                <BeautyStars
                    value={averageRating}
                    activeColor="#ffaf38"
                    size="11px"
                    inactiveColor="#E2DDDD"
                    maxStars={5}
                    gap={5}
                />
                <p>&#x20A6; {formatAmount(price)}</p>
            </div>
        </ProductCard>
    );
};

export default ProductImageCard;
