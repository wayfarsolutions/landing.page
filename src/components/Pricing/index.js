import React from "react";
import _data from "../../data";

export default class Pricing extends React.Component {
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
        <div className="overflow-hidden">
          <section
            id="pricing"
            className={"package-section ptb-100 " + (this.props.bgColor && this.props.bgColor === 'gray' ? 'gray-light-bg' : 'background-shape-right')} >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="section-heading text-center mb-5">
                    {this.props.showTitle && this.props.showTitle === true && (
                      <span className="badge badge-primary badge-pill">
                        Our Pricing Package
                      </span>
                    )}
                    <h2>
                      Afforadble Pricing and Packages <br />
                      <span>choose your best one</span>
                    </h2> 
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {(this.state.price.packages || []).map((_package, index) => {
                  return (
                    <div className="col-lg-4 col-md" key={index}>
                      <div
                        className={
                          "card text-center single-pricing-pack " +
                          (_package.isFeatured ? "popular-price" : "")
                        }
                      >
                        <div className="pt-4">
                          <h5>{_package.license}</h5>
                        </div>
                        <div className="pricing-img mt-4">
                          <img
                            src="img/basic.svg"
                            alt="pricing img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-header py-4 border-0 pricing-header">
                          <div className="h1 text-center mb-0">
                            <span className="price font-weight-bolder">
                              {_package.price}
                            </span>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                            {(_package.features || []).map(feature => {
                              return <li key={feature}>{feature}</li>;
                            })}
                          </ul>
                          <a
                            href="/#"
                            className={
                              "btn mb-3 " +
                              (_package.isFeatured
                                ? "solid-btn"
                                : "outline-btn")
                            }
                            target="_blank"
                          >
                            Purchase now
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 text-center">
                <p className="mb-2">
                  If you need custom services or Need more?{" "}
                  <a href="#contact" className="color-secondary">
                    Contact us
                  </a>
                </p>
              </div>
              {!(this.props.hideFaq && this.props.hideFaq === true) && this.props.theme !== "four" && (
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div id="accordion-1" className="accordion accordion-faq">
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-1-1"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-1-1"
                          aria-expanded="false"
                          aria-controls="collapse-1-1"
                        >
                          <h6 className="mb-0">
                            <span className="ti-receipt mr-3"></span> Which
                            license do I need?
                          </h6>
                        </div>
                        <div
                          id="collapse-1-1"
                          className="collapse"
                          aria-labelledby="heading-1-1"
                          data-parent="#accordion-1"
                        >
                          <div className="card-body">
                            <p>
                            If the product will be used by you or one client, in a single end product which end users are not charged for, you only need REGULAR License.
                            However, if end users can be charged for, you'll need an EXTENDED License. Checkout <a href="https://codecanyon.net/licenses/standard?license=extended"> Envato License details. </a>
                            
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-2-1"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-2-1"
                          aria-expanded="false"
                          aria-controls="collapse-2-1"
                        >
                          <h6 className="mb-0">
                            <span className="ti-wallet mr-3"></span> 
                            How to access template documentation ?
                          </h6>
                        </div>
                        <div
                          id="collapse-2-1"
                          className="collapse"
                          aria-labelledby="heading-2-1"
                          data-parent="#accordion-2"
                        >
                          <div className="card-body">
                            <p>
                              Head over to <a href="https://docs.wayfarsolutions.com">this link</a>, to see code docuementation, guide and API references.
                            </p>
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div id="accordion-2" className="accordion accordion-faq">
                      
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-2-2"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-2-2"
                          aria-expanded="false"
                          aria-controls="collapse-2-2"
                        >
                          <h6 className="mb-0">
                            <span className="ti-receipt mr-3"></span> 
                            Will I pay more for some features?
                          </h6>
                        </div>
                        <div
                          id="collapse-2-2"
                          className="collapse"
                          aria-labelledby="heading-2-2"
                          data-parent="#accordion-2"
                        >
                          <div className="card-body">
                            <p>
                              No, you're charged according to the licence not features.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div
                          className="card-header py-4"
                          id="heading-2-3"
                          data-toggle="collapse"
                          role="button"
                          data-target="#collapse-2-3"
                          aria-expanded="false"
                          aria-controls="collapse-2-3"
                        >
                          <h6 className="mb-0">
                            <span className="ti-widget mr-3"></span> 
                            Does the template includes a backend application ? 
                          </h6>
                        </div>
                        <div
                          id="collapse-2-3"
                          className="collapse"
                          aria-labelledby="heading-2-3"
                          data-parent="#accordion-2"
                        >
                          <div className="card-body">
                            <p>
                              For now, the template is only an UI Template, it does not include a backend application that runs on a server.
                              <br/>
                              However, we took the best practises of Clean Architecture when designing our product so the data source layer is mocked so 
                              the developer can easily integrate API Calls.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!(this.props.hideFaq && this.props.hideFaq === true) && this.props.theme === "four" && (
                <div className="row pt-5">
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>How can I pay for this?</h5>
                      <p>
                        Intrinsicly implement high standards in strategic theme
                        areas via inexpensive solutions. Assertively
                        conceptualize prospective bandwidth whereas client-based
                        imperatives.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Is it possible to pay yearly?</h5>
                      <p>
                        Assertively iterate user friendly innovation without
                        open-source markets. Monotonectally extend resource
                        sucking manufactured products without high-payoff
                        paradigms. Objectively customize ubiquitous information
                        before economically sound relationships.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Do you offer discounts on multiple items?</h5>
                      <p>
                        Dramatically target focused testing procedures after
                        holistic ideas. Collaboratively maximize high-payoff ROI
                        and value-added products. Distinctively deliver
                        cooperative collaboration and idea-sharing whereas
                        customized
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Is VAT included in plan prices?</h5>
                      <p>
                        Distinctively simplify high-quality initiatives for
                        highly efficient applications. Monotonectally repurpose
                        integrated customer service after magnetic e-services.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>Will I pay more for some features?</h5>
                      <p>
                        Enthusiastically pontificate resource-leveling supply
                        chains whereas scalable markets. Authoritatively
                        streamline resource maximizing methods of empowerment
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-faq">
                      <h5>
                        Why are there no limits on the number of messages?
                      </h5>
                      <p>
                        Assertively target turnkey ideas for market-driven
                        portals. Appropriately e-enable world-class intellectual
                        capital whereas 2.0 mindshare.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
