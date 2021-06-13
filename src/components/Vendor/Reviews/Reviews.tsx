import React, { useState, useEffect } from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { ReviewsStyled } from '@/components/Vendor/Reviews/Reviews.styled';
import { Select, Pagination, Spin, notification } from 'antd';
import { WarningOutlined, MoreOutlined } from '@ant-design/icons';
const { Option } = Select;
import BeautyStars from 'beauty-stars';
import axios from 'axios';
import { APP_BASE, VENDOR_PRODUCT } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [pagination, setPagination] = useState(0);
    const token = getFromLocalStorage('token');

    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };

    useEffect(() => {
        const getVendorReview = async () => {
            setFetching(true);
            await axios
                .get(`${APP_BASE}${VENDOR_PRODUCT.allReview}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response: any) => {
                    const { doc, data, pages } = response;
                    if (data.status === 'success') {
                        setPagination(pages);
                        setReviews(doc);
                        setFetching(false);
                    }
                })
                .catch((err) => {
                    console.log('login err', err.response);
                    setFetching(false);
                    // setorders([]);
                    notification.error({
                        message: 'Error',
                        description: err?.response?.data.message,
                        duration: 0,
                    });
                });
        };
        getVendorReview();
    }, [token]);

    // const fakeReview = [];

    // const paginationObject = {
    //     total: fakeReview.length,
    // };

    return (
        <VendorLayout pageTitle="Reviews" crumbName="Reviews" dashboardTitle="Reviews">
            <ReviewsStyled>
                <div className="reviewContainer">
                    <div className="reviewContainer__header">
                        <div className="sorting">
                            <div>
                                <span>Sort By:</span>
                            </div>
                            <div>
                                <Select defaultValue="Ratings" style={{ width: 150 }} onChange={handleChange}>
                                    <Option value="Ratings">Ratings</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="pagination">
                            <Pagination size="small" total={pagination} showTotal={(total) => `Total ${total} items`} />
                        </div>
                    </div>
                    <div className="reviewContainer__body">
                        {fetching ? (
                            <div>
                                <Spin />
                            </div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Products</th>
                                        <th>Rating</th>
                                        <th>Description</th>
                                        <th>Date Posted</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reviews.length > 0 ? (
                                        reviews.map((rev, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{rev.productName}</td>
                                                    <td>
                                                        <div className="reviewContainer__rating">
                                                            <BeautyStars
                                                                value={rev.rating}
                                                                activeColor="#ffaf38"
                                                                size="14px"
                                                                inactiveColor="#E2DDDD"
                                                                maxStars={5}
                                                            />
                                                            {/* {Array(rev.rating)
                                                        .fill()
                                                        .map((_, index) => (
                                                            <p key={index}>
                                                                <StarFilled />
                                                            </p>
                                                        ))} */}
                                                        </div>
                                                    </td>
                                                    <td>{rev.ratingDesc}</td>
                                                    <td>{rev.datePosted}</td>
                                                    <td>
                                                        <MoreOutlined />
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={5} style={{ padding: 0 }}>
                                                <div className="reviewContainer__nodata">
                                                    <WarningOutlined className="nodata_icon" />
                                                    <span>No Record Found!</span>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </ReviewsStyled>
        </VendorLayout>
    );
};

export default Reviews;
