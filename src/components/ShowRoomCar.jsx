import React, { Component } from "react";
import BtnColor from "./BtnColor";

class ShowRoomCar extends Component {
  iconList = [
    { src: "./img/car/icons/icon-black.jpg",
      color: "black",
    },
    { src: "./img/car/icons/icon-red.jpg",
      color: "red",
    },
    { src: "./img/car/icons/icon-silver.jpg",
      color: "silver",
    },
    { src: "./img/car/icons/icon-steel.jpg",
      color: "steel",
    },
  ];

  state = {
    carSrc: "./img/car/products/black-car.jpg",
  };

  //xây dựng phương thức handleOnclick cho button
  handleChangeColorCar = (color) => {
    let url = "";
    switch (color) {
      case "black":
        url = "./img/car/products/black-car.jpg";
        break;
      case "red":
        url = "./img/car/products/red-car.jpg";
        break;
      case "steel":
        url = "./img/car/products/steel-car.jpg";
        break;
      default:
        url = "./img/car/products/silver-car.jpg";
        break;
    }
    this.setState({
        carSrc: url,
    })
  };

  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            {/* render nút button  */}
            {this.iconList.map((icon, index) => {
              return <BtnColor handleChangeColor={this.handleChangeColorCar} key={index} iconColor={icon.color} iconSrc={icon.src} />;
            })}
          </div>
          <div className="car mt-2">
            <img
              className="img-thumbnail"
              src={this.state.carSrc}
              alt="hinh"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ShowRoomCar;
