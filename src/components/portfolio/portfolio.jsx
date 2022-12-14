import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Image Processing by circle packing",
    github: "https://github.com/mohit-aggarwal314/circle-packing",
    demo: "https://robust-believed-maiasaura.glitch.me/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather Application",
    github: "https://github.com/mohit-aggarwal314/Weather",
    demo: "https://image-processing-1.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Learning Chatbot",
    github: "https://github.com/mohit-aggarwal314/bot",
    demo: "https://quiz-bot-10.herokuapp.com/%20",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "This is s portfolio item title",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "This is s portfolio item title",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "This is s portfolio item title",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com",
  // },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MY Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn" target="_blank">
                Live Demo
              </a>
            </div>
            </div>
          </article>
          )
        })
        }
      </div>
    </section>
  );
};

export default portfolio;
