import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { services } from '../data/data';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i className='pe-7s-angle-left'></i>",
        "<i className='icofont-thin-double-right'></i>"
    ],
    responsive:{
        0: {
            items:1,
        },
        768: {
            items:2,
        },
        1200: {
            items:3,
        }
    }
}

class LatestNewsSlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className='blog-area bg-fcfbfb ptb-100'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>Testimonials</h2>
                        <p>Coming soon....</p>
                    </div>

                    <div className='row'>
                        {this.state.display ? <OwlCarousel 
                        className='blog-slides owl-carousel owl-theme'
                            {...options}
                            >
                            {services.map((s, i) => <div className='col-lg-12' key={i}>
                                <div className='single-blog-item'>
                                    <div className='blog-image'>
                                        <Link href='/blog-details'>
                                            <a>
                                                <img src={require(`../images/${s.src}`)} alt='image' />
                                            </a>
                                        </Link>

                                        <div className='post-tag'>
                                            <Link href='/'>
                                                <a>{s.id}</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='blog-post-content'>
                                        <span className='date'>{s.date}</span>
                                        <h3>
                                            <Link href='/blog-details'>
                                                <a>{s.title}</a>
                                            </Link>
                                        </h3>

                                        <p>{s.desc}</p>
                                        <Link href={`${s.url}`}>
                                            <a className='read-more-btn'>
                                                Read More 
                                                <i className='icofont-thin-double-right'></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>)}
                            
                            
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestNewsSlider;