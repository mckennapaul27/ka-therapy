import React, { Component } from "react";
import NavbarTwo from "../components/NavbarTwo";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import CalmingBlue from "../images/calming-blue.jpg";

export default class Complaints extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarTwo />
        <PageBanner pageTitle="Complaints Policy" pageImg={CalmingBlue} />
        <div class="text-container ptb-100">
          <div class="container">
           <h3>Complaints Policy</h3>
            
           
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

