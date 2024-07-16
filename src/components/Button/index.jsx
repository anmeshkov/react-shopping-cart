/* ----------------------------------------------------------------
  Button Component
---------------------------------------------------------------- */
import "./style.scss";

const Buttom = ({title, onClick}) => {
  return (
    <section className="button-wrapper">
      <button onClick={onClick} className="button">{title}</button>
    </section>
  );
};

export default Buttom;
