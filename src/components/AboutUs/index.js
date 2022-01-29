import React from "react";
import _data from "../../data";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUs: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      aboutUs: _data.aboutUs
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="overflow-hidden">
          <section id="about" className="about-us ptb-100 background-shape-img">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-md-7">
                  <div className="about-content-left section-heading">
                    <h2>
                      What's included in Wayfar<br /> 
                    </h2>

                    
                   
                    <div className="single-feature mb-4 mt-5">
                      <div className="icon-box-wrap mb-2">
                        <div className="mr-3 icon-box">
                          <img
                          style={{maxWidth:'80%'}}
                            src="img/icons/cloud-computing.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0">
                          <strong>Social authentication</strong>, including Google, Facebook and Twitter.
                        </p>
                      </div>
                      <p></p>
                    </div>

                    <div className="single-feature mb-4 ">
                      <div className="icon-box-wrap d-flex align-items-center mb-2">
                        <div className="mr-3 icon-box">
                          <img
                            style={{maxWidth:'80%'}}
                            src="img/icons/google-maps.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0">
                          <strong> Google Maps </strong> screen and SDK integrated.
                        </p>
                      </div>
                    </div>

                    <div className="single-feature mb-4 ">
                      <div className="icon-box-wrap d-flex align-items-center mb-2">
                        <div className="mr-3 icon-box">
                          <img
                          style={{maxWidth:'80%'}}
                            src="img/icons/language.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0">
                          <strong> RTL Support and multilangual support</strong>, three language are already integrated (English, French and Arabic).
                        </p>
                      </div>
                    </div>

                    <div className="single-feature mb-4">
                      <div className="icon-box-wrap mb-2">
                        <div className="mr-3 icon-box">
                          <img
                          style={{maxWidth:'80%'}}
                            src="img/icons/notification.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0">
                          <strong> Push notifications </strong>, integrated using Firebase Cloud Messaging
                        </p>
                      </div>
                      <p></p>
                    </div>
                    <div className="single-feature mb-4">
                      <div className="icon-box-wrap mb-2">
                        <div className="mr-3 icon-box">
                          <img
                          style={{maxWidth:'80%'}}
                            src="img/icons/theme.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0">
                          <strong> Dark mode </strong>and easy theme customizing with the possibility of adding other theme modes.
                        </p>
                      </div>
                      <p></p>
                    </div>
                    <div className="single-feature mb-4">
                      <div className="icon-box-wrap mb-2">
                        <div className="mr-3 icon-box">
                          <img
                          style={{maxWidth:'80%'}}
                            src="img/icons/menu.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0">
                          Some customizable and ready to use widgets
                        </p>
                      </div>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="pt-4"></div>
                  <div className="about-content-right d-flex justify-content-center justify-content-lg-end justify-content-md-end">
                    <img
                      src="img/screen_full.png"
                      alt="about us"
                      className="img-fluid"
                    /> 
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
