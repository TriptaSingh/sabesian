import React from 'react';
import '../styles/Site.scss';
import iR1 from '../images/media/4iR-1.jpg';
import iR2 from '../images/media/4iR-1.jpg';
import iR3 from '../images/media/4iR-1.jpg';
import HackX1 from '../images/media/HackX-1.jpg';
import HackX2 from '../images/media/HackX-2.jpg';
import HackX3 from '../images/media/HackX-3.jpg';
import IEEEP1 from '../images/media/IEEEP-1.jpg';
import IEEEP2 from '../images/media/IEEEP-2.jpg';
import IEEES1 from '../images/media/IEEES12-1.jpg';
import IEEES2 from '../images/media/IEEES12-2.jpg';
export const MediaComponent = () => {
    return (
        <section className="moments_area pad_top">
            <div className="container box_1620">
                <div className="moments_inner imageGallery1">
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={HackX1} alt="" />
                            <div className="hover">
                                <a className="light" href={HackX1}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={HackX2} alt="" />
                            <div className="hover">
                                <a className="light" href={HackX2}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>




                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={HackX3} alt="" />
                            <div className="hover">
                                <a className="light" href={HackX3}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={IEEES1} alt="" />
                            <div className="hover">
                                <a className="light" href={IEEES1}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={IEEES2} alt="" />
                            <div className="hover">
                                <a className="light" href={IEEES2}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={IEEEP1} alt="" />
                            <div className="hover">
                                <a className="light" href={IEEEP1}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={IEEEP2} alt="" />
                            <div className="hover">
                                <a className="light" href={IEEEP2}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={iR1} alt="" />
                            <div className="hover">
                                <a className="light" href={iR1}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={iR2} alt="" />
                            <div className="hover">
                                <a className="light" href={iR2}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src={iR3} alt="" />
                            <div className="hover">
                                <a className="light" href={iR3}><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src="img/moments/Image-05.jpg" alt="" />
                            <div className="hover">
                                <a className="light" href="img/moments/Image-05.jpg"><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_item">
                        <div className="h_gallery_item">
                            <img src="img/moments/Image-06.jpg" alt="" />
                            <div className="hover">
                                <a className="light" href="img/moments/Image-06.jpg"><i className="fa fa-expand"></i></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>

    )
}