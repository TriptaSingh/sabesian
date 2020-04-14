import React from "react";
import data from '../static/staticData.json';
import '../styles/Site.scss';
import FaceClassification from '../images/Faceclassify.jpg';
import Arthritis from '../images/Arthritis.jpg';
import Spellme from '../images/spell Me.jpg';
import Efarming from '../images/EFarming.jpg';
import SupplyChain from '../images/SupplyChain.jpg';
import Nursery from '../images/Nursery.jpg';
import img1 from '../images/IndexMedia/1.jpg';
import img2 from '../images/IndexMedia/2.jpg';
import img3 from '../images/IndexMedia/3.jpg';
import img4 from '../images/IndexMedia/4.jpg';
import { Link } from 'react-router-dom';
export class HomeComponent extends React.Component {
  componentDidMount() {
    var widget = document.getElementById("medium-widget"); 
    if(!!widget) {
      window.mediumWidget();
    }
  }

  addFilter(event) {
    const classN = event.target.id;
    const projTypes = ['hackathon','university','business'];
    console.log(classN);
    if(!!classN) {
      for(const x in projTypes) {
        this.addStyle(projTypes[x], 'none');
      }
    }
    if(!!classN) {
      this.addStyle(classN, 'block');
    } else {
      for(const x in projTypes) {
        this.addStyle(projTypes[x], 'block');
      }
    }
  }

  addStyle(classN, styleTy) {
    var all = document.getElementsByClassName(classN);
    for (var i = 0; i < all.length; i++) {
      all[i].style.display = styleTy;
    }
  }

  render() {
    return (
      <div>
        <section className="projects_area p_120">
          <div className="container">
            <div className="main_title">
              <h2>{data.RecentProjects}</h2>
              <p>
                {data.Home1}
          </p>
            </div>
            <div className="projects_fillter">
              <ul className="filter list" onClick={this.addFilter.bind(this)}>
                <li data-filter="*">
                  <a href="#">{data.AllCategories}</a>
                </li>
                <li data-filter=".hackathon"><a href="#" id="hackathon">{data.Hackathon}</a></li>
                <li data-filter=".university"><a href="#" id="university">{data.University}</a></li>
                <li data-filter=".business"><a href="#" id="business">{data.Business}</a></li>
              </ul>
            </div>
            <div className="projects_inner row">
              <div className="col-lg-4 col-sm-6 brand university">
                <div className="projects_item">
                  <img
                    className="img-fluid"
                    src={FaceClassification}
                    alt=""
                  />
                  <div className="projects_text">
                    <Link className="nav-link" to="Project-FaceClassificationSystem"><h4>
                      <font color="#222222">{data.FCS}</font>
                    </h4></Link>
                    <p>
                      <font color="#777777"
                      >{data.no5}<sup><font color="#777777">{data.th}</font></sup>
                      {data.semesterProject}</font>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 brand hackathon">
                <div className="projects_item">
                  <img className="img-fluid" src={Arthritis} alt="" />
                  <div className="projects_text">
                    <Link className="nav-link" to="Project-Arthrocure"><h4>{data.Arthrocure}</h4></Link>
                    <p><font color="#777777">{data.InnovationProject}</font></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 business">
                <div className="projects_item">
                  <img className="img-fluid" src={Spellme} alt="" />
                  <div className="projects_text">
                    <Link className="nav-link" to="Project-SpellMe"><h4><font color="#222222">{data.SpellMe}</font></h4></Link>
                    <p><font color="#777777">{data.ClientProject}</font></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 brand hackathon">
                <div className="projects_item">
                  <img className="img-fluid" src={Efarming} alt="" />
                  <div className="projects_text">
                    <Link className="nav-link" to="Project-EFarming"><h4><font color="#222222">{data.EFarming}</font></h4></Link>
                    <p><font color="#777777">{data.IoTProject}</font></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 brand university">
                <div className="projects_item">
                  <img
                    className="img-fluid"
                    src={SupplyChain}
                    alt=""
                  />
                  <div className="projects_text">
                    <Link className="nav-link" to="Project-SupplyChainManagementSystem"><h4>
                      <font color="#222222">{data.SCMS}</font>
                    </h4></Link>
                    <p>
                      <font color="#777777"
                      >{data.no4}<sup><font color="#777777">{data.th}</font></sup> {data.semesterProject}</font
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 brand university">
                <div className="projects_item">
                  <img className="img-fluid" src={Nursery} alt="" />
                  <div className="projects_text">
                    <Link className="nav-link" to="Project-NurseryManagementSystem"><h4>
                      <font color="#222222">{data.NMS}</font>
                    </h4></Link>
                    <p>
                      <font color="#777777"
                      >3<sup><font color="#777777">{data.rd}</font></sup> {data.semesterProject}</font
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="blogAside1">
                  <Link to="/projects" className="banner_btn fontSize1">{data.SeeMoreProjects} <i className="fa fa-github-square"></i
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials_area p_120">
          <div className="container">
            <div className="main_title">
              <h2>{data.Home4}</h2>
              <p>
                {data.Home2}
          </p>
            </div>
            <div id="medium-widget" className="styleDesign"></div>

            <div className="feature_inner row">
              <div className="col">
                <div className="blogAside1">
                  <a
                    className="banner_btn fontSize1"
                    href="https://medium.com/@sabesan96"
                    target="_blank"
                  >{data.Home3} <i className="fa fa-medium"></i>edium</a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature_area p_120">
          <div className="container">
            <div className="main_title">
              <h2>my Gallery</h2>
              <p>
              {data.Home5}
          </p>
            </div>

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <img src={img1} alt="img1" className="styleDesign" />
                </div>

                <div className="item">
                  <img src={img2} alt="img2" className="styleDesign" />
                </div>

                <div className="item">
                  <img src={img3} alt="img3" className="styleDesign" />
                </div>

                <div className="item">
                  <img src={img4} alt="img4" className="styleDesign" />
                </div>
              </div>

              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <br />

            <div className="feature_inner row">
              <div className="col">
                <div className="blogAside1">
                  <font color="#fff">
                    <Link className="banner_btn fontSize1" to="/media">View All Gallery <i className="fa fa-image"></i></Link></font>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}