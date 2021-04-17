import React, { Component } from "react";
// import SanPhamTrongGioHang from "./SanPhamTrongGioHang";

class DanhSachGioHang extends Component {
  render() {
    const { handleXoaSanPham, cacSanPhamDuocChon, handleTangGiamSoLuong } = this.props;
    
    return (
      <div>
        <div
          class="modal fade"
          id="modelId"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            class="modal-dialog"
            style={{ maxWidth: "800px" }}
            role="document"
          >
            <div class="modal-content" style={{ width: "800px" }}>
              <div class="modal-header">
                <h5 class="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cacSanPhamDuocChon.map((sanPham, index) => {
                      let thanhTien = sanPham.giaBan * sanPham.soLuong;
                      return (
                        <tr>
                          <td>{sanPham.maSP}</td>
                          <td>{sanPham.tenSP}</td>
                          <td>
                            <img src={sanPham.hinhAnh} width={40} height={40} />
                          </td>
                          <td>
                              <a onClick={() => {
                                handleTangGiamSoLuong(sanPham, false)
                              }} className="mr-3">-</a>
                              {sanPham.soLuong}
                              <a onClick={() => {
                                handleTangGiamSoLuong(sanPham, true)
                              }} className="ml-3">+</a>
                          </td>
                          <td>{sanPham.giaBan.toLocaleString()}</td>
                          <td>
                           {thanhTien.toLocaleString()}
                          </td>
                          <td>
                              <button onClick={() => {
                                handleXoaSanPham(sanPham)
                              }} className="btn btn-danger">Xóa</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5" className="text-right">
                        Tổng tiền 
                      </td>
                      <td>
                         {(cacSanPhamDuocChon.reduce((tongTien, sanPham) => {
                            return tongTien += sanPham.soLuong * sanPham.giaBan;
                         },0)).toLocaleString()}

                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DanhSachGioHang;
