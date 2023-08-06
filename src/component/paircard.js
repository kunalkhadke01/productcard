import React, { useState, useRef } from "react";
import "../assest/pairCard.css";

export default function Pair({ cardData }) {
  const [toggle, settoggle] = useState({});
  const handlechange = (e, id) => {
    settoggle({ checked: e.target.checked, id: id });
  };
  return (
    <main>
      <header className="heading">
        <p className="line"></p>
        <p className="headline">Bundle & Save</p>
        <p className="line"></p>
      </header>
      {cardData.map((val, i) => {
        return (
          <section
            className="card1"
            style={
              toggle.checked && toggle.id == val.productid
                ? { backgroundColor: "#c6ebe2" }
                : {}
            }
          >
            <div>
              <input
                type="radio"
                name="radio"
                onChange={(e) => handlechange(e, val.productid)}
              />
            </div>

            <div>
              <p> {val.products} Pair</p>
              <h5> DKK {val.prize}</h5>
              {toggle.checked && toggle.id == val.productid ? (
                <div>
                  <table>
                    <tr>
                      <td></td>
                      <td>Size</td>
                      <td>Colors</td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>
                        <select name="select" id="select">
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      </td>
                      <td>
                        <select name="select" id="select">
                          <option value="red">red</option>
                          <option value="green">green</option>
                          <option value="yellow">yellow</option>
                          <option value="vio">vio</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>#2</td>
                      <td>
                        <select name="select" id="select">
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      </td>
                      <td>
                        <select name="select" id="select">
                          <option value="red">red</option>
                          <option value="green">green</option>
                          <option value="yellow">yellow</option>
                          <option value="vio">vio</option>
                        </select>
                      </td>
                    </tr>
                  </table>
                </div>
              ) : (
                ""
              )}
            </div>

            <div>
              {val.popular ? <h5>Most Popular</h5> : ""}
              <h5>{val.offer} off</h5>
            </div>
          </section>
        );
      })}
    </main>
  );
}
