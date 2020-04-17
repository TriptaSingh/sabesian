import React from "react";
import SpellMe from "../../images/Project/spell Me.jpg";
import ppt from "../../images/Icons/ppt.png";
import SpellMeFile from "../../Docs/SpellMe.pptx";
import data from "../../static/staticData.json";

export const SpellMeComponent = () => {
  return (
    <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={SpellMe} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{data.SpellMe}</h4>
                <p>{data.SpellMe1}</p>
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
                    {data.SpellMe2}
                  </li>
                  <li>
                    <span>{data.Environment}</span>
                    {data.SpellMe3}
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
                          <a href={SpellMeFile} target="_blank">
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

                  <li>
                    <span>
                      <h5>{data.Article}</h5>
                    </span>
                    {data.ArticleRead}
                  </li>

                  <a
                    href="https://medium.com/datadriveninvestor/edutainment-game-spell-me-66fb21fb1b80"
                    target="_blank"
                  >
                    <i
                      className="fab fa-medium customSize"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <p className="alignText">
            {data.SpellMe4}
            <font color="#222222">{data.DialogGameHunt} </font>
            {data.SpellMe5}
          </p>
          <p className="alignText">
            {data.SpellMe6}
            <br />
            {data.SpellMe7}
          </p>
        </div>
      </div>
    </section>
  );
};
