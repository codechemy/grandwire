import "./Accoutcard.scss";
import Logo from "../../assets/img/person_placeholder.png";
import placeholder from "../../assets/img/image_placeholder.png";
const Accountcard = ({ name, isAccount }: { name: string, isAccount:boolean }) => {
    const image = isAccount ? Logo : placeholder
  return (
    <div
      className="rounded-border-account px-3 py-5 mt-4
    d-flex flex-column justify-content-center align-items-center"
    >
      <img src={image} alt="profileimg" width={48} />
      <p className="fw-bold mt-3">{name}</p>
      <p className="fw-light">lorem ipsum dolar ismat</p>
    </div>
  );
};

export default Accountcard;
