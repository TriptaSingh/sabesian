import React from 'react';
import BlogMediumComponent from './BlogMediumComponent';
import '../styles/Blog.scss';
import '../styles/Site.scss';
import data from '../static/staticData.json';

export class BlogComponent extends React.Component {

    componentDidMount() {
    //     pageSize = 4;

    // var pageCount = $(".card").length / pageSize;

    // for (var i = 0; i < pageCount; i++) {
    //   $("#pagin").append(
    //     `<li class="page-item"><a class="page-link" href="#">${i + 1}</a></li> `
    //   );
    // }
    // $("#pagin li:nth-child(1)").addClass("active");
    // showPage = function(page) {
    //   $(".card").hide();
    //   $(".card").each(function(n) {
    //     if (n >= pageSize * (page - 1) && n < pageSize * page) $(this).show();
    //   });
    // };

    // showPage(1);

    // $("#pagin li").click(function() {
    //   $("#pagin li").removeClass("active");
    //   $(this).addClass("active");
    //   showPage(parseInt($(this).text()));
    //   return false;
    // });
    }
    render() {
        return (
            <section className="blog_area single-post-area p_120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post row">
                                <div className="col-lg-12">
                                    <div className="jumbotron text-center">
                                        <div id="logo"></div>
                                        <h1 className="display-4 mb-3 name name-small name-small-small">
                                            {data.Blog1}
                      </h1>
                                        <div className="main_title">
                                            <p>
                                                {data.Blog2}
                        </p>
                                        </div>
                                        <a
                                            className="banner_btn"
                                            href="https://medium.com/@sabesan96"
                                            target="_blank"
                                            role="button"
                                        >{data.Blog3} <i className="fa fa-newspaper-o"></i
                                        ></a>
                                    </div>
                                    <BlogMediumComponent />

                                    <ul id="pagin" className="pagination justify-content-center"></ul>

                                    <div className="text-center">
                                        <div className="mb-5">
                                            <a className="banner_btn" href="https://medium.com/@sabesan96"
                                            >{data.Blog3} <i className="fa fa-newspaper-o"></i
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="blog_right_sidebar">
                                <aside className="single_sidebar_widget author_widget">
                                    <a
                                        className="twitter-timeline"
                                        href="https://twitter.com/TheSabesan?ref_src=twsrc%5Etfw"
                                        data-tweet-limit="3"
                                    >{data.Blog4}</a
                                    >
                                </aside>
                                <aside className="single_sidebar_widget popular_post_widget">
                                    <div className="blogAside1">
                                        <a
                                            href="https://twitter.com/intent/tweet?screen_name=TheSabesan&ref_src=twsrc%5Etfw"
                                            className="twitter-mention-button"
                                            data-size="large"
                                            data-dnt="true"
                                            data-show-count="false"
                                        >{data.Blog5}</a
                                        >
                                    </div>
                                </aside>
                                <div className="br"></div>
                                <aside className="single_sidebar_widget author_widget">
                                    <div className="googleCalendar">
                                        <iframe
                                            src="https://calendar.google.com/calendar/b/0/embed?height=225&amp;wkst=1&amp;bgcolor=%23fbfaff&amp;ctz=Asia%2FColombo&amp;src=c2FiZXNhbjk5NkBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bzg2cmN1YmJnbHN0OTQ3YnNrOHVnajNoMWt1b20wMWVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4ubGsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=c2FiZXNhbi4xNkBjc2UubXJ0LmFjLmxr&amp;color=%23009688&amp;color=%234285F4&amp;color=%23C0CA33&amp;color=%23D81B60&amp;color=%23009688&amp;showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
                                            width="300"
                                            height="225"
                                            frameborder="0"
                                            scrolling="no"
                                        ></iframe>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}