import React from "react";
import "../../style/Coffee.css";

export default function Coffee() {
  return (
    <div>
      <div class="container">
        <div class="bar">
          <div class="bold">
            <h3>Bold</h3>
          </div>
          <div class="circle top"></div>
          <div class="circle middle"></div>
          <div class="circle bottom"></div>
          <div class="creamy">
            <h3>Creamy</h3>
          </div>
        </div>
        <div class="coffee-cups">
          <div class="cup-small doppio">
            <div class="handle"></div>
          </div>
          <div class="cup americano">
            <div class="handle"></div>
          </div>
          <div class="cup-small macchiato">
            <div class="handle"></div>
          </div>
          <div class="cup-small flatwhite">
            <div class="handle"></div>
          </div>
          <div class="cup cappuccino">
            <div class="handle"></div>
          </div>
          <div class="cup-long latte">
            <div class="handle"></div>
            <div class="bottom-handle"></div>
          </div>
        </div>
        <div class="info">
          <div class="first">
            <h1>doppio</h1>
            <p>Double shot of espresso. Straight.</p>
          </div>
          <div class="second">
            <h1>americano</h1>
            <p>Shots of espresso diluted with water</p>
          </div>
          <div class="third">
            <h1>Macchiato</h1>
            <p>Espresso with a dash of frothy foamed milk.</p>
          </div>
          <div class="fourth">
            <h1>Flat White</h1>
            <p>Double shot of espresso with steamed milk.</p>
          </div>
          <div class="fifth">
            <h1>Cappuccino</h1>
            <p>
              Double shot of espresso topped with an airy thick layer of foamed
              milk.
            </p>
          </div>
          <div class="sixth">
            <h1>Caffe Latte</h1>
            <p>A shot of espresso in steamed milk lightly topped with foam.</p>
          </div>
        </div>
      </div>

      <div class="key">
        <div class="circle espresso">
          <p class="small">espresso</p>
        </div>
        <div class="circle milk">
          <p class="small">steamed milk</p>
        </div>
        <div class="circle foam">
          <p class="small">milk foam</p>
        </div>
        <div class="circle water">
          <p class="small">water</p>
        </div>
      </div>
    </div>
  );
}
