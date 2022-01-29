import React from "react";

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <div id="features" className={"feature-section ptb-100 " + (this.props.bgColor && this.props.bgColor === 'gray' ? 'gray-light-bg' : '')}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <span className="badge badge-primary badge-pill">
                    Best features
                  </span>
                  <h2>
                    Quick & Easy Process with <br />
                    <span>best features</span>
                  </h2>
                  <p>
                    Objectively deliver professional value with diverse
                    web-readiness. Collaboratively transition wireless customer
                    service without goal-oriented catalysts for change.
                    Collaboratively.
                  </p>
                </div>
              </div>
            </div>

            <div className="row row-grid align-items-center">
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-1 rounded-circle">
                      <span className="ti-face-smile"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Responsive web design</h5>
                    <p className="mb-0">
                      Modular and interchangable componente between layouts and
                      even demos.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-2 rounded-circle">
                      <span className="ti-vector"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Loaded with features</h5>
                    <p className="mb-0">
                      Modular and interchangable componente between layouts and
                      even demos.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-3 rounded-circle">
                      <span className="ti-headphone-alt"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Friendly online support</h5>
                    <p className="mb-0">
                      Modular and interchangable componente between layouts and
                      even demos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="position-relative" style={{zIndex: 10}}>
                  <img
                    alt="placeholder"
                    src="img/image-10.png"
                    className="img-center img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-4 rounded-circle">
                      <span className="ti-layout-media-right"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Free updates forever</h5>
                    <p className="mb-0">
                      Modular and interchangable componente between layouts and
                      even demos.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-5 rounded-circle">
                      <span className="ti-layout-cta-right"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Built with Sass</h5>
                    <p className="mb-0">
                      Modular and interchangable componente between layouts and
                      even demos.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-6 rounded-circle">
                      <span className="ti-palette"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Infinite colors</h5>
                    <p className="mb-0">
                      Modular and interchangable componente between layouts and
                      even demos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Feature;
