import React from "react";
import pdf from "../../images/Icons/pdf.svg";
import SupplyChainManagement from "../../Docs/SupplyChainManagement.pdf";
import data from "../../static/staticData.json";
export const SupplyChainMSComponent = () => {
const SupplyChain  = window.location.origin + "/Docs/Project/SupplyChain.jpg";

  return (
    <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={SupplyChain} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{data.SCMS}</h4>
                <p>
                  {data.ChatbotT1}
                  <sup>
                    <font color="#777777">{data.th}</font>
                  </sup>
                  {data.SCMS1}
                </p>
                <ul className="list">
                  <li>
                    <span>{data.Year}</span>: {data.numYR18}
                  </li>
                  <li>
                    <span>
                      <h5>{data.ToolsUsed}</h5>
                    </span>
                  </li>
                  <li>
                    <span>{data.Software}</span>
                    {data.SCMS2}
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
                          <a href={SupplyChainManagement} target="_blank">
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="pdf"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.Requirement}</font>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <p>{data.SCMS3}</p>
          <p>{data.SCMS4}</p>
        </div>
      </div>
    </section>
  );
};
