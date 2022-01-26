import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className='about-area ptb-100'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5 col-md-12'>
                            <div className='about-image'>
                                <img
                                    src={require('../images/calming-mountains.jpg')}
                                    alt='image'
                                    className='rounded-10'
                                />
                            </div>
                        </div>

                        <div className='col-lg-7 col-md-12'>
                            <div className='about-content about-content-two'>
                                <div className='section-title'>
                                    <h2>A Warm Welcome</h2>
                                    <p>
                                        KA-Therapy offers Cognitive Behavioural
                                        Psychotherapy, an evidence-based
                                        psychotherapy to help you improve your
                                        psychological wellbeing. Therapies are
                                        delivered in a quiet, private and
                                        comfortable environment, providing a
                                        safe therapeutic space to explore your
                                        difficulties.{' '}
                                    </p>
                                </div>

                                <div className='about-text'></div>

                                <div className='about-text'>
                                    <h4>My Experience</h4>
                                    <p>
                                        I possess a warm, empathetic and
                                        supportive style which compliments my
                                        clinical expertise which I have
                                        developed over a number of years working
                                        in a variety of different roles of
                                        helping others to improve their
                                        wellbeing. I am a BABCP registered
                                        Cognitive Behavioural Psychotherapist
                                        alongside being a qualified NMC
                                        registered Mental Health Nurse. I
                                        currently practice clinically as a
                                        Cognitive Behavioural Psychotherapist
                                        and work with people who experience a
                                        range of problems. Please don't hesitate
                                        to get in touch to see if what you are
                                        experiencing is something which I can
                                        help you with.
                                    </p>
                                </div>
                                <div className='about-text'>
                                    <p>
                                        I have worked in a variety of different
                                        settings including; HMP Prison services,
                                        Criminal Justice, Drug &amp; Alcohol
                                        Services, Secure Hospitals, Community
                                        Mental Health Services, Learning
                                        Disabilities, General Hospitals and
                                        Rehabilitation Centres. My passion is
                                        working with people; helping individuals
                                        to overcome their difficulties and work
                                        towards their personal goals.
                                    </p>
                                </div>
                                <div className='about-text'>
                                    <p>
                                        KA-Therapy offers services in Manchester
                                        City Centre, Stockport, Wilmslow and
                                        surrounding areas.
                                    </p>
                                </div>
                                <Link href='/about'>
                                    <a className='btn btn-primary'>Read more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
