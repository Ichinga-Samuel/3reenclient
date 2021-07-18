import Header from '@/components/Header/Header';
import Card from '@/components/Products/CardsLayout';

import { Page, ImageHeader } from '@/components/Products/CardsLayout.styled';
// import Categories from '@/components/Products/Categories';
function products() {
    return (
        <Page>
            <Header />
            <ImageHeader />
            <Card />
        </Page>
    );
}

export default products;
