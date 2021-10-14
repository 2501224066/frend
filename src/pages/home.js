import { Component } from "react";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import { Swiper } from "antd-mobile";

const items = [banner1, banner2].map((img, index) => (
  <Swiper.Item key={index}>
    <img src={img} alt="img"></img>
  </Swiper.Item>
));

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="banner">
          <Swiper autoplay={true} allowTouchMove={true}>
            {items}
          </Swiper>
        </div>

        <div className="checkout">
          <div className="card">man</div>
          <div className="card">woman</div>
        </div>
      </div>
    );
  }
}

export default Home;
