import React, { Component } from "react";
import NavbarTwo from "../components/NavbarTwo";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import CalmingBlue from "../images/calming-blue.jpg";
import Link from 'next/link';

export default class OneToOne extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarTwo />
        <PageBanner pageTitle="One-to-One Therapy" pageImg={CalmingBlue} />
        <div class="text-container ptb-100">
          <div class="container">
                <h3>One-to-One Therapy </h3>
                <p>One to one therapy usually takes place with your therapist once a week or every fortnight. If CBT is recommended a typical course of treatment usually lasts for between 8 and 20 sessions, with each session lasting 50 minutes.</p>
                <p>Therapy starts with an in-depth assessment which is usually spread over one or two sessions, this allows a shared understanding to be built with your therapist of the development and maintenance of your problem. During the sessions, you will work collaboratively with your therapist to break down your problems into their separate parts; such as your thoughts, physical symptoms, feelings and actions/behaviours. With your therapist you will analyse these areas to work out if they are unrealistic or unhelpful and to determine the effect they have on each other and you. Your therapist will then be able to help you work out how to change unhelpful thoughts and behaviours.</p>
                <p>After working out what you can change, your therapist will help you to learn skills and techniques which you will practice during the session and also between sessions as a home task. This will then be discussed how you got on with the task at the next session. &nbsp;</p>
                <p>The aim of therapy is to teach you to become your own therapist, allowing you to continue to apply the skills which you have learnt during treatment after your course of treatment ends.</p>
                <p><strong>All one-to-one therapy sessions are priced at &pound;60 per session, payable at each session.</strong></p>
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

