import React from "react";
import FaceClassification from "../images/Project/Faceclassify.jpg";
import Arthritis from "../images/Project/Arthritis.jpg";
import Spellme from "../images/Project/spell Me.jpg";
import Efarming from "../images/Project/EFarming.jpg";
import Chatbot from "../images/Project/Chatbot.jpg";
import SupplyChain from "../images/Project/SupplyChain.jpg";
import Nursery from "../images/Project/Nursery.jpg";
import NanoPro from "../images/Project/NanoPro.jpg";
import Nozama from "../images/Project/Nozama.jpg";
import { Link } from "react-router-dom";
import data from "../static/staticData.json";
import projectData from "../static/ProjectData.json";
import ProjectCardComponent from "../components/ProjectCardComponent";
export class ProjectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: props.pageType,
    };
  }
  addFilter(event) {
    const classN = event.target.id;
    const projTypes = ["hackathon", "university", "business"];
    console.log(classN);
    if (!!classN) {
      for (const x in projTypes) {
        this.addStyle(projTypes[x], "none");
      }
    }
    if (!!classN) {
      this.addStyle(classN, "block");
    } else {
      for (const x in projTypes) {
        this.addStyle(projTypes[x], "block");
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
    // console.log(projectData.Projects[0]);
    return (
      <section className="projects_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>{data.MyProjects}</h2>
            <p>{data.Proj1}</p>

            <div className="projects_fillter">
              <ul className="filter list" onClick={this.addFilter.bind(this)}>
                <li data-filter="*">
                  <a href="#">{data.AllCategories}</a>
                </li>
                <li data-filter=".hackathon">
                  <a href="#" id="hackathon">
                    {data.Hackathon}
                  </a>
                </li>
                <li data-filter=".university">
                  <a href="#" id="university">
                    {data.University}
                  </a>
                </li>
                <li data-filter=".business">
                  <a href="#" id="business">
                    {data.Business}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="projects_inner row">
            {projectData.Projects.reverse().map((details, key) => {
              return (
                <ProjectCardComponent
                  key={key}
                  title={details.data.Title}
                  cardDescription={details.data.CardDescription}
                  category={details.data.Category}
                  img={details.data.ImageURL}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
