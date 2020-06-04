import React, { Component } from "react";
import NavbarTwo from "../components/NavbarTwo";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import CalmingBlue from "../images/calming-blue.jpg";
import Link from 'next/link';

export default class CBT extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarTwo />
        <PageBanner pageTitle="CBT (Cognitive Behavioral Therapy)" pageImg={CalmingBlue} />
        <div class="text-container ptb-100">
          <div class="container">
            <h3>CBT</h3>
            <p>Cognitive Behavioural Therapy (CBT) is a talking therapy which is evidence-based and proven to help treat a wide range of emotional and physical health conditions. CBT looks at how we think about a situation and how this affects how we act. It further explores how our actions can affect how we think, feel and behave. The therapist and client work collaboratively in changing the clients behaviours and/or their thinking patterns.</p>
            <p>NICE provide independent, evidence-based guidelines for the NHS on the most effective ways to treat disease and ill health.</p>
            <p>NICE guidelines recommend CBT in the treatment of the following conditions:</p>
            <ul>
                <li>Anxiety Disorders (including panic attacks and post-traumatic stress disorder)</li>
                <li>Depression</li>
                <li>Obsessive Compulsive Disorder</li>
                <li>Schizophrenia and Psychosis</li>
                <li>Bipolar Disorder</li>
            </ul>
            <p>There is also good evidence that CBT is helpful in treating many other conditions including:</p>
            <ul>
                <li>Chronic fatigue</li>
                <li>Behavioural Difficulties in children</li>
                <li>Anxiety Disorders in Children</li>
                <li>Chronic Pain</li>
                <li>Physical Symptoms without a medical diagnosis</li>
                <li>Sleep Difficulties</li>
                <li>Anger Management</li>
                <li>Low self esteem</li>
                <li>Addictions</li>
            </ul>
            <p>CBT can be used alongside medication which has been prescribed by your GP. CBT can also be utilised on its own. This depends on the difficulty you require help with.</p>
            <p>CBT can be offered in individual sessions with a therapist or as part of a group. The number of sessions you will require depends on the difficulty you want help with, it will often be between 8 and 20 weekly sessions lasting 50 minutes.</p>
            <p>CBT is mainly concerned with how you currently think and act, instead of looking at and getting help with difficulties from your past.</p>
            <p>You and your therapist will discuss your specific difficulties in your assessment sessions and set goals to achieve. CBT is not a quick fix, it requires commitment and hard work both during and between sessions.</p>
            <p>Your therapist will not tell you what to do, they will help you decide which difficulties you want to work on in order to help you improve your situation. Your therapist will advise you on how to continue using CBT techniques in your daily life after treatment ends.</p>
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

