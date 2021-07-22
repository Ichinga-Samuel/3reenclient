import React, { useState, useEffect } from 'react';
import CSTMainLayout from '@/components/CustomerSuccessTeam/CSTLayout/CSTMainLayout';
import { CSTProductContainer } from '@/components/CustomerSuccessTeam/Products/CSTProduct.styled';
import CSTProductCard from '@/components/CustomerSuccessTeam/Products/CSTProductCard';
import { useRouter } from 'next/router';
import { Pagination, notification, Spin } from 'antd';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { APP_BASE, CST_API } from '@/utils/ApiList';
import axios from 'axios';

const ProductLists = () => {
    const [loading, setloading] = useState(false);
    const [allproducts, setAllProducts] = useState([]);
    // const [pagination, setPagination] = useState(0);
    const [total, setTotal] = useState(0);
    const token = getFromLocalStorage('csttoken');
    const router = useRouter();

    const viewProductsById = (record: any) => {
        router.push({
            pathname: '/cst/products/[id]',
            query: { id: record.id },
        });
    };

    useEffect(() => {
        const fetchAllOrders = async () => {
            setloading(true);
            try {
                const response = await axios.get(`${APP_BASE}${CST_API.getAllProducts}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { doc, result } = response?.data;
                setAllProducts(doc);
                setTotal(result);
                // setPagination(result);
                setTimeout(() => {
                    setloading(false);
                }, 500);
            } catch (err) {
                notification.error({
                    message: 'Product Error',
                    description: err.response?.data.message,
                    duration: 0,
                });
            }
        };
        fetchAllOrders();
    }, [token]);
    return (
        <>
            <CSTMainLayout layoutTitle="Product Information" pageTitle="Products">
                {loading ? (
                    <div className="loadingspinner">
                        <Spin />
                    </div>
                ) : (
                    <>
                        {allproducts?.length > 0 ? (
                            <>
                                <CSTProductContainer>
                                    {allproducts.map((product) => {
                                        return (
                                            <CSTProductCard
                                                key={product.id}
                                                productName={product?.name}
                                                id={product?.id}
                                                action={() => viewProductsById(product)}
                                                image={product?.image?.[0]}
                                            />
                                        );
                                    })}
                                    <div className="pagination" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                                        <Pagination size="small" defaultCurrent={1} total={total} />
                                    </div>
                                </CSTProductContainer>
                            </>
                        ) : (
                            <div className="noprd">No Products Found</div>
                        )}
                    </>
                )}
            </CSTMainLayout>
        </>
    );
};

export default ProductLists;
