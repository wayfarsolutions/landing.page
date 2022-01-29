import React from "react";
import _data from "../../data";


class Download extends React.Component {
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
        <section
          className="download-section pt-100 background-img"
          style={{
            backgroundImage: "url('img/app-hero-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="download-content text-white pb-100">
                  <h2 className="text-white">
                    Download the demo apps
                  </h2>
                  <p className="lead">
                    You can download the demo apps from the links bellow:
                  </p>

                  <div className="download-btn d-flex flex-row align-items-center">
                    <a href={_data.consts.apkDownload} className="btn google-play-btn mr-3">
                      <span className="ti-android"></span> For Android
                    </a>
                    <div style={{ opacity: 0.7, pointerEvents: 'none' }}>

                      <a href="/#" className="btn app-store-btn" >
                        <span className="ti-apple"></span> For iOS
                      </a>
                      </div>
                  </div>
                  <br />
                  <small>
                    <strong> Note:  </strong> The iOS app is not available yet, it is under test (Coming soon)

                  </small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="download-img d-flex align-bottom">
                  <img
                    src="img/demoapps.png"
                    alt="download"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Download;
