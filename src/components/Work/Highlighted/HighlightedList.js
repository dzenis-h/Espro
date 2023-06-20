import React, { Fragment } from "react";

const HighlightedList = () => {
  return (
    <Fragment>
      <ul className="highlightedList">
        <span>
          {" "}
          <span className="text-secondary" style={{ fontWeight: "bold" }}>
            GENERAL INFO:
          </span>
          <ul>
            <li>E S P R O Coffee Shop srl</li>
            <li>Via San Benedetto 45/B</li>
            <li>35037 Teolo -ITALY-</li>
            <li>Phone: +39-049-9904445</li>
            <li>Fax: +39-049-9902024</li>
            <li
              onClick={() => (window.location = "mailto:yourmail@gmail.com")}
              style={{ cursor: "pointer" }}
            >
              info@espro.com
            </li>
          </ul>{" "}
        </span>
        <button
          onClick={() => (window.location = "mailto:yourmail@gmail.com")}
          className="contact-us"
        >
          Contact Us
        </button>
        <hr />
        
      </ul>
    </Fragment>
  );
};

export default HighlightedList;
