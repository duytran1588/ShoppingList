import React, { Component } from "react";
import Glass from "./Glass";

class GlassStore extends Component {
  glassList = [
    { type: "1", url: "./img/glassesImage/v1.png" },
    { type: "2", url: "./img/glassesImage/v2.png" },
    { type: "3", url: "./img/glassesImage/v3.png" },
    { type: "4", url: "./img/glassesImage/v4.png" },
    { type: "5", url: "./img/glassesImage/v5.png" },
    { type: "6", url: "./img/glassesImage/v6.png" },
    { type: "7", url: "./img/glassesImage/v7.png" },
    { type: "8", url: "./img/glassesImage/v8.png" },
    { type: "9", url: "./img/glassesImage/v9.png" },
  ];

  state = {
    glassSrc: "./img/glassesImage/v6.png",
  };

  handleChangeGlass = (type) => {
    let glassTypeSrc = "";
    switch (type) {
      case "1":
        glassTypeSrc = "./img/glassesImage/v1.png";
        break;
      case "2":
        glassTypeSrc = "./img/glassesImage/v2.png";
        break;
      case "3":
        glassTypeSrc = "./img/glassesImage/v3.png";
        break;
      case "4":
        glassTypeSrc = "./img/glassesImage/v4.png";
        break;
      case "5":
        glassTypeSrc = "./img/glassesImage/v5.png";
        break;
      case "6":
        glassTypeSrc = "./img/glassesImage/v6.png";
        break;
      case "7":
        glassTypeSrc = "./img/glassesImage/v7.png";
        break;
      case "8":
        glassTypeSrc = "./img/glassesImage/v8.png";
        break;
      case "9":
        glassTypeSrc = "./img/glassesImage/v9.png";
        break;
    }
    this.setState({
        glassSrc: glassTypeSrc,
    })
  };

  render() {
    return (
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
            <section className="model d-flex justify-content-center col-5">
              <div
                className="card text-left"
                style={{ width: 300, position: "relative" }}
              >
                <img
                  className="card-img-top"
                  src="./img/glassesImage/model.jpg"
                  alt="hinh model"
                />
                <img
                  src={this.state.glassSrc}
                  alt="kinh"
                  style={{
                    width: 170,
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "16%",
                  }}
                />
                <div className="card-body">
                  <span className="card-title badge-danger h3 px-2 rounded">
                    $30
                  </span>
                  <p className="card-text mt-2">PRADA P9700</p>
                </div>
              </div>
            </section>
            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
              {this.glassList.map((glass, index) => {
                return <Glass key={index} glass={glass} handleChangeGlass={this.handleChangeGlass}/>;
              })}
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default GlassStore;
