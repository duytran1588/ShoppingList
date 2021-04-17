import React, { Component } from "react";




class Glass extends Component {
  render() {
    const {glass, handleChangeGlass} = this.props;
    return (
      <div className="col-3">
        <button className="btn btn-outline-secondary" onClick={() => {
            handleChangeGlass(glass.type)
        }}>
          <img
            src={glass.url}
            alt="hinh"
            style={{ width: 100, borderRadius: 20 }}
          />
        </button>
      </div>
    );
  }
}

export default Glass;
