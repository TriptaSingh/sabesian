import React from "react";
import Arthritis from "../../images/Project/Arthritis.jpg";
import ppt from "../../images/Icons/ppt.png";
import data from "../../static/staticData.json";
import ArthroCure from "../../Docs/ArthroCure.pptx";
export const ArthrocureComponent = () => {
  return (
    <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={Arthritis} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{data.Arthrocure}</h4>
                <p className="alignText">{data.ArthrocureT1}</p>
                <ul className="list">
                  <li>
                    <span>{data.Year}</span>: {data.numYR}
                  </li>
                  <li>
                    <span>
                      <h5>{data.ToolsUsed}</h5>
                    </span>
                  </li>
                  <li>
                    <span>{data.Software}</span>
                    {data.ArthrocureT2}{" "}
                  </li>
                  <li>
                    <span>{data.Hardware}</span>
                    {data.ArthrocureT3}{" "}
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
                          <a href={ArthroCure} target="_blank">
                            <img
                              className="img-fluid"
                              src={ppt}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">{data.Presentation}</font>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <p className="alignText">
            <font color="#222222">{data.Arthritis}</font> {data.ArthrocureT5}
            <a
              href="https://www.arthritis.org/about-arthritis/understanding-arthritis/what-is-arthritis.php"
              target="_blank"
            >
              <u>
                <b>
                  <font color="#222222">{data.Here}</font>
                </b>
              </u>
            </a>
            )
          </p>
          <p className="alignText">{data.ArthrocureT6}</p>
        </div>
      </div>
      <br /> <br />
      <div className="text-center">
        <iframe
          width="560px"
          height="315"
          src="https://www.youtube.com/embed/bHQitg7SEx4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
