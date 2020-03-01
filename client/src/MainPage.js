import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/style.css";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container-fluid">
          <div className="mainpage-1" style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <p className="font-styled-11">
                  <b>Brainstorming for</b>
                </p>
                <p className="font-styled-11">desired perfect Usability</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 col-lg-6">
                <p className="font-styled-9">
                  Our design projects are fresh and simple and will benefit your
                  business greatly. Learn more about our work!{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <button type="button" className="btn btn-light">
                  <Link className="link" to="/users" className="font-styled-13">
                    View Stats
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="mainpage-2">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-4">
                <p className="font-styled">
                  Why <b>small business owners</b> love AppCo?
                </p>
              </div>
            </div>
            <p className="font-styled-8">
              Our design projects are fresh and simple and will benefit your
              business greatly. Learn more about our work!
            </p>
            <div className="row ">
              <div className="col-12 col-lg-4">
                <div
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
                    borderRadius: "32px",
                    width: "380px",
                    height: "323px",
                    margin: "0 auto",
                    marginBottom: "20px"
                  }}
                >
                  <img
                    src={img1}
                    style={{ marginBottom: "30px", marginTop: "30px" }}
                    alt=""
                  />
                  <p className="font-styled-4">Clean Design</p>
                  <p className="font-styled-6">
                    Increase sales by showing true dynamics of your website.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="col-12 collg-4">
                  <div
                    className=""
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
                      borderRadius: "32px",
                      width: "380px",
                      height: "323px",
                      margin: "0 auto",
                      marginBottom: "20px"
                    }}
                  >
                    <img
                      src={img2}
                      style={{ marginBottom: "30px", marginTop: "30px" }}
                      alt=""
                    />
                    <p className="font-styled-4">Secure Data</p>
                    <p className="font-styled-6">
                      Build your online store’s trust using Social Proof &
                      Urgency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="col-12 col-lg-4">
                  <div
                    className=""
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
                      borderRadius: "32px",
                      width: "380px",
                      height: "323px",
                      margin: "0 auto",
                      marginBottom: "20px"
                    }}
                  >
                    <img
                      src={img3}
                      style={{ marginBottom: "30px", marginTop: "30px" }}
                      alt=""
                    />
                    <p className="font-styled-4">Retina Ready</p>
                    <p className="font-styled-6">
                      Realize importance of social proof in customer’s purchase
                      decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainpage-3" style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <p className="font-styled-12">
                  Start Managing your apps business, more faster
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <p className="font-styled-10">
                  Objectively deliver professional value with diverse
                  web-readiness. Collaboratively transition wireless customer
                  service without goal-oriented catalysts for change.
                  Collaboratively{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <button type="button" className="btn btn-light">
                  <Link className="link" to="/users" className="font-styled-13">
                    Learn more
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="mainpage-2" style={{ padding: "10px" }}>
            <div className="row justify-content-center">
              <p className="font-styled">
                <b>Affordable Pricing and Packages</b>
              </p>
              <p className="font-styled">choose your best one</p>
            </div>
            <div className="row justify-content-center">
              <p className="font-styled-8">
                Monotonectally grow strategic process improvements vis-a-vis
                integrated resources.
              </p>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
                    borderRadius: "32px",
                    width: "380px",
                    height: "627px",
                    margin: "0 auto",
                    marginBottom: "20px"
                  }}
                >
                  <p className="font-styled-4">Basic</p>
                  <img src={img4} alt="" />
                  <p className="font-styled-5">$29</p>

                  <p className="font-styled-6">Push Notifications</p>
                  <p className="font-styled-6">Data Transfer</p>
                  <p className="font-styled-6"> SQL Database</p>
                  <p className="font-styled-6">Search & SEO Analytics</p>
                  <p className="font-styled-6"> 24/7 Phone Support</p>
                  <p className="font-styled-6">2 months technical support</p>
                  <p className="font-styled-6"> 2+ profitable keyword</p>
                  <button type="button" className="button-1">
                    <span className="font-styled-7">Purchase now</span>
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="col-12 col-lg-4">
                  <div
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
                      borderRadius: "32px",
                      width: "380px",
                      height: "627px",
                      margin: "0 auto",
                      marginBottom: "20px"
                    }}
                  >
                    <p className="font-styled-4">Standard</p>
                    <img src={img5} alt="" />
                    <p className="font-styled-5" style={{ color: "#3A80BA" }}>
                      $149
                    </p>

                    <p className="font-styled-6">Push Notifications</p>
                    <p className="font-styled-6">Data Transfer</p>
                    <p className="font-styled-6"> SQL Database</p>
                    <p className="font-styled-6">Search & SEO Analytics</p>
                    <p className="font-styled-6"> 24/7 Phone Support</p>
                    <p className="font-styled-6">2 months technical support</p>
                    <p className="font-styled-6"> 2+ profitable keyword</p>
                    <button type="button" className="button-1">
                      <span className="font-styled-7">Purchase now</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="col-12 col-lg-4">
                  <div
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
                      borderRadius: "32px",
                      width: "380px",
                      height: "627px",
                      margin: "0 auto",
                      marginBottom: "20px"
                    }}
                  >
                    <p className="font-styled-4">Unlimited</p>
                    <img src={img4} alt="" />
                    <p className="font-styled-5">$39</p>
                    <p className="font-styled-6">Push Notifications</p>
                    <p className="font-styled-6">Data Transfer</p>
                    <p className="font-styled-6"> SQL Database</p>
                    <p className="font-styled-6">Search & SEO Analytics</p>
                    <p className="font-styled-6"> 24/7 Phone Support</p>
                    <p className="font-styled-6">2 months technical support</p>
                    <p className="font-styled-6"> 2+ profitable keyword</p>
                    <button type="button" className="button-1">
                      <span className="font-styled-7">Purchase now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <p className="font-styled-8">
                If you need custom services or Need more?{" "}
                <span style={{ color: "#3A80BA" }}>
                  <b>Contact us</b>
                </span>
              </p>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}
