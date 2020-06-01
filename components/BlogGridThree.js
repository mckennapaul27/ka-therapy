import React, { Component } from 'react';
import Link from 'next/link';
import { services } from '../data/data';

class BlogGrid extends Component {
    render() {
        return (
            <div className='blog-area ptb-100'>
                <div className='container'>
                    <div className='row'>
                        {services.map((s, i) => <div className='col-lg-4 col-md-6' key={i}>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogGrid;