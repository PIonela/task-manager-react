import "./Button.css";

const Button = (props) => {
  console.log(props);
  return (
    <button
      className="primary-btn"
      type={props.type}
      onClick={props.onClickFunction}
      disabled={props.isValid === undefined ? false : !props.isValid} //daca nu este setat prop-ul isValid atunci disabled=false
    >
      {props.textBtn}
    </button>
  );
};

export default Button;
