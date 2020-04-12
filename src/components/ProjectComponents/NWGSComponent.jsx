import React from 'react';
import Nozama from '../../images/Nozama.jpg';
import pdf from '../../images/pdf.svg';
import NWGSProjectDescription from '../../Docs/NWGSProjectDescription.pdf';
import data from '../../static/staticData.json';
export const NWGSComponent = () => {
    return(
        <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={Nozama} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{data.NWGS}</h4>
                <p>
                  {data.NPDT1}<sup><font color="#777777">{data.nd}</font></sup>
                  {data.NWGS1}
                </p>
                <ul className="list">
                  <li><span>{data.Year}</span>{data.numYR17}</li>
                  <li>
                    <span><h5>{data.ToolsUsed}</h5></span>
                  </li>
                  <li><span>{data.Software}</span>{data.Java}</li>
                  <li>
                    <span><h5>{data.Documents}</h5></span>{data.ArthrocureT4}
                  </li>
                  <div className="social_widget">
                    <ul className="list">
                      <li>
                        <figure>
                          <a href={NWGSProjectDescription} target="_blank">
                            <img
                                    className="img-fluid"
                                    src={pdf}
                                    alt="pdf"
                                    width="50"
                                    height="45"
                            />
                          </a>
                          <figcaption >
                            <font size="1">{data.Description}</font>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <span><h5>{data.Project}</h5></span>{data.ChatbotT4}
                  </li>
                  <a
                    href="https://github.com/sabesansathananthan/Nozama_Warriors"
                    target="_blank"
                  >
                    <font color="black">
                      <i
                        className="fa fa-github-square customSize"
                      ></i
                    ></font>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <p>
            {data.NWGS2}
          </p>
          <p>
            {data.NWGS3}
            
          </p>
        </div>
      </div>
    </section>
    )
}