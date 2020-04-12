import React from 'react';
import data from '../static/staticData.json';
import flipboard from '../images/flipboard.png';
import MapContainer from '../Layout/Components/GoogleMap';
// import GoogleMapReact from 'google-map-react';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactFieldComponent = () => {
    return(
        <section className="contact_area p_120">
                    <div className="container">

                        {/* <div id="map">
                </div> */}
                        {/* <div id="mapBox" className="mapBox"
                        data-lat="9.761927"
                        data-lon="79.952440"
                        data-zoom="14"
                        data-info="Kobi Illam, Pannagam South, Chulipuram, Jaffna, Srilanka."
                        data-mlat="9.761927"
                        data-mlon="79.952440">
                    </div> */}

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="contact_info">
                                    <div className="info_item">
                                        <i className="fa fa-home"></i>
                                        <h6>{data.C1}</h6>
                                        <p>{data.C2}</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="fa fa-phone"></i>
                                        <h6><a href="tel:+94719786867">{data.C3}</a></h6>
                                        <p>{data.C4} </p>
                                    </div>
                                    <div className="info_item">
                                        <i className="fa fa-envelope"></i>
                                        <h6><a href="mailto:sabesan996@gmail.com">{data.ContEmail}</a></h6>
                                        <p>{data.C5}</p>
                                    </div>
                                    <div className="social_widget">
                                        <ul className="list">

                                            <li><a onMouseOver={() => {"this.style.color='#4875B4'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://www.linkedin.com/in/sabesan96/" target="_blank"><i className="fontSize2 fa fa-linkedin" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#211F1F'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://github.com/sabesansathananthan" target="_blank"><i className="fontSize2 fa fa-github" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#12100e'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://medium.com/@sabesan96" target="_blank"><i className="fontSize2 fa fa-medium" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#f48024'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://stackoverflow.com/users/8629258/sathananthan-sabesan" target="_blank"><i className="fontSize2 fa fa-stack-overflow" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#D44638'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="mailto:sabesan996@gmail.com" target="_blank"><i className="fontSize2 fa fa-envelope" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#aa2200'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://www.quora.com/profile/Sathananthan-Sabesan" target="_blank"><i className="fontSize2 fa fa-quora" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#25d366'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://wa.me/94770711017" target="_blank"><i className="fontSize2 fa fa-whatsapp" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#0088cc'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://telegram.me/TheSabesan" target="_blank"><i className="fontSize2 fa fa-telegram" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#1da1f2'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://twitter.com/TheSabesan" target="_blank"><i className="fontSize2 fa fa-twitter" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#00aff0'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="skype:live:a566c037031e4cb?chat" target="_blank"><i className="fontSize2 fa fa-skype" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#1877f2'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://www.facebook.com/sathananthan.sabesan" target="_blank"><i className="fontSize2 fa fa-facebook-f" ></i></a></li>
                                            <li><a onMouseOver={() => {"this.style.color='#c32aa3'"}} onMouseOut={() => {"this.style.color='#cccccc'"}} href="https://www.instagram.com/s_sabesan/" target="_blank"><i className="fontSize2 fa fa-instagram" ></i></a></li>
                                            <li><a href="https://flipboard.com/@TheSabesan" target="_blank"><img src={flipboard} className="imgUpdate" onMouseOver={() => {"this.style.color='#e12828'"}} onMouseOut={()=>{"this.style.color='#cccccc'"}}></img></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <form className="row contact_form" action="contact_process.php" method="post" id="contactForm">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-right">
                                        <button type="submit" value="submit" className="submit_btn">{data.SendMessage} <i className="fa fa-envelope" ></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
    )
}
export default class ContactComponent extends React.Component {
    render() {
        return (

            <div>
                <div className="row"><MapContainer></MapContainer></div>

                <ContactFieldComponent></ContactFieldComponent>
            </div>

        )
    }
}