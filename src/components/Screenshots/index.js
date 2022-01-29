import React from "react";
import _data from "../../data";

export default class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          id="screenshots"
          className="screenshots-section ptb-100 gray-light-bg"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center">
                  <h2>
                    App screenshots <br /> <span>Looks awesome</span>
                  </h2> 
                </div>
              </div>
            </div>
            <div className="screen-slider-content mt-5">
              <div className="screenshot-frame"></div>
              <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                <img src="img/screenshots/01.jpeg" className="img-fluid" alt="screenshots" />
                <img src="img/screenshots/02.jpeg" className="img-fluid" alt="screenshots" />
                <img src="img/screenshots/03.jpeg" className="img-fluid" alt="screenshots" />
                <img src="img/screenshots/04.jpeg" className="img-fluid" alt="screenshots" />
                <img src="img/screenshots/05.jpeg" className="img-fluid" alt="screenshots" />
                <img src="img/screenshots/06.jpeg" className="img-fluid" alt="screenshots" />
                <img src="img/screenshots/07.jpeg" className="img-fluid" alt="screenshots" />
                <img src="img/screenshots/08.jpeg" className="img-fluid" alt="screenshots" />
                <img src="img/screenshots/09.jpeg" className="img-fluid" alt="screenshots" />
                <img src="img/screenshots/10.jpeg" className="img-fluid" alt="screenshots" /> 
                <img src="img/screenshots/11.jpeg" className="img-fluid" alt="screenshots" /> 
                <img src="img/screenshots/12.jpeg" className="img-fluid" alt="screenshots" /> 
                <img src="img/screenshots/13.jpeg" className="img-fluid" alt="screenshots" /> 
                <img src="img/screenshots/14.jpeg" className="img-fluid" alt="screenshots" /> 
                <img src="img/screenshots/15.jpeg" className="img-fluid" alt="screenshots" /> 
                <img src="img/screenshots/16.jpeg" className="img-fluid" alt="screenshots" /> 
                <img src="img/screenshots/17.jpeg" className="img-fluid" alt="screenshots" /> 
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
