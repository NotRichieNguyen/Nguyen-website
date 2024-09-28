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
            <h1 style={{ paddingLeft: "16px" }}>Software Engineer</h1>
            <p style={{ paddingLeft: "16px" }}>
              Hi, I'm Richie Nguyen, an ambitious CS student @ University of
              Houston 👨‍🎓
            </p>
            <p style={{ paddingLeft: "16px" }}>Located in Houston, Texas 📍</p>
            <div className="social-links">
              <ul class="example-2">
                <li class="icon-content">
                  <a
                    href="https://www.linkedin.com/in/nguyen36/"
                    aria-label="LinkedIn"
                    data-social="linkedin"
                    target="blank"
                  >
                    <div class="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      space="preserve"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div class="tooltip">LinkedIn</div>
                </li>
                <li class="icon-content">
                  <a
                    href="https://github.com/NotRichieNguyen"
                    aria-label="GitHub"
                    data-social="github"
                    target="blank"
                  >
                    <div class="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                      space="preserve"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div class="tooltip">GitHub</div>
                </li>
              </ul>
            </div>
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
            <li className="ts-logo">
              <img alt="typescript" src="images/typescript.png" />
            </li>
            <li className="react-logo">
              <img alt="react" src="images/react.svg" />
            </li>
            <li className="node-logo">
              <img alt="node" src="images/node.png" />
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
              graduate in the Fall semester of 2025.
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
              A web application that allows users to view business details, a
              nail gallery, and available services. The user is able to edit
              their business information as needed through a google sheets form.
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
