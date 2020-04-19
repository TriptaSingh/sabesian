import React from "react";
import data from "../../static/staticData.json";

export const ChatbotComponent = () => {
  const Chatbot = window.location.origin + '/Docs/Project/Chatbot.jpg' ;
  return (
    <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={Chatbot} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{data.Chatbot}</h4>
                <p>
                  {data.ChatbotT1}
                  <sup>
                    <font color="#777777">{data.th}</font>
                  </sup>
                  {data.ChatbotT2}
                </p>
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
                    {data.ChatbotT3}
                  </li>
                  <li>
                    <span>
                      <h5>{data.Project}</h5>
                    </span>
                    {data.ChatbotT4}
                  </li>
                  <a
                    href="https://github.com/sabesansathananthan/chatbot"
                    target="_blank"
                  >
                    <font color="black">
                      <i className="fab fa-github-square customSize"></i>
                    </font>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <p className="alignText">{data.ChatbotT5}</p>
          <p className="alignText">{data.ChatbotT6}</p>
        </div>
      </div>
    </section>
  );
};
