import React from 'react';
import Header from '../Header/Header';
import Jumbotron from '../Jumbotron/Jumbotron';
import SubHero from '../SubHero/SubHero';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import BestSellerSectionHome from '../BestSellerItems/BestSellerSectionHome/BestSellerSectionHome';
import HomepageBanner from '../HomepageBanner/HomepageBanner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Jumbotron />
            <main>
                <SubHero />
            </main>
            <FeaturedProducts />
            <BestSellerSectionHome />
            <HomepageBanner />
            <Footer />
        </>
    );
};

export default Home;
