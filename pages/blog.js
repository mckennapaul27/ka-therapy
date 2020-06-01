import React, { Component } from 'react';
import NavbarTwo from '../components/NavbarTwo';
import PageBanner from '../components/PageBanner';
import BlogGridThree from '../components/BlogGridThree';
import Footer from '../components/Footer';
import CalmingBlue from '../images/calming-blue.jpg';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle='My Blog' 
                    pageImg={CalmingBlue} 
                />  
                <BlogGridThree />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Blog;