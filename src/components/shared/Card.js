import Style from "./Card.module.css";
const Card = (props) => {
  return <div className={Style["card__wrapper"]}>{props.children}</div>;
};

export default Card;
