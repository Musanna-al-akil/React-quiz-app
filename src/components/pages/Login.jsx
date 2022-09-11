import loginImage from "../../assets/images/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration image={loginImage} />
        <Form className={classes.login}>
          <TextInput
            icon="alternate_email"
            type="text"
            placeholder="Enter email"
          />
          <TextInput icon="lock" type="password" placeholder="Enter Password" />
          <Button>
            <span>Submit now</span>
          </Button>
          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
