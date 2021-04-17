import React, { Component } from "react";
import phoneData from "../../data/phonedata.json";
import DanhSachGioHang from "./DanhSachGioHang";
import SanPham from "./SanPham";
// import SanPhamTrongGioHang from "./SanPhamTrongGioHang";

class BaiTapGioHang extends Component {

  state = {
    phoneDetail: phoneData[0],
    listGioHang: [],
  }

  renderDanhSachSanPham = () => {
    return phoneData.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham handlleThemGioHang={this.handleThemGioHang} handleSanPhamChiTiet={this.handleSanPhamChitiet} phone={phone} />
        </div>
      );
    });
  };

  handleXoaSanPham = (sanPham) => {
    let danhSachGioHang = [...this.state.listGioHang];
    let gioHangCapNhat = danhSachGioHang.filter((phone) => {
      return phone.maSP !== sanPham.maSP;
    });
    this.setState({
      listGioHang: gioHangCapNhat,
    })
  }

  handleSanPhamChitiet = (sanPham) => {
      //dùng hàm findIndex để tìm sp có maSP trùng tham số
    //   let index = phoneData.findIndex((sp) => {
    //     return sp.maSP === maSP;
    //   });
    //   console.log(index);
    //   console.log(phoneData[index]);
    //   if(index !== -1){
    // this.setState({
    //     phoneDetail: phoneData[index],
    // })
    //   }
    this.setState({
        phoneDetail: sanPham,
    })
  }

  //tăng giảm số lượng
  handleTangGiamSoLuong = (sanPham, tangGiam) => {
    let danhSachGioHang = [...this.state.listGioHang];
    let index = danhSachGioHang.findIndex((phone) => {
      return phone.maSP === sanPham.maSP;
    })
    if(tangGiam){
      danhSachGioHang[index].soLuong++;
    }
    else{
      if(danhSachGioHang[index].soLuong > 1){
        danhSachGioHang[index].soLuong--;
      }
    }
    this.setState({
      listGioHang: danhSachGioHang,
    })
  }

  handleThemGioHang = (sanPham) => {
    let danhSachGioHang = [...this.state.listGioHang];
    
    let index = danhSachGioHang.findIndex((sp) => {
        return sp.maSP === sanPham.maSP;
    });
    if (index !== -1){
      danhSachGioHang[index].soLuong++;
    }
    else{
      danhSachGioHang = [...danhSachGioHang, sanPham];
    }
    this.setState({
      listGioHang: danhSachGioHang,
    })
    
  }

  render() {
    return (
      <div className="container">
        <h3>Bài tập giỏ hàng</h3>
        <div className="text-right">
          <button className="btn btn-danger mt-5" data-toggle="modal" data-target="#modelId">Giỏ hàng ({
            this.state.listGioHang.reduce((tongsoLuong, sanPham) => {
               return tongsoLuong += sanPham.soLuong
            }, 0)
          })</button>
        </div>
        <div className="row mt-5">{this.renderDanhSachSanPham()}</div>

        {/* tạo bảng sản phẩm chi tiết  */}
        <div className="row mt-5">
          <div className="col-4">
            <img src={this.state.phoneDetail.hinhAnh} width={350} height={380} />
          </div>
          <di className="col-6">
            <table className="table text-left">
              <thead>
                <tr>
                  <th style={{ fontSize: "25px" }}>Thông số kỹ thuật</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Màn Hình</td>
                  <td>{this.state.phoneDetail.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.state.phoneDetail.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{this.state.phoneDetail.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.state.phoneDetail.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{this.state.phoneDetail.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{this.state.phoneDetail.rom}</td>
                </tr>
              </tbody>
            </table>
          </di>
        </div>

        <DanhSachGioHang handleXoaSanPham={this.handleXoaSanPham} handleTangGiamSoLuong={this.handleTangGiamSoLuong} cacSanPhamDuocChon={this.state.listGioHang}/>
       
        
      
      </div>
    );
  }
}

export default BaiTapGioHang;
