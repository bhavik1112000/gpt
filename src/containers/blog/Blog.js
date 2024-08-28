import React from 'react';
import Article from '../../components/article/Article';
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
import './blog.css';

const objs =
  {
    date: "Sep 26, 2021",
    text: "GPT-1"
  }



const Blog = () => (
  <div className="gpt_blog section_padding" id="blog">
    <div className="gpt_blog-heading">
      <h1 className="gradient_text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt_blog-container">
      <div className="gpt_blog-container-groupA">
        <Article imgUrl={blog01} date={objs.date} text={objs.text} />

      </div>
      <div className="gpt_blog-container-groupB">
      <Article imgUrl={blog02} date={objs.date} text={objs.text} />
      <Article imgUrl={blog03} date={objs.date} text={objs.text} />
      <Article imgUrl={blog04} date={objs.date} text={objs.text} />
      <Article imgUrl={blog05} date={objs.date} text={objs.text} />
      </div>
    </div>
  // </div>
);

export default Blog;