import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/jquery/dist/jquery.slim";
import "../node_modules/popper.js/dist/popper";
import ShowRoomCar from './components/ShowRoomCar';
import GlassStore from './components/changeGlass/GlassStore';
import BaiTapGioHang from './components/BaiTapGioHang/BaiTapGioHang';


function App() {
  return (
    <div className="App">
      {/* <ShowRoomCar/> */}
      {/* <GlassStore/> */}
      <BaiTapGioHang/>
    </div>
  );
}

export default App;
