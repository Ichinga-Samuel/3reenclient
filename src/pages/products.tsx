import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import Card from '@/components/Products/Cards';
import Categories from '@/components/Products/Categories';

function products() {
    return (
        <>
            <Header />
            <img src="/img/hp-omen.png" alt="hpomen" />
            <Card />
            <div>
                <Categories />
                <Footer />
            </div>
        </>
    );
}

export default products;
