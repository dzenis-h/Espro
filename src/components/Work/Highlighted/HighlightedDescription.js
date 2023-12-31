import React from "react";

const HighlightedDescription = ({ openVideo }) => {
  return (
    <div className="item-description">
      <h4
        className="textShaddow"
        style={{ letterSpacing: "4px", textAlign: "center" }}
      >
        <span className="text-secondary" aria-label="dash">
          <b>
            <span role="img" aria-label="A dash">
              ➖
            </span>{" "}
            <i>About Us</i>{" "}
            <span role="img" aria-label="A dash">
              ➖
            </span>
          </b>
        </span>{" "}
      </h4>

      <p>
        Since 1997 we have served over 60000 happy customers. We have selected
        the best choice of home espresso coffee machines, grinders and
        accessories for you. We will be glad to answer all your questions to
        ensure your choice will fit with your needs and your budget. Even after
        the sale our technical staff will provide you with the best technical
        support if needed. Prompt delivery, money back guarantee no question.
      </p>
      <div className="highlightedList__icons">
        <li style={{ listStyleType: "none" }}>
          <a
            href="#!"
            id="video"
            className="icons textShadow"
            onClick={openVideo}
            aria-label="Open the video demonstration"
          >
            <span
              style={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <i className="fab fa-youtube fa-2x" /> Watch Our Commercial
            </span>
          </a>
        </li>
      </div>
    </div>
  );
};

export default HighlightedDescription;
