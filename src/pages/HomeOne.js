import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroSlider from '../container/IntroSlider/IntroSlider';
import HomeAbout from '../components/About/HomeAbout.jsx';
import ServiceIconBox from '../container/service/ServiceIconBox';
import HomeSuccess from '../components/Success/HomeSuccess';
import Portfolio from '../container/Portfolio/Portfolio';
import HomeBlog from '../container/BlogGrid/HomeBlog';
import Newsletter from '../container/Newsletter/Newsletter';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import LiveChat from '../components/LiveChat';



const HomeOne = () => {
    return (
        <React.Fragment>
            <SEO title="Gateway Congregate – Committed to providing superior healthcare solutions to improve patients lives." />
            <Header />
            <IntroSlider />
            <HomeAbout />
            {/* <ServiceIconBox classOption="bg-color-1" /> */}
            {/* <HomeSuccess /> */}
            {/* <Portfolio /> */}
            {/* <HomeBlog /> */}
            <Newsletter />
            <ContactInformation />
            <LiveChat />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeOne;



