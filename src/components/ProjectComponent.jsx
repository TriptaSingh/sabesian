import React from 'react';
import FaceClassification from '../images/Faceclassify.jpg';
import Arthritis from '../images/Arthritis.jpg';
import Spellme from '../images/spell Me.jpg';
import Efarming from '../images/EFarming.jpg';
import Chatbot from '../images/Chatbot.jpg';
import SupplyChain from '../images/SupplyChain.jpg';
import Nursery from '../images/Nursery.jpg';
import NanoPro from '../images/NanoPro.jpg';
import Nozama from '../images/Nozama.jpg';
import { Link } from 'react-router-dom';
import data from '../static/staticData.json';

export class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageType: props.pageType
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
            <section className="projects_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>{data.MyProjects}</h2>
                        <p>
                            {data.Proj1}
          </p>


                        <div className="projects_fillter">
                            <ul className="filter list" onClick={this.addFilter.bind(this)}>
                                <li data-filter="*">
                                    <a href="#">{data.AllCategories}</a>
                                </li>
                                <li data-filter=".hackathon">
                                    <a href="#" id="hackathon">{data.Hackathon}</a>
                                </li>
                                <li data-filter=".university">
                                    <a href="#" id="university">{data.University}</a>
                                </li>
                                <li data-filter=".business">
                                    <a href="#" id="business">{data.Business}</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="projects_inner row">

                        <div className="col-lg-4 col-sm-6 university">
                            <div className="projects_item">
                                <img
                                    className="img-fluid"
                                    src={FaceClassification}
                                    alt=""
                                />
                                <div className="projects_text">
                                <Link className="nav-link" to="Project-FaceClassificationSystem"><h4>{data.FCS}</h4></Link
                                    >
                                    <p>
                                        <font color="#777777"
                                        >{data.no5}<sup><font color="#777777">{data.th}</font></sup
                                        >{data.semesterProject}</font
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 hackathon">
                            <div className="projects_item">
                                <img className="img-fluid" src={Arthritis} alt="" />
                                <div className="projects_text">
                                <Link className="nav-link" to="Project-Arthrocure"><h4>{data.Arthrocure}</h4></Link>
                                    <p>{data.InnovationProject}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 business">
                            <div className="projects_item">
                                <img className="img-fluid" src={Spellme} alt="" />
                                <div className="projects_text">
                                    <Link className="nav-link" to="Project-SpellMe"><h4>{data.SpellMe}</h4></Link>
                                    <p>{data.ClientProject}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 hackathon">
                            <div className="projects_item">
                                <img className="img-fluid" src={Efarming} alt="" />
                                <div className="projects_text">
                                    <Link className="nav-link" to="Project-EFarming"><h4>{data.EFarming}</h4></Link>
                                    <p>{data.IoTProject}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 university">
                            <div className="projects_item">
                                <img className="img-fluid" src={Chatbot} alt="" />
                                <div className="projects_text">
                                    <Link className="nav-link" to="Project-Chatbot"><h4>{data.Chatbot}</h4></Link>
                                    <p>
                                        <font color="#777777"
                                        >{data.no4}<sup><font color="#777777">{data.th}</font></sup> {data.semesterProject}</font
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 university">
                            <div className="projects_item">
                                <img
                                    className="img-fluid"
                                    src={SupplyChain}
                                    alt=""
                                />
                                <div className="projects_text">
                                    <Link className="nav-link" to="Project-SupplyChainManagementSystem"
                                    ><h4>{data.SCMS}</h4></Link
                                    >
                                    <p>
                                        <font color="#777777"
                                        >{data.no4}<sup><font color="#777777">{data.th}</font></sup> {data.semesterProject}</font
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 university">
                            <div className="projects_item">
                                <img className="img-fluid" src={Nursery} alt="" />
                                <div className="projects_text">
                                    <Link className="nav-link" to="Project-NurseryManagementSystem"
                                    ><h4>{data.NMS}</h4></Link
                                    >
                                    <p>
                                        <font color="#777777"
                                        >3<sup><font color="#777777">{data.rd}</font></sup> {data.semesterProject}</font
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 university">
                            <div className="projects_item">
                                <img className="img-fluid" src={NanoPro} alt="" />
                                <div className="projects_text">
                                    <Link className="nav-link" to="Project-NanoProcessorDesign"
                                    ><h4>{data.NPD}</h4></Link
                                    >
                                    <p>
                                        <font color="#777777"
                                        >2<sup><font color="#777777">{data.nd}</font></sup> {data.semesterProject}</font
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 university">
                            <div className="projects_item">
                                <img className="img-fluid" src={Nozama} alt="" />
                                <div className="projects_text">
                                    <Link className="nav-link" to="Project-NozamaWarriorGameSimulation"
                                    ><h4>{data.NWGS}</h4></Link
                                    >
                                    <p>
                                        <font color="#777777"
                                        >2<sup><font color="#777777">{data.nd}</font></sup> {data.semesterProject}</font
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}