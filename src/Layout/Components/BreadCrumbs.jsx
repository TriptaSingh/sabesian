import React from "react";
import data from "../../static/staticData.json";
import "../../styles/BreadCrumbs.scss";
import { Link } from "react-router-dom";
import myImage from "../../images/Banner/home-left-1.png";

export class BreadCrumbsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crumbUpdate: [],
    };
  }
  render() {
    const pageName =
      this.props.breadCLinks.length > 0
        ? String(this.props.breadCLinks[this.props.breadCLinks.length - 1].name)
        : "";
    const crumbs = this.props.breadCLinks;
    return crumbs.length > 1 ? (
      <div className="top-container" style={{ paddingTop: "220px" }}>
        <h2 key="headerBreadC" className="headerBreadC">
          {pageName}
        </h2>

        <nav className="breadcrumbs" aria-label="breadcrumb">
          <ol className="breadcrumb" onClick={this.props.checkURL}>
            {crumbs.map((x, key) => (
              <li className="breadcrumb-item" key={key + "_li"}>
                <Link to={x.click} key={key}>
                  {x.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    ) : (
      <div className="top-container" onClick={this.props.checkURL}>
        <nav className="breadcrumbs" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <section className="home_banner_area">
              <div className="banner_inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="home_left_img">
                        <img src={myImage} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner_content">
                        <h5>{data.Thisisme}</h5>
                        <h2>{data.SabesanSathananthan}</h2>
                        <p>{data.BreadCrumb1}</p>
                        <Link className="fonsS1 banner_btn" to="/about">
                          {data.DiscoverNow} <i className="fas fa-search"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ol>
        </nav>
      </div>
    );
  }
}
