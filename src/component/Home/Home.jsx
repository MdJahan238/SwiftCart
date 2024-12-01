import React from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import InfoCardBanner from './InfoCardBanner/InfoCardBanner';
import Footer from '../Shared/Footer/Footer';
import ProductSection from './ProductSection/ProductSection';
import CollectionSection from './CollectionSection/CollectionSection';
import NewsletterSection from './NewsLetterSection/NewsLetterSection';

const Home = () => {
    return (
        <div className='max-h-screen overflow-auto z-0'>
              <h1>Home page</h1>
              <div className='p-5'>
                <BannerSlider></BannerSlider>
              </div>
              <div className='p-5'>
                <InfoCardBanner></InfoCardBanner>
              </div>
              <h1>Product</h1>
              <div>
                <ProductSection></ProductSection>
              </div>

              <h1>Collection</h1>
              <div>
                <CollectionSection></CollectionSection>
              </div>
              
              <h1>News Letter</h1>
              <div className='p-4'>
                <NewsletterSection></NewsletterSection>
              </div>
          
        </div>
    );
};

export default Home;