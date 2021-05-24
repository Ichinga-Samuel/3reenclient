import React from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { ReviewsStyled } from '@/components/Vendor/Reviews/Reviews.styled';
import { Select, Pagination } from 'antd';
import { WarningOutlined, MoreOutlined } from '@ant-design/icons';
const { Option } = Select;
import BeautyStars from 'beauty-stars';

const handleChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(`selected ${value}`);
};

const fakeReview = [
    {
        id: 1,
        productName: 'Nike summer Combo Sports',
        rating: 4,
        ratingDesc: 'Fabulous Shoes with strong build. I look forward to buy more stuffs like this from your shop.',
        datePosted: '05-12-2020',
    },
    {
        id: 2,
        productName: 'Nike summer Combo',
        rating: 3,
        ratingDesc: 'Fabulous Shoes with strong build. I look forward to buy more stuffs like this from your shop.',
        datePosted: '05-12-2021',
    },
    {
        id: 3,
        productName: 'Nike summer Combo 2',
        rating: 5,
        ratingDesc: 'Fabulous Shoes with strong build. I look forward to buy more stuffs like this from your shop.',
        datePosted: '05-12-2021',
    },
    {
        id: 4,
        productName: 'Nike summer Combo',
        rating: 3,
        ratingDesc: 'Fabulous Shoes with strong build. I look forward to buy more stuffs like this from your shop.',
        datePosted: '15-12-2021',
    },
    {
        id: 5,
        productName: 'Nike summer Combo',
        rating: 5,
        ratingDesc: 'Fabulous Shoes with strong build. I look forward to buy more stuffs like this from your shop.',
        datePosted: '05-12-2021',
    },
    {
        id: 6,
        productName: 'Nike summer Combo',
        rating: 5,
        ratingDesc: 'Fabulous Shoes with strong build. I look forward to buy more stuffs like this from your shop.',
        datePosted: '15-05-2021',
    },
];

// const fakeReview = [];

const paginationObject = {
    total: fakeReview.length,
};
const Reviews = () => {
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
                            <Pagination
                                size="small"
                                total={paginationObject.total}
                                showTotal={(total) => `Total ${total} items`}
                            />
                        </div>
                    </div>
                    <div className="reviewContainer__body">
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
                                {fakeReview.length > 0 ? (
                                    fakeReview.map((rev, index) => {
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
                    </div>
                </div>
            </ReviewsStyled>
        </VendorLayout>
    );
};

export default Reviews;
