import React from "react";
import pdf from "../../images/Icons/pdf.svg";
import "../../styles/Project.scss";
import data from "../../static/staticData.json";
import Project_Proposal from "../../Docs/Project_Proposal.pdf";
import Feasibility_report from "../../Docs/Feasibility_report.pdf";
import Software_Requirements_Specification from "../../Docs/Software_Requirements_Specification.pdf";
import Software_Architecture_Document from "../../Docs/Software_Architecture_Document.pdf";
import Test_plan from "../../Docs/Test_plan.pdf";
import Final_Report from "../../Docs/Final_Report.pdf";

export const FaceCSComponent = () => {
const FaceCS =window.location.origin + "/Docs/Project/Faceclassify.jpg";

  return (
    <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={FaceCS} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{data.FCS}</h4>
                <p>
                  {data.FCST1}
                  <sup>
                    <font color="#777777">{data.th}</font>
                  </sup>
                  {data.FCST2}
                </p>
                <ul className="list">
                  <li>
                    <span>{data.Year}</span>
                    {data.numYR19}
                  </li>
                  <li>
                    <span>
                      <h5>{data.ToolsUsed}</h5>
                    </span>
                  </li>
                  <li>
                    <span>{data.Software}</span>: Android Studio
                  </li>
                  <li>
                    <span>
                      <h5>{data.Documents}</h5>
                    </span>
                    {data.ArthrocureT4}
                  </li>

                  <div className="social_widget">
                    <ul className="list">
                      <li>
                        <figure>
                          <a href={Project_Proposal} target="_blank">
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.Proposal}</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a href={Feasibility_report} target="_blank">
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.Feasibility}</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a
                            href={Software_Requirements_Specification}
                            target="_blank"
                          >
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.SRS}</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a
                            href={Software_Architecture_Document}
                            target="_blank"
                          >
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.SAD}</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a href={Test_plan} target="_blank">
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.TestPlan}</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a href={Final_Report} target="_blank">
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.FinalReport}</font>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <p>{data.FCST3}</p>
          <p>{data.FCST4}</p>
        </div>
      </div>
    </section>
  );
};
