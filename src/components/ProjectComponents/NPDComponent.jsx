import React from "react";
import NanoPro from "../../images/NanoPro.jpg";
import pdf from "../../images/pdf.svg";
import data from "../../static/staticData.json";
import ProjectDescription from "../../Docs/ProjectDescription.pdf";
import Report from "../../Docs/Report.pdf";
export const NPDComponent = () => {
  return (
    <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={NanoPro} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{data.NPD}</h4>
                <p>
                  {data.NPDT1}
                  <sup>
                    <font color="#777777">{data.nd}</font>
                  </sup>
                  {data.NPDT2}
                </p>
                <ul className="list">
                  <li>
                    <span>{data.Year}</span>
                    {data.numYR17}
                  </li>
                  <li>
                    <span>
                      <h5>{data.ToolsUsed}</h5>
                    </span>
                  </li>
                  <li>
                    <span>{data.Software}</span>
                    {data.NPDT3}
                  </li>
                  <li>
                    <span>{data.Hardware}</span>
                    {data.NPDT4}
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
                          <a href={ProjectDescription} target="_blank">
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.Description}</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a href={Report} target="_blank">
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.Report}</font>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>

                  <li>
                    <span>
                      <h5>{data.Project}</h5>
                    </span>
                    {data.ChatbotT4}
                  </li>
                  <a href="#" target="_blank">
                    <font color="black">
                      <i className="fab fa-github-square customSize"></i>
                    </font>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <p>{data.NPDT5}</p>
        </div>
      </div>
    </section>
  );
};
