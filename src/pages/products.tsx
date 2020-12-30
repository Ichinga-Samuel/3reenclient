import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import Card from '@/components/Products/CardsLayout';
import Categories from '@/components/Products/Categories';

import { Page, FooterDiv, ImageHeader } from '@/components/Products/CardsLayout.styled';
function products() {
    return (
        <Page>
            <Header />
            <ImageHeader>
                <img src="/img/hp-omen.png" alt="hpomen" />
            </ImageHeader>
            <Card />
            <FooterDiv>
                <Categories />
                <Footer />
            </FooterDiv>
        </Page>
    );
}

export default products;
