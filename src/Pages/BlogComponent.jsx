import React from "react";
import "../styles/Site.scss";
import Slider from "../components/Slider";
import blogData from "../static/BlogData.json";

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
                      {blogData.MediumUserName}'s Posts
                    </h1>
                    <div className="main_title">
                      <p>
                        Here you can see only my last 10 blog articles. If you
                        want more posts click the below button
                      </p>
                    </div>
                    <a
                      className="banner_btn"
                      href="https://medium.com/@sabesan96"
                      target="_blank"
                      role="button"
                    >
                      View All Posts <i className="fas fa-newspaper"></i>
                    </a>
                  </div>
                  <Slider />

                  <ul
                    id="pagin"
                    className="pagination justify-content-center"
                  ></ul>

                  <div className="text-center">
                    <div className="mb-5">
                      <a
                        className="banner_btn"
                        href="https://medium.com/@sabesan96"
                      >
                        View All Posts <i className="fas fa-newspaper"></i>
                      </a>
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
                    href={blogData.TwitterBannerLink}
                    data-tweet-limit="3"
                  >
                    Tweets by {blogData.TwitterUserName}
                  </a>
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <div className="blogAside1">
                    <a
                      href={blogData.TwitterButtonLink}
                      className="twitter-mention-button"
                      data-size="large"
                      data-dnt="true"
                      data-show-count="false"
                    >
                      Tweet to @{blogData.TwitterUserName}
                    </a>
                  </div>
                </aside>
                <div className="br"></div>
                <aside className="single_sidebar_widget author_widget">
                  <div className="googleCalendar">
                    <iframe
                      src={blogData.GoogleCalenderLink}
                      height="225"
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
