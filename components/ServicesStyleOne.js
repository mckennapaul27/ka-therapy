import React, { Component } from 'react';
import Link from 'next/link';
import { treatments } from '../data/data';

class ServicesStyleOne extends Component {

    render() {
        return (
            <div className='bg-fcfbfb ptb-100 pb-60'>
                <div className='container'>
                    <div className='row'>
                        {treatments.map((t, i) => <div className='col-lg-4 col-sm-6'>
                            <div className='service-card-one'>
                                <img src={t.img} />
                                <br/>
                                <br/>
                                <h3>
                                    <Link href='/service-details'>
                                        <a>{t.title}</a>
                                    </Link>
                                </h3>
                                <p>{t.desc}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesStyleOne;