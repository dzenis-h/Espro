import React, { Fragment, useEffect } from "react";
import Toggle from "./darkMode/ToggleContainer";
import { useTheme } from "./darkMode/useTheme";
import { Wrapper } from "./darkMode/Wrapper";
import Footer from "../components/layout/FooterComponent";
import Coffee from "./layout/Coffee";

const About = () => {
  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  useEffect(() => {
    document.title = "About Us"; // making the document title dynamic
  }, []);

  return (
    <Fragment>
      <Wrapper>
        <main id="about">
          <Toggle toggleTheme={themeState} theme={themeState.dark} />
          <h1
            className={`lg-heading ${
              darkMode === "true" ? "white" : "heading-about"
            }`}
          >
            About <i className="text-secondary textShadow">Us</i>
          </h1>
          <h2 className="sm-heading animate__animated animate__backInLeft">
            Coffee made for your life on the go
          </h2>
          <small className="about-parts">
            We use Laboratorio di Torrefazione Giamaica Caffe. It is one of
            Italy's top premium coffee roasters. The company is run by Simone
            Fumagalli, Gianni Frasi's successor. He stays true to the tradition
            taught to him by Gianni himself and his uncle, Giovanni Erbisti, who
            began roasting coffee in 1947. He still uses his Erbisti's original
            roasting machine, making him almost certainly the last roaster in
            the world to roast his beans directly with an open flame. The family
            philosophy remains the same, eschewing dark roasts in order to
            preserve even the subtlest aromas of the coffee. Simone is obsessive
            about sourcing his beans and insists on specifying the exact means
            of production at every stage of the process.
          </small>

          

          <div className="contact-flex">
            <div className="coffee-wrapper">
              <Coffee />
            </div>
            <div className="boxes">
              <small>
                <blockquote
                  className={`sunflower ${
                    darkMode === "true" ? "sunflower__reverse" : ""
                  }`}
                >
                  The Best Single Dosing Coffee Grinders
                </blockquote>
                <p className="about-parts">
                  A coffee grinder that has definitely seen a boost in
                  popularity in the past years is the single dose coffee
                  grinder. If you associate brewing coffee as a ritual, then you
                  are gonna love this. The key word for these coffee grinders is
                  “Retention” which should be equal to zero to fully enjoy the
                  pre-weighted coffee you have prepared for your single dose
                  coffee shot. Typically, you will find a pump system on top
                  that will ensure that not even the smallest residuals of
                  weighted coffee are retained.
                </p>
                <hr />
                <blockquote
                  className={`sunflower ${
                    darkMode === "true" ? "sunflower__reverse" : ""
                  }`}
                >
                  We make the best coffee for on the Go
                </blockquote>
                <p
                  className="text-secondary textShadow"
                  style={{ fontSize: "1.25rem" }}
                >
                  {/* Empty content */}
                </p>
                <p className="about-parts">
                  Proident nulla officia minim dolor cillum mollit sit ad sint
                  tempor veniam. Nulla tempor elit quis eu minim. Labore Lorem
                  amet non culpa sit magna exercitation. Duis in aliquip aliquip
                  et dolore voluptate fugiat et consectetur. Ad elit ut aute
                  eiusmod. Amet ullamco culpa sit non ipsum fugiat aute
                  cupidatat. Consequat magna culpa exercitation consequat dolor
                  nisi Lorem do laboris.
                </p>
                <blockquote
                  className={`sunflower ${
                    darkMode === "true" ? "sunflower__reverse" : ""
                  }`}
                >
                  Our Mission
                </blockquote>
                <p className="about-parts">
                  E s p r o is on a mission to make health and wellness
                  accessible to all. We have been dedicated to offering Earth’s
                  best-curated selection of health and wellness products, at the
                  best possible value, delivered with the most convenient
                  experience. We believe that health and wellness should be a
                  universal right made possible through compassion and our
                  collective action. This belief will continue to guide us as we
                  endeavor to make our mission a reality.
                </p>
                <p
                  className={`${
                    darkMode === "true"
                      ? "list text-secondary textShadow"
                      : "list black textShadow"
                  }`}
                >
                  Top 5 reasons to make iHerb your #1 choice for Natural
                  Products!
                </p>
                <ul>
                  <li>
                    World's best value for over 32,000 brand name products
                  </li>
                  <li>No membership or yearly subscription fees</li>
                  <li>Authentic reviews from purchasing customers</li>
                  <li>Assurance of freshness and quality</li>
                  <li>Air-conditioned and super clean warehouses</li>
                </ul>
              </small>
            </div>
          </div>
        </main>
      </Wrapper>
      <Footer className="Row" />
    </Fragment>
  );
};

export default About;
