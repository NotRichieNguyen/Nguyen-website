import "./App.css";
import { Link } from "react-scroll";

function scrollToTop() {
  var scrollDiv = document.querySelector(".top").offsetTop;
  window.scrollTo({ top: scrollDiv, behavior: "smooth" });
}
function scrollToMiddle() {
  const scrollDiv = document.querySelector(".middle").offsetTop - 150;
  window.scrollTo({ top: scrollDiv, behavior: "smooth" });
}
function scrollToBottom() {
  const scrollDiv = document.querySelector(".bottom").offsetTop - 80;
  window.scrollTo({ top: scrollDiv, behavior: "smooth" });
}
function scrollToContact() {
  var scrollDiv = document.querySelector(".contact-content").offsetTop - 100;
  window.scrollTo({ top: scrollDiv, behavior: "smooth" });
}

function App() {
  return (
    <div>
      <div className="header">
        <div className="left-section">
          <div className="name">&lt;&gt;Nguyen&lt;/&gt;</div>
        </div>
        <div className="right-section">
          <div className="home">
            <Link
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="button1"
              onClick={scrollToTop}
            >
              Home
            </Link>
          </div>
          <div className="about">
            <Link
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="button2"
              onClick={scrollToMiddle}
            >
              About
            </Link>
          </div>
          <div className="projects">
            <Link
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="button3"
              onClick={scrollToBottom}
            >
              Projects
            </Link>
          </div>
          <div className="contact">
            <Link
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="button4"
              onClick={scrollToContact}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="top">
        <div className="top-top">
          <div className="introduction">
            <h1>Aspiring Computer Science Intern</h1>
            <p>
              Hello, I'm Richie Nguyen, an ambitious computer science student
              from the University of Houston, Class of 2025
            </p>
          </div>
          <div className="profile-picture">
            <img
              className="picture"
              alt="profile-picture"
              src="images/profile-picture.jpg"
            />
          </div>
        </div>
        <div className="tech-stack">
          <ul>
            {/* <li className="html-logo">
              <img alt="html" src="images/html.svg" />
            </li>
            <li className="css-logo">
              <img alt="css" src="images/css.svg" />
            </li> */}
            <li className="js-logo">
              <img alt="js" src="images/js.svg" />
            </li>
            <li className="react-logo">
              <img alt="react" src="images/react.svg" />
            </li>
            <li className="c-logo">
              <img alt="c++" src="images/c++.png" />
            </li>
            <li className="python-logo">
              <img alt="pytho" src="images/python.jpg" />
            </li>
            <li className="django-logo">
              <img alt="django" src="images/django.png" />
            </li>
          </ul>
        </div>
      </div>

      <div className="middle">
        <div className="about-left">
          <img
            className="about-left-picture"
            alt="about-picture"
            src="images/about-picture.jpg"
          />
        </div>
        <div className="about-right">
          <div className="about-right-1">ABOUT ME</div>
          <div className="animated-text">
            I am <span></span>
          </div>
          <div className="about-right-3">
            As a highly motivated student graduating with a B.S. in computer
            science, I am beginning to build a foundation with multiple
            programming skills such as Javascript, React, Python, and Django.
            Through various projects and coursework, I have honed my
            problem-solving abilities, attention to detail, and ability to work
            effectively. With my passion for technology and my strong
            programming skills, I am excited to apply my knowledge and
            collaborate with talented professionals in the near future!
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="project-1-content">
          <div className="project-1-name">Front End Web Portfolio</div>
          <div className="project-1-languages">HTML, CSS, JS, REACT</div>
          <div className="project-1-picture">
            <img
              class="thumbnail-1"
              alt="thumbnail1"
              src="images/thumbnail1.png"
            />
          </div>
          <div className="project-1-links">
            <div className="project-1-code">
              <a
                href="https://github.com/NotRichieNguyen/Nguyen-website"
                target="_blank"
              >
                Code
              </a>
            </div>
            <div className="github-icon-1-content">
              <a
                href="https://github.com/NotRichieNguyen/Nguyen-website"
                target="_blank"
              >
                <img
                  className="github-icon-1"
                  alt="githubicon"
                  src="images/github.png"
                />
              </a>
            </div>
            {/* <div className="project-1-demo"><a href="https://www.linkedin.com/in/richienguyen36/" target="_blank">Demo</a></div> */}
          </div>
          <div className="project-1-desc">
            Being a computer science student, my initial ambition was to create
            a personal website portfolio completely from scratch. Throughout my
            journey, I acquired knowledge in HTML, CSS, JS, and React. This
            website portfolio of mine serves as a valuable tool for presenting
            my projects in a polished and professional manner, allowing me to
            effectively demonstrate my skills to potential recruiters.
          </div>
        </div>
        <div className="project-2-content">
          <div className="project-2-name">Nutrition Tracker</div>
          <div className="project-2-languages">Python, Django</div>
          <div className="project-2-picture">
            <img
              className="thumbnail-2"
              src="images/thumbnail2.png"
              alt="thumbnail2"
            />
          </div>
          <div className="project-1-links">
            <div className="project-1-code">
              <a
                href="https://github.com/NotRichieNguyen/NuTracker"
                target="_blank"
              >
                Code
              </a>
            </div>
            <div className="github-icon-1-content">
              <a
                href="https://github.com/NotRichieNguyen/NuTracker"
                target="_blank"
              >
                <img
                  className="github-icon-1"
                  alt="githubicon"
                  src="images/github.png"
                />
              </a>
            </div>
            {/* <div className="project-1-demo"><a href="https://www.linkedin.com/in/richienguyen36/" target="_blank">Demo</a></div> */}
          </div>
          <div className="project-2-desc">
            As a fitness enthusiast, I set out to create a nutrition tracker web
            application using Python and Django, effectively integrating data
            from a public API. This project showcases my proficiency in web
            development, demonstrating my ability to leverage external
            data sources to provide users with a comprehensive and intuitive
            tool for tracking their nutritional intake.
          </div>
        </div>
        {/* <div className="project-3-content">
          <div className="project-3-name">Coming Soon...</div>
          <div className="project-3-languages"></div>
          <div className="project-3-picture">
            <img alt="thumbnail3" />
          </div>
          <div className="project-3-desc"></div>
        </div> */}
      </div>
      <div className="contact-content">
        <div className="contact-top">
          <h3>CONTACT</h3>
        </div>
        <div className="contact-bot">
          <div className="linkedin-content">
            <div className="linkedin-icon-2-content">
              <a
                href="https://www.linkedin.com/in/richienguyen36/"
                target="_blank"
              >
                <img
                  alt="linkedicon"
                  className="linkedin-icon-2"
                  src="images/blacklinkedin.jpg"
                />
              </a>
            </div>
            <div className="linkedin-username">richienguyen36</div>
          </div>
          <div className="github-content">
            <div className="github-icon-2-content">
              <a href="https://github.com/NotRichieNguyen" target="_blank">
                <img
                  alt="giticon"
                  className="github-icon-2"
                  src="images/github.png"
                />
              </a>
            </div>
            <div className="github-username">NotRichieNguyen</div>
          </div>
          <div className="contact-name">
            <div className="contact-name-icon-content">
              <img
                alt="contacticon"
                className="contact-name-icon"
                src="images/person.jpg"
              />{" "}
            </div>
            <div className="contact-name-name">Richie Nguyen</div>
          </div>
          <div className="mail-content">
            <div className="mail-icon-content">
              <img
                alt="mailicon"
                className="mail-icon"
                src="images/envelope.jpg"
              />
            </div>
            <div className="mail-address">nguyenr901@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="end"></div>
    </div>
  );
}

export default App;
