import React, { Component } from 'react';
import NavbarTwo from '../components/NavbarTwo';
import MainBanner from '../components/MainBanner';
import About from '../components/About';
import LatestNewsSlider from '../components/LatestNewsSlider';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';


class StudioAgency extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <MainBanner />
                <About />
                <LatestNewsSlider />
                <ContactInfo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default StudioAgency;