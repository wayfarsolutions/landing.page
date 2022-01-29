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
        <section id="features" className="feature-section ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4">
                <div className="download-img d-flex align-bottom">
                  <img
                    src="img/about.png"
                    alt="download"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="feature-contents section-heading">
                  <h2>
                    About Wayfar <br />
                    <span> Flutter template </span>
                  </h2>
                  <p>
                  WayFar App Template Kit is a flutter app that helps you find a parking spot nearby or near your destination. Users can search for a vacant parking spot and book it in advance, filter through the search results to match their preferences and view the recommended parking lots through a list or a map view. 
                  </p>
                  <p>
                  WayFar Template is developed using the Flutter framework, which ensures its compatibility with Android and iOS environments. 
                  </p>

                  <ul className="list-inline mt-5">
                    <li className="list-inline-item">
                      <div className="mr-3 icon-box border">
                        <img
                          src="img/icons/flutter.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="mr-3 icon-box border">
                        <img
                          src="img/icons/android.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="mr-3 icon-box border">
                        <img
                          src="img/icons/apple.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="mr-3 icon-box border">
                        <img
                          src="img/icons/firebase.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
