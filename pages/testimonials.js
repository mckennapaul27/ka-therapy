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
                    pageTitle='Testimonials' 
                    pageImg={CalmingBlue} 
                />  
                {/* <BlogGridThree /> */}
                <div className="text-container ptb-100">
                     <div className="container">
                        <h6>Eating Disorder. November 2020, SB.</h6>
                        <p>Hi Kelly Anne,</p>
                        <p>I hope you are ok...I just want to send you email to thank you so much for all the help and support you have given me within our sessions, without you I wouldn’t be getting the serious help that I really need and has possibly saved my life in all honesty...to of got that for me is something I believe you have gone well beyond and above so I couldn’t be more thankful or grateful.</p>
                        <p>I would also like for you to forward this email on to your manager/supervisor as recognition for them to see because there should be more people like yourself out there to help and support people most in need.</p>
                        <p>Once again I can’t thank you enough for everything, all the best.</p>
                        <hr/>
                        <h6>Hospital Phobia. December 2020, CA.</h6>
                        <p>Hi Kelly</p>
                        <p>Thank you for your time and commitment, your therapy helped me so much I think more positively, I am able to rationalise and challenge my thoughts and I have visited the hospital to get coffee whilst still waited in the grounds to drink this. I can’t thank you enough for your support. I no longer faint in or around hospitals or watching hospital programmes and I have not experienced a panic attack when discussing hospitals/procedures since engaging in therapy.</p>
                        <hr/>
                        <h6>Social Anxiety Disorder. January 2021, SH.</h6>
                        <p>Hello again Kelly,</p>
                        <p>Just wanted reiterate my massive thank you for all your time/materials/help which is greatly appreciated. As they say “The proof is in the pudding” in our case I have come out of my shell and began to live again and not just exist as I felt I was doing before crossing paths with your kind and helpful self. The CBT you have delivered has turned my life completely around and allowed me to get two jobs and be consistently positive and confident in all life throws at me. </p>
                        <p>I have ceased to be negative and avoid situations in fear of failure and bad outcomes instead I face things head on and ensure I am always happy and comfortable and not just being a people pleaser all the time. I have a voice now and am not afraid to express if I am not happy and have learned to change/modify things to make any experience comfortable for me and never allow others to dictate my life as I did prior to meeting you. </p>
                        <p>THANK YOU does not seem enough to say for making me the strong person I am today. I will continue to go from strength to strength and never revisit the past negatively ever again. The techniques and mindset lessons/challenging you have taught me will be with me forever and keep me winning.</p>
                        <p>Wish you and family all the best in life.</p>
                        <p>Sincerely from a success story/person.</p>
                        <hr/>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Blog;