import React, { Component } from 'react';
import NavbarTwo from '../components/NavbarTwo';
import PageBanner from '../components/PageBanner';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import CalmingBlue from '../images/calming-blue.jpg';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle='Contact Us' 
                    pageImg={CalmingBlue} 
                />  
                <ContactInfo />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Contact;