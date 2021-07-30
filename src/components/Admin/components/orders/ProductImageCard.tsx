import React from 'react';
import { ProductCard } from '@/components/QualityAssurance/QALayout/QAGeneral.styled';
// import { formatAmount } from '@/utils/helpers';
import BeautyStars from 'beauty-stars';
import { Carousel } from 'antd';
import { CURRENCY, formatAmount } from '@/utils/helpers';

const ProductImageCard = (props: any) => {
    const { details } = props;
    const allProducts = details.products;
    return (
        <>
            <Carousel autoplay={false}>
                {allProducts?.map((detail: any) => {
                    return (
                        <ProductCard key={detail.product._id}>
                            <div className="imageholder">
                                <img src={detail.product.images} alt={detail.product.name} />
                            </div>
                            <div className="i_details">
                                <p>{detail.product.name}</p>
                                <BeautyStars
                                    value={detail.product.averageRating}
                                    activeColor="#ffaf38"
                                    size="11px"
                                    inactiveColor="#E2DDDD"
                                    maxStars={5}
                                    gap={5}
                                />
                                <p>
                                    {CURRENCY}
                                    {formatAmount(detail.product.price)}
                                </p>
                                <p>&#x20A6; detail.product.price</p>
                            </div>
                        </ProductCard>
                    );
                })}
            </Carousel>
        </>
    );
};

export default ProductImageCard;
