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
  const scrollDiv = document.querySelector(".projects-root").offsetTop - 80;
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
            <h1>Software Engineer</h1>
            <p>
              Hi, I'm Richie Nguyen, an ambitious CS student @ University of
              Houston 👋
            </p>
            <p>Graduating in Fall 2025</p>
          </div>
          <div className="profile-picture">
            <img
              className="picture"
              alt="profile"
              src="images/profile-picture.jpg"
            />
          </div>
        </div>
        <div className="tech-stack">
          <ul>
            <li className="html-logo">
              <img alt="html" src="images/html.svg" />
            </li>
            <li className="css-logo">
              <img alt="css" src="images/css.svg" />
            </li>
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
            <li className="psql-logo">
              <img alt="psql" src="images/psql.png" />
            </li>
            <li className="mongodb-logo">
              <img alt="mongodb" src="images/mongodb.svg" />
            </li>
          </ul>
        </div>
      </div>

      <div className="middle">
        <div className="about-left">
          <img
            className="about-left-picture"
            alt="about"
            src="images/about-picture.jpg"
          />
        </div>
        <div className="about-right">
          <div className="about-right-1">ABOUT ME</div>
          <div className="animated-text">
            I am <span></span>
          </div>
          <div className="about-right-3">
            <p style={{ width: "85%" }}>
              Hi, my name is Richie Nguyen. I am a CS major expecting to
              graduate in the Fall seemester of 2025.
            </p>
            <p style={{ width: "90%" }}>
              Recently, I worked with a client to develop a business website,
              where I translated their needs into a functional platform.
            </p>
            <p style={{ width: "90%" }}>
              Previously, I externed at Paragon One, where I conducted extensive
              research on emerging blockchain technologies.
            </p>
            <p style={{ width: "90%" }}>
              {" "}
              With my passion for technology and my strong programming skills, I
              am excited to apply my knowledge and collaborate with talented
              professionals in the near future!
            </p>
          </div>
        </div>
      </div>
      <div className="projects-root">
        <div className="projects-header">PORTFOLIO</div>
        <div className="projects-header-2">A Display of my Unique Projects</div>
        <div className="project-container">
          <div className="project-thumbnail-container">
            <img
              class="project-thumbnail"
              alt="thumbnail1"
              src="images/thumbnail5.png"
            />
          </div>
          <div className="project-info">
            <div className="project-title">TRENDI NAILS & FACIAL 💅</div>
            <div className="project-desc">
              A web application I developed for a client that allows users to
              view business details, a nail gallery, and available services.
            </div>
            <div className="project-techstack">
              <div className="tech">JavaScript</div>
              <div className="tech">React</div>
              <div className="tech">Vercel</div>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/NotRichieNguyen/business-website"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
              <a
                href="https://github.com/NotRichieNguyen/business-website"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="github-icon-1"
                  alt="githubicon"
                  src="images/github.png"
                />
              </a>
              <a
                href="https://business-website-seven-iota.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "20px" }}
              >
                Demo
              </a>
              <div className="share-icon-container">
                <a
                  href="https://business-website-seven-iota.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="share-icon"
                    alt="share"
                    src="images/share.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-info">
            <div className="project-title">WRENCH WORK 🚗</div>
            <div className="project-desc">
              A full stack web application that allows a mechanic to store
              customer information and their service records. The interface
              allows the admin to search, create, update, and delete clients.
            </div>
            <div className="project-techstack" style={{ width: "78%" }}>
              <div className="tech">PostgreSQL</div>
              <div className="tech">Express</div>
              <div className="tech">React</div>
              <div className="tech">Node</div>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/NotRichieNguyen/Autoshop"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
              <a
                href="https://github.com/NotRichieNguyen/Autoshop"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="github-icon-1"
                  alt="githubicon"
                  src="images/github.png"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=tR6SiQDmw6U"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "20px" }}
              >
                Demo
              </a>
              <div className="share-icon-container">
                <a
                  href="https://www.youtube.com/watch?v=tR6SiQDmw6U"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="share-icon"
                    alt="share"
                    src="images/share.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="project-thumbnail-container">
            <img
              class="project-thumbnail"
              alt="thumbnail1"
              src="images/thumbnail6.png"
            />
          </div>
        </div>
        <div className="project-container">
          <div className="project-thumbnail-container">
            <img
              class="project-thumbnail"
              alt="thumbnail1"
              src="images/thumbnail7.png"
              style={{ width: "101%" }}
            />
          </div>
          <div className="project-info">
            <div className="project-title">NUTRITION NINJA 🍔</div>
            <div className="project-desc">
              A web application that allowed users to search any food or drink
              and receive information on the macronutrients of the item.
            </div>
            <div className="project-techstack" style={{ width: "35%" }}>
              <div className="tech">Python</div>
              <div className="tech">Django</div>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/NotRichieNguyen/NuTracker"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
              <a
                href="https://github.com/NotRichieNguyen/NuTracker"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="github-icon-1"
                  alt="githubicon"
                  src="images/github.png"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=eNxDRC-0VMM"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "20px" }}
              >
                Demo
              </a>
              <div className="share-icon-container">
                <a
                  href="https://www.youtube.com/watch?v=eNxDRC-0VMM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="share-icon"
                    alt="share"
                    src="images/share.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="projects-root-container">
        <h1
          style={{ color: "#147efb", marginTop: "50px" }}
          className="project-header"
        >
          MY PROJECTS
        </h1>

        <div className="project-container">
          <div className="project-header">
            <h3>Nail Salon Website</h3>
          </div>
          <div className="project-techstack">
            JavaScript, React.js, RESTful APIs, Git, Vercel
          </div>
          <div className="trendi-thumbnails">
            <div className="new-project-thumbnail">
              <img
                class="project-thumbnail"
                alt="thumbnail1"
                src="images/thumbnail3.png"
              />
            </div>
            <div className="new-project-thumbnail2">
              <img
                class="project-thumbnail3"
                alt="thumbnail3"
                src="images/trendimobile.jpg"
              />
            </div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/NotRichieNguyen/business-website"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              href="https://github.com/NotRichieNguyen/business-website"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github-icon-1"
                alt="githubicon"
                src="images/github.png"
              />
            </a>
            <a
              href="https://business-website-seven-iota.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "20px" }}
            >
              Demo
            </a>
            <div className="share-icon-container">
              <a
                href="https://business-website-seven-iota.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="share-icon"
                  alt="share"
                  src="images/share.jpg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-header">
            <h3>Auto Shop Service Tracker</h3>
          </div>
          <div className="project-techstack">
            PostgreSQL, ExpressJS, ReactJS, NodeJS
          </div>
          <div className="new-project-thumbnail">
            <img
              className="project-thumbnail"
              src="images/thumbnail4.png"
              alt="thumbnail4"
            />
          </div>
          <div className="project-links">
            <a
              href="https://github.com/NotRichieNguyen/Autoshop"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              href="https://github.com/NotRichieNguyen/Autoshop"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github-icon-1"
                alt="githubicon"
                src="images/github.png"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=tR6SiQDmw6U"
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "20px" }}
            >
              Demo
            </a>
            <div className="share-icon-container">
              <a
                href="https://www.youtube.com/watch?v=tR6SiQDmw6U"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="share-icon"
                  alt="share"
                  src="images/share.jpg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="project-container" style={{ marginTop: "100px" }}>
          <div className="project-header">
            <h3>Nutrition Tracker App</h3>
          </div>
          <div className="project-techstack">Python, Django, Public APIs</div>
          <div className="new-project-thumbnail">
            <img
              className="project-thumbnail"
              src="images/thumbnail2.png"
              alt="thumbnail2"
            />
          </div>
          <div className="project-links">
            <a
              href="https://github.com/NotRichieNguyen/NuTracker"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              href="https://github.com/NotRichieNguyen/NuTracker"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github-icon-1"
                alt="githubicon"
                src="images/github.png"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=eNxDRC-0VMM"
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "20px" }}
            >
              Demo
            </a>
            <div className="share-icon-container">
              <a
                href="https://www.youtube.com/watch?v=eNxDRC-0VMM"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="share-icon"
                  alt="share"
                  src="images/share.jpg"
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bottom">
        <div className="project-1-content">
          <div className="project-1-name">Full Stack Nail Salon Website</div>
          <div className="project-1-languages">React.js, RESTful APIs, Git</div>
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
                rel="noreferrer"
              >
                Code
              </a>
            </div>
            <div className="github-icon-1-content">
              <a
                href="https://github.com/NotRichieNguyen/Nguyen-website"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="github-icon-1"
                  alt="githubicon"
                  src="images/github.png"
                />
              </a>
            </div>

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
                rel="noreferrer"
              >
                Code
              </a>
            </div>
            <div className="github-icon-1-content">
              <a
                href="https://github.com/NotRichieNguyen/NuTracker"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="github-icon-1"
                  alt="githubicon"
                  src="images/github.png"
                />
              </a>
            </div>

          </div>
          <div className="project-2-desc">
            As a fitness enthusiast, I set out to create a nutrition tracker web
            application using Python and Django, effectively integrating data
            from a public API. This project showcases my proficiency in web
            development, demonstrating my ability to leverage external data
            sources to provide users with a comprehensive and intuitive tool for
            tracking their nutritional intake.
          </div>
        </div> 

      </div>*/}
      <div className="contact-content">
        <div className="contact-top">
          <h3>CONTACT ME!</h3>
        </div>
        <div className="contact-bot">
          <div className="linkedin-content">
            <div className="linkedin-icon-2-content">
              <a
                href="https://www.linkedin.com/in/nguyen36/"
                target="_blank"
                rel="noreferrer"
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
              <a
                href="https://github.com/NotRichieNguyen"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="giticon"
                  className="github-icon-2"
                  src="images/github.png"
                />
              </a>
            </div>
            <div className="github-username">NotRichieNguyen</div>
          </div>
          {/* <div className="contact-name">
            <div className="contact-name-icon-content">
              <img
                alt="contacticon"
                className="contact-name-icon"
                src="images/person.jpg"
              />{" "}
            </div>
            <div className="contact-name-name">Richie Nguyen</div>
          </div> */}
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
      {/* <div className="end"></div> */}
    </div>
  );
}

export default App;

//  "homepage": "http://localhost:3000",

//   "proxy": "http://localhost:3000",
