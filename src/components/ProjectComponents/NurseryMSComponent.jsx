import React from 'react';
import Nursery from '../../images/Nursery.jpg';
import data from '../../static/staticData.json';
export const NurseryMSComponent = () => {
    return(
        <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={Nursery} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{data.NMS}</h4>
                <p>
                  {data.NMST1}<sup><font color="#777777">{data.rd}</font></sup>
                  {data.NMST2}
                </p>
                <ul className="list">
                  <li><span>{data.Year}</span>: {data.numYR}</li>
                  <li>
                    <span><h5>{data.ToolsUsed}</h5></span>
                  </li>
                  <li><span>{data.Software}</span>{data.NMST3}</li>
                  <li></li>
                  <li>
                    <span><h5>{data.Project}</h5></span>{data.ChatbotT4}
                  </li>
                  <a
                    href="https://github.com/sabesansathananthan/Nursery_Management"
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
          <p>{data.NMST4}
          </p>
          <p>
          {data.NMST5}
          </p>
        </div>
      </div>
    </section>
    )
}