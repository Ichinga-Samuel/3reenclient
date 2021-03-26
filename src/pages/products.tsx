import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Card from '@/components/Products/CardsLayout';

import { Page, ImageHeader } from '@/components/Products/CardsLayout.styled';
// import Categories from '@/components/Products/Categories';
function products() {
    return (
        <Page>
            <Header />
            <ImageHeader/>
            <Card />
            <Footer />
        </Page>
    );
}

export default products;
