import React, { useEffect, useState, Suspense } from "react";
import ModalVideo from "react-modal-video";

import HighlightedHeader from "./Highlighted/HighlightedHeader";

import Toggle from "../darkMode/ToggleContainer";
import { useTheme } from "../darkMode/useTheme";
import { Wrapper } from "../darkMode/Wrapper";

import HighlightedDescription from "./Highlighted/HighlightedDescription";
import HighlightedList from "./Highlighted/HighlightedList";

import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
} from "../helper/imageIndex";

const ImageComponent = React.lazy(() => import("../helper/ImageComponent"));

const Work = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    document.title = "Info section"; // making the document title dynamic
  }, []);

  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  return (
    <div>
      <Wrapper>
        <main id="work">
          <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>{" "}
          <h1 className="lg-heading textShadow">
            <span className={darkMode === "true" ? "white" : "heading-about"}>
              Our
            </span>
            <i className="text-secondary textShadow"> Work</i>
          </h1>
          <ModalVideo
            ratio="21:9"
            channel="youtube"
            isOpen={videoOpen}
            videoId="ZZYgp_mr6Ks"
            onClose={() => setVideoOpen(false)}
          />
          <HighlightedHeader />
          <div className="highlightedProject">
            <div className="item">
              {/* Removed 3rd party package and implemented React.lazy && Suspense */}
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p1} title="Espro" />
              </Suspense>
            </div>
            <HighlightedDescription />
            <HighlightedList openVideo={() => setVideoOpen(true)} />
          </div>
          <div className="projects">
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p4} />
              </Suspense>
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p2} title="Cup of coffee" />
              </Suspense>
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p3} title="Making coffee 1" />
              </Suspense>
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p5} title="Colored cups" />
              </Suspense>
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p6} title="Coffee shop" />
              </Suspense>
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p7}
                  title="People enjoying good coffee"
                />
              </Suspense>
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p8} title="Man making coffee" />
              </Suspense>
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p9} title="Woman makes coffee" />
              </Suspense>
            </div>
            {/* E N D */}
          </div>
        </main>
      </Wrapper>
    </div>
  );
};

export default Work;
