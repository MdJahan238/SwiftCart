import React from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import InfoCardBanner from './InfoCardBanner/InfoCardBanner';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className='max-h-screen overflow-auto'>
              <h1>Home page</h1>
              <div className='p-5'>
                <BannerSlider></BannerSlider>
              </div>
              <div className='p-5'>
                <InfoCardBanner></InfoCardBanner>
              </div>
              
          
        </div>
    );
};

export default Home;