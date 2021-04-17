import React, { Component } from 'react';

class BtnColor extends Component {

    render() {
        const {iconSrc, handleChangeColor, iconColor} = this.props;
        return (
            <button className="btn" onClick={() => {
                handleChangeColor(iconColor)
            }}>
              <img
                src={iconSrc}
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
        );
    }
}

export default BtnColor;