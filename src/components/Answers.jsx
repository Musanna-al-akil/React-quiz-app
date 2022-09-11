import classes from "../styles/Answers.module.css";
import CheckBox from "./CheckBox";
export default function Answers() {
  return (
    <div className={classes.Answers}>
      <CheckBox className={classes.answer}  text="test answer"/>
    </div>
  );
}
