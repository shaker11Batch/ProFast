import React from 'react';
import Banner from './Home/Home/Banner/Banner';
import Services from './Home/Service/Services';
import ClientLogosMarquees from './Home/ClientLogosMarquee/ClientLogosMarquees';
import Banifets from './Home/Banifets/Banifets';
import BeMerChant from './Home/BeMerChant/BeMerChant';
import ClientReview from './Home/ClientReview/ClientReview';
import FAQ from './Home/FAQ/FAQ';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <ClientLogosMarquees/>
            <Banifets/>
            <BeMerChant/>
            <ClientReview/>
            <FAQ/>
        </div>
    );
};

export default Home;