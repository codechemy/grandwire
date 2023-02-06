import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/img/main_logo.png.png";
import Profile from "../../assets/img/person_placeholder.png";
import { HiEnvelope } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import bellicon from "../../assets/img/bell.png";
import msg from "../../assets/img/message.png";

const data = [
  {
    name: "Dashboard",
    path: "/home",
  },
  {
    name: "All Channels",
    path: "/allChannels",
  },
  {
    name: "My Feed",
    path: "#",
  },
  {
    name: "Forum",
    path: "#",
  },
  {
    name: "Invite Friends",
    path: "#",
  },
  {
    name: "My Users",
    path: "#",
  },
];

function Header() {
  let navigate = useNavigate();
  const handleNavigate = (e: string) => {
    console.log(e);
    navigate(e);
  };
  return (
    <Navbar bg="light" expand="lg" className="main-header">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <img src={Logo} alt="logo" className="img-fluid header-logo" />
          <span>GrandWire</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="gap-2">
            {data.map((e, i) => (
              <Nav.Link
                href="#"
                onClick={() => handleNavigate(e.path)}
                key={i}
                className="text-uppercase link-text"
              >
                {e.name}
              </Nav.Link>
            ))}
            <div className="d-none d-lg-flex align-items-center -mt-1 gap-2">
              <Nav.Link>
                <img src={msg} />
              </Nav.Link>
              <Nav.Link>
                <img src={bellicon} />
              </Nav.Link>
              <img
                src={Profile}
                alt="logo"
                className="img-fluid header-profile"
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
