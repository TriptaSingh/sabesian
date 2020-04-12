import React from 'react';
import EFarming from '../../images/EFarming.jpg';
import ppt from '../../images/ppt.png';
import Medium from '../../images/Medium.png';
import data from '../../static/staticData.json';
import EFarmingFile from '../../Docs/EFarming.pptx';
export const EFarmingComponent = () => {
    return (
        <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={EFarming} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{data.EFarming}</h4>
                <p>
                  {data.EFarmT1}
                </p>
                <ul className="list">
                  <li><span>{data.Year}</span>: {data.numYR}</li>
                  <li>
                    <span><h5>{data.ToolsUsed}</h5></span>
                  </li>
                  <li><span>{data.Software}</span>{data.EFarmT2}</li>
                  <li>
                    <span>{data.Hardware}</span>{data.EFarmT3}
                  </li>
                  <li>
                    <span><h5>{data.Documents}</h5></span>{data.ArthrocureT4}
                  </li>
                  <div className="social_widget">
                    <ul className="list">
                      <li>
                        <figure>
                          <a href={EFarmingFile} target="_blank">
                            <img
                                    className="img-fluid"
                                    src={ppt}
                                    alt="ppt"
                                    width="50"
                                    height="45"
                            />
                          </a>
                          <figcaption >
                            <font size="1">{data.Presentation}</font>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <span><h5>{data.Article}</h5></span>{data.ArticleRead}
                  </li>

                  <div className="social_widget">
                    <ul className="list">
                      <li>
                        <figure filter="grayscale(100%)">
                          <a
                            href="https://medium.com/codezillas/e-farming-831fe010ee4c"
                            target="_blank"
                          >
                          <img src={Medium} alt="" className="customImgWidth"/>
                          </a>
                          <figcaption>
                            <font size="1">{data.EFarming}</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a
                            href="https://medium.com/codezillas/e-farming-extended-by-ai-2618e106705b"
                            target="_blank"
                          >
                            <img src={Medium} alt="" className="customImgWidth"/>
                          </a>
                          <figcaption>
                            <font size="1">{data.EFarmT4}</font>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <p>{data.EFarmT5}
          </p>
          <p>{data.EFarmT6}
          </p>
        </div>
      </div>
    </section>
    )
}