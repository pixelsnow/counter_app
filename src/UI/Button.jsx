import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.click}
    >
      {props.children} {/* needed to use the text inside */}
    </button>
  );
};

export default Button;
