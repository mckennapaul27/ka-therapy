import React, { Component } from "react";
import NavbarTwo from "../components/NavbarTwo";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import CalmingBlue from "../images/calming-blue.jpg";
import Link from 'next/link';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarTwo />
        <PageBanner pageTitle="About" pageImg={CalmingBlue} />
        <div className="text-container ptb-100">
            <div className="container">
                <h4>About</h4>
                <p><strong><em>A Warm Welcome</em></strong></p>
                <p>1 in 4 of us will experience a common mental health problem in a given year. Modern life has affected us all in different ways, it has made all of us more susceptible to anxiety, depression and other common emotional problems. All of us can become stressed in our life for example as employees, students, graduates, housewifes/husbands etc. Despite living in an age where social media is now one of life&rsquo;s essentials, we struggle to cope with social isolation and feeling connected with others. It allows us to compare ourselves with others, leaving us scrutinising ourselves, leaving many of us feeling inadequate and unattractive.</p>
                <p>KA-Therapy offers Cognitive Behavioural Psychotherapy, an evidence-based psychotherapy to help you improve your psychological wellbeing. Therapies are delivered in a quiet, private and comfortable environment, providing a safe therapeutic space to explore your difficulties.</p>
                <p><strong><em>My Experience</em></strong></p>
                <p>I possess a warm, empathetic and supportive style which compliments my clinical expertise which I have developed over a number of years working in a variety of different roles of helping others to improve their wellbeing. I am an NMC registered Mental Health Nurse, alongside practising as a Cognitive Behavioural Psychotherapist.</p>
                <p>I have worked in a variety of different settings including; HMP Prison services, Criminal Justice, Drug &amp; Alcohol Services, Secure Hospitals, Community Mental Health Services, Learning Disabilities, General Hospitals, Rehabilitation Centres, online therapy and face to face therapy. My passion is working with people; helping individuals to overcome their difficulties and work towards their personal goals.</p>
                <p>I offer Cognitive Behavioural Therapy (CBT) and pride myself on the quality of therapy I provide and my success rate in helping clients.</p>
                <p><strong><em>Our Goal</em></strong></p>
                <p>Our primary goal is to allow you to explore your difficulties collaboratively in a safe environment. Further allowing you to move forward to where you want to be in your life, being professional in areas such as confidentiality, professional standards and delivering effective CBT interventions whilst allowing the therapeutic relationship to grow.</p>
                <p>We treat a range of different mental health disorders, explore your difficulties and develop a personalised treatment plan using evidence-based strategies.</p>
                <p>Please view my client feedback page so you can hear from other clients about their experiences of my service.</p>
                <p>KA-Therapy offers services in Manchester City Centre, Stockport, Wilmslow and surrounding areas. KA-therapy also offers online therapy so therapy can take place anywhere within the UK.</p>
                <p>I look forward to hearing from you.</p>
                <p>Warm Regards,</p>
                <p>KA-Therapy.&nbsp;</p>
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

