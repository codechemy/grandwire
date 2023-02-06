import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Carouselcustom from "../../components/carouselcustom/Carouselcustom";
import Accountcard from "../../components/accountcard/Accountcard";
import placeholder from "../../assets/img/image_placeholder.png";
import aboutusimg from "../../assets/img/aboutus_img.png";
import carouselimg from "../../assets/img/main_logo.png.png";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid mt-5">
      <div className="px-5">
        <Carousel prevIcon={<span></span>} nextIcon={<span></span>}>
          <Carousel.Item>
            <div className="container-fluid rounded-border-noshadow px-3 py-5 d-flex flex-wrap justify-content-around align-items-center">
              <section>
                <h1>You are in safe hands</h1>
                <p>Choose the servies in End-to-End services</p>
                <Button style={{backgroundColor: '#0067a7'}}>KNOW MORE</Button>
              </section>
              <section className="carouselimg">
                <img src={carouselimg} alt="carouselimg" />
              </section>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container-fluid rounded-border-noshadow px-3 py-5 d-flex flex-wrap justify-content-around align-items-center">
              <section>
                <h1>You are in safe hands</h1>
                <p>Choose the servies in End-to-End services</p>
                <Button style={{backgroundColor: '#0067a7'}}>KNOW MORE</Button>
              </section>
              <section className="carouselimg">
                <img src={carouselimg} alt="carouselimg" />
              </section>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center mt-4 mb-5 px-5">
        <section className="d-flex justify-content-center align-items-center p-4 rounded-border-service mt-4 w-20">
          <img src={placeholder} alt="placeholder" width={56} className="rounded-3" />
          <div className="ms-3 mt-2">
            <p className="mb-0 fw-bold">5,670</p>
            <p>Service providers</p>
          </div>
        </section>
        <section className="d-flex justify-content-center align-items-center p-4 rounded-border-service mt-4 w-20">
          <img src={placeholder} alt="placeholder" width={56} className="rounded-3"/>
          <div className="ms-3 mt-2">
            <p className="mb-0 fw-bold">46</p>
            <p>Service channels</p>
          </div>
        </section>
        <section className="d-flex justify-content-center align-items-center p-4 rounded-border-service mt-4 w-20">
          <img src={placeholder} alt="placeholder" width={56} className="rounded-3"/>
          <div className="ms-3 mt-2">
            <p className="mb-0 fw-bold">350</p>
            <p>Accesible services</p>
          </div>
        </section>
        <section className="d-flex justify-content-center align-items-center p-4 rounded-border-service mt-4 w-20">
          <img src={placeholder} alt="placeholder" width={56} className="rounded-3"/>
          <div className="ms-3 mt-2">
            <p className="mb-0 fw-bold">1,200</p>
            <p>Searches monthly</p>
          </div>
        </section>
      </div>
      <div className="py-5 carouselcontainer">
        <Carouselcustom />
        <div
          onClick={() => navigate("allChannels")}
          className="text-center mt-5"
        >
          <Button style={{backgroundColor: '#0067a7'}}>VIEW ALL</Button>
        </div>
      </div>
      <div className="p-5">
        <p className="fw-bolder fs-2">Most Popular Sub Accounts</p>
        <p className="mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center">
          <Accountcard isAccount={true} name="Frank N.Stein" />
          <Accountcard isAccount={true} name="Karen Onnabit" />
          <Accountcard isAccount={true} name="Simon Sais" />
          <Accountcard isAccount={true} name="Chris Anthemum" />
          <Accountcard isAccount={true} name="Bes Twishes" />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center px-5 aboutus">
        <section>
          <p className="fw-bold">About us</p>
          <p className="fs-1 fw-bold mb-0">A Wealth of Experience</p>
          <p className="fs-1 fw-bold">to Help You</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            exercitationem deserunt ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            officia eligendi voluptas.
          </p>
          <Button style={{backgroundColor: '#0067a7'}} className="mt-2">REQUEST FOR SERVICE NOW!</Button>
        </section>
        <section>
          <img src={aboutusimg} alt="aboutusimg" className="aboutusimage" />
        </section>
      </div>
      <div className="p-5">
        <div className="d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center">
          <Accountcard isAccount={false} name="Instant video consultation" />
          <Accountcard isAccount={false} name="Service providers near you" />
          <Accountcard isAccount={false} name="Medicines" />
          <Accountcard isAccount={false} name="Car wash services" />
          <Accountcard isAccount={false} name="Gardening" />
        </div>
      </div>
    </div>
  );
};

export default Home;
