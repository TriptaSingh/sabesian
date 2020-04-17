import React from "react";
import data from "../static/staticData.json";
import { Link } from "react-router-dom";

export const AboutComponent = () => {
  return (
    <div>
      {/* <!--================Welcome Area =================--> */}
      <section className="welcome_area p_120">
        <div className="container">
          <div className="row welcome_inner">
            <div className="col-lg-6">
              <div className="welcome_text">
                <h4>{data.AboutMyself}</h4>

                <p>
                  {data.AboutT1}
                  <br /> {data.AboutT2}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="welcome_text">
                <h4>{data.Education}</h4>
                <p>{data.AboutT3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Welcome Area =================--> */}

      {/* <!--================Feature Area =================--> */}
      <section className="feature_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>{data.Employment}</h2>
            <p>{data.AboutT4}</p>
          </div>
          <div className="feature_inner row">
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
                <i className="flaticon-city"></i>
                <h4>{data.SyscoLABS}</h4>
                <p> {data.AboutSyscoLabs}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
                <i className="flaticon-skyline"></i>
                <h4>{data.DialogGaming}</h4>
                <p>{data.AboutDialogGaming}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature_item">
                <i className="flaticon-sketch"></i>
                <h4>{data.TowardsDataScience}</h4>
                <p>{data.AboutDataScience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Feature Area =================--> */}

      {/* <!--================Testimonials Area =================--> */}
      <section className="testimonials_area testi_two p_120">
        <div className="container">
          <div className="main_title">
            <h2>{data.DownloadDocuments}</h2>
            <p>{data.CV}</p>
          </div>
          <div className="button-group-area mt-40">
            <Link
              to="./Docs/CV_Sabesan_Sathananthan.pdf"
              target="_blank"
              className="genric-btn success circle arrow"
            >
              {data.DownloadCV}
              <i className="fas fa-download"> </i>
            </Link>
            <Link
              to="./Docs/Resume_Sabesan_Sathananthan.pdf"
              target="_blank"
              className="genric-btn success circle arrow"
            >
              {data.DownloadRésumé}
              <i className="fas fa-download"> </i>
            </Link>
            <Link
              to="CommingSoon/index.html"
              target="_blank"
              className="genric-btn success circle arrow"
            >
              {data.ViewOnlineCV}
              <i className="fas fa-eye"> </i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
