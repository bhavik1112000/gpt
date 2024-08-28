import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  
    <div className="gpt_blog-container-article">
    <div className="gpt_blog-container-article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt_blog-container-article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
  
);

export default Article;