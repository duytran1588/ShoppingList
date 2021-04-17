import React, { Component } from "react";

class SanPham extends Component {
  render() {
    const { phone, handlleThemGioHang, handleSanPhamChiTiet } = this.props;
    return (
      <div className="card">
        <img src={phone.hinhAnh} height={350} alt={true} />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <button onClick={() => {handleSanPhamChiTiet(phone)}} className="btn mr-3 btn-success">Chi tiết</button>
          <button onClick={() => {handlleThemGioHang(phone)}} className="btn btn-danger">Thêm vào giỏ hàng</button>
        </div>
      </div>
    );
  }
}

export default SanPham;
