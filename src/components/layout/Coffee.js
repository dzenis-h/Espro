import React from "react";
import "../../style/Coffee.css";

export default function Coffee() {
  return (
    <div>
      <div className="container">
        <div className="bar">
          <div className="bold">
            <h3>Bold</h3>
          </div>
          <div className="circle top"></div>
          <div className="circle middle"></div>
          <div className="circle bottom"></div>
          <div className="creamy">
            <h3>Creamy</h3>
          </div>
        </div>
        <div className="coffee-cups">
          <div className="cup-small doppio">
            <div className="handle"></div>
          </div>
          <div className="cup americano">
            <div className="handle"></div>
          </div>
          <div className="cup-small macchiato">
            <div className="handle"></div>
          </div>
          <div className="cup-small flatwhite">
            <div className="handle"></div>
          </div>
          <div className="cup cappuccino">
            <div className="handle"></div>
          </div>
          <div className="cup-long latte">
            <div className="handle"></div>
            <div className="bottom-handle"></div>
          </div>
        </div>
        <div className="info">
          <div className="first">
            <h1>doppio</h1>
            <p>Double shot of espresso. Straight.</p>
          </div>
          <div className="second">
            <h1>americano</h1>
            <p>Shots of espresso diluted with water</p>
          </div>
          <div className="third">
            <h1>Macchiato</h1>
            <p>Espresso with a dash of frothy foamed milk.</p>
          </div>
          <div className="fourth">
            <h1>Flat White</h1>
            <p>Double shot of espresso with steamed milk.</p>
          </div>
          <div className="fifth">
            <h1>Cappuccino</h1>
            <p>
              Double shot of espresso topped with an airy thick layer of foamed
              milk.
            </p>
          </div>
          <div className="sixth">
            <h1>Caffe Latte</h1>
            <p>A shot of espresso in steamed milk lightly topped with foam.</p>
          </div>
        </div>
      </div>

      <div className="key">
        <div className="circle espresso">
          <p className="small">espresso</p>
        </div>
        <div className="circle milk">
          <p className="small">steamed milk</p>
        </div>
        <div className="circle foam">
          <p className="small">milk foam</p>
        </div>
        <div className="circle water">
          <p className="small">water</p>
        </div>
      </div>
    </div>
  );
}
