import React, { Component } from 'react';
import NavbarTwo from '../components/NavbarTwo';
import PageBanner from '../components/PageBanner';
import ServicesStyleOne from '../components/ServicesStyleOne';
import CtaAreaTwo from '../components/CtaAreaTwo';
import Footer from '../components/Footer';
import CalmingTreeLarge from '../images/calming-tree-large.jpg';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle='What We Can Treat'
                    pageImg={CalmingTreeLarge} 
                />  
                <ServicesStyleOne />
                <CtaAreaTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;