import { Card } from "react-bootstrap";
import Slider from "react-slick";
import profileimg from "../../assets/img/profile_small.png";
import "./Carouselcustom.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carouselcard = ({ title }: { title: string }) => {
  return (
    <Card className="mx-4 rounded-border position-relative">
      <div className="card-header">
        <section className="d-flex align-items-center">
          <img src={profileimg} alt="profileimg" width={24} />
          <p className="ms-2 mt-3">220+</p>
        </section>
      </div>
      <Card.Body className="px-3 pb-0">
        <p className="fw-bold mb-3">{title}</p>
        <p className="mb-0">Services:</p>
        <p className="fw-light">cleaning, baby sitting, Admin</p>
      </Card.Body>
    </Card>
  );
};

const Carouselcustom = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-5">
      <Slider {...settings}>
        <Carouselcard title="Home gardening"/>
        <Carouselcard title="Gardening"/>
        <Carouselcard title="Care taker"/>
        <Carouselcard title="Home gardening"/>
        <Carouselcard title="Gardening"/>
        <Carouselcard title="Care taker"/>
      </Slider>
    </div>
  );
};

export default Carouselcustom;