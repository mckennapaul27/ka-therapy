import React, { Component } from "react";
import NavbarTwo from "../components/NavbarTwo";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import CalmingBlue from "../images/calming-blue.jpg";
import Link from 'next/link';

export default class OnlineTherapy extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarTwo />
        <PageBanner pageTitle="Online Therapy" pageImg={CalmingBlue} />
        <div className="text-container ptb-100">
          <div className="container">
            <h3>Online Therapy</h3>
            <p>You can now choose to have your therapy online rather than a face to face basis if you need more flexibility with appointments.</p>
            
            <p>Privacy and security are taken very seriously, therefore an online telemedicine platform called Doxy.me is used to deliver therapy online. Doxy.me has been chosen as it is more secure than some of the other online platforms, and it also has less connection problems. Doxy.me implements state of the art security and encryption protocols to assure that data integrity and privacy is maintained. Doxy.me complies with HIPPA and HITECH requirements.</p>
            
            <p>You are not required to register for an account with Doxy.me, we will send you the link to access the virtual waiting room at the time of your appointment and Kelly-Anne will connect with you from there. All you need to do is ensure your computer or smartphone that you are calling from has a stable internet connection, a webcam and a microphone installed.</p>
           
            <p>Online therapy sessions are priced at &pound;60 per 50 minute session. It is ideal but not essential, to meet in person for the very first CBT session before commencing online therapy.</p>
            <Link href='/contact'>
                <a className='btn btn-primary'>
                    Contact Me
                </a>
            </Link>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

