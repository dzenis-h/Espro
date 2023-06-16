import React from "react";
import Footer from "./layout/FooterComponent";
import Toggle from "./darkMode/ToggleContainer";
import { useTheme } from "./darkMode/useTheme";
import { Wrapper } from "./darkMode/Wrapper";

const Contact = (props) => {
  const themeState = useTheme();
  // const darkMode = localStorage.getItem("dark");

  return (
    <>
      <Wrapper>
        <main id="contact">
          <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
          <h1 clasName="lg-heading">
            Contact <span clasName="text-secondary">Us</span>
          </h1>
          <h2 clasName="sm-heading">
            This is how you can reach us:
            <br />
            <small clasName="text-secondary">
              For convenience, the contact info is clickable
            </small>
          </h2>

          <div clasName="boxes">
            <div clasName="xsm .diff-text-2">
              <i clasName="fab fa-linkedin-in"></i>
              <a
                href="https://www.linkedin.com/in/dzenis-h/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div clasName="xsm .diff-text-2">
              <address>
                Email us <i clasName="fas fa-at"></i>
                <a
                  href="mailto:bigga.test.2018@gmail.com"
                  rel="noopener noreferrer"
                >
                  E S P R O <span role="img" aria-label="coffee">☕</span>
                </a>
                <br />
              </address>
            </div>

            <div clasName="xsm .diff-text-2">
              <i clasName="fas fa-mobile-alt"></i>
              <a href="tel:0097142283234">Phone: (+971) 4 228 3234</a>
              <br />
            </div>

            <div clasName="xsm .diff-text-2">
              <i clasName="fab fa-skype"></i>
              <a href="skype:dzenis.hankusic?call">Call us via Skype</a>
            </div>

            <div clasName="xsm .diff-text-2">
              <i clasName="fas fa-map-marker-alt"></i>
              <a
                href="https://maps.google.com/?q=44.696107, 18.299074"
                target="_blank"
                rel="noopener noreferrer"
              >
                Address: Al Reem Tower Al Maktoum Rd, Dubai, UAE
              </a>
              <br />
            </div>
          </div>
        </main>

        <Footer />
      </Wrapper>
    </>
  );
};
export default Contact;
