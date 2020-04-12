import React from 'react';
import '../styles/Blog.scss';
export default class BlogMediumComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogLists: ''
    };
  }
  componentWillMount() {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sabesan96").then(res => res.json())
      .then(data => {
        this.getData(data);
      })
  }
  getData(data) {
    const res = data.items;
    const posts = res.filter(item => item.categories.length > 0);
    function toText(node) {
      let tag = document.createElement("div");
      tag.innerHTML = node;
      node = tag.innerText;
      return node;
    }
    function shortenText(text, startingPoint, maxLength) {
      return text.length > maxLength
        ? text.slice(startingPoint, maxLength)
        : text;
    }
    let output = "";
    output = this.singleBlog(posts, output, shortenText, toText);
    this.setState({blogLists: output});
  }

  singleBlog(posts, output, shortenText, toText) {
    posts.forEach(item => {
      output += `
              <div class="card mb-3 mx-auto mr-5 customWidth">
                    <img src="${item.thumbnail}" class="card-img-top" alt="Cover image">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="${item.link}">${shortenText(item.title, 0, 60)}</a>
                        </h5> 
                        <p class="card-text">${shortenText(toText(item.content), 0, 120)}...</p>
                        <a href="${item.link}" target="_blank" class="btn btn-outline-success" > 
                            Read More  
                        </a>
                    </div>
                    </div>
                `;
    });
    return output;
  }

  render() {
    if(!this.state.blogLists){
      // Just wait for the memory to be available
      return null;
   }

    return (
      <div className="row blog__slider" dangerouslySetInnerHTML={{ __html: this.state.blogLists }}></div>
    )
  }
}