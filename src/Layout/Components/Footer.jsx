import React from 'react';
import '../../styles/Footer.scss';
import data from '../../static/staticData.json';
import LinkedIn from '../../images/LinkedIn.png';
import Facebook from '../../images/Facebook.png';
import Twitter from '../../images/Twitter.png';
import WhatsApp from '../../images/WhatsApp.png';
import '../../styles/Site.scss';

export const Footer = () => {
    return (
      <footer className="footer_area p_footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-6">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h3>{data.Sabesan}</h3>
                  <br />
                  <p>
                    {data.FooterT1} <br />
                    {data.FooterT2}
                  </p>
  
                  <p>
                    {data.Copyright} &copy;
                      {(new Date().getFullYear())} {data.Sabesan} {data.Sathananthan}
                  </p>
                </div>
              </aside>
            </div>
            <div className="col-lg-5">
              <aside className="f_widget social_widget">
                <div className="f_titlefooter">
                  <h3>{data.FollowMe}</h3>
                  <br />
                  <p>{data.Letusbesocial}</p>
                </div>
                <ul className="list">
                  <a
                    href="https://www.linkedin.com/in/sabesan96/"
                    target="_blank"
                  >
                    <img
                      border="0"
                      alt="LinkedIn"
                      src={LinkedIn}
                      width="88"
                      height="50"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/sathananthan.sabesan"
                    target="_blank"
                  >
                    <img
                      border="0"
                      alt="Facebook"
                      src={Facebook}
                      width="88"
                      height="50"
                    />
                  </a>
                  <a href="https://twitter.com/TheSabesan" target="_blank">
                    <img
                      border="0"
                      alt="Twitter"
                      src={Twitter}
                      width="88"
                      height="50"
                    />
                  </a>
                  <a href="https://wa.me/94770711017" target="_blank">
                    <img
                      border="0"
                      alt="WhatsApp"
                      src={WhatsApp}
                      width="88"
                      height="50"
                    />
                  </a>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </footer>
    )
  }