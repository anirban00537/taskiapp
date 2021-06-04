import "./Auth.css";
import { useState } from "react";
import AuthImg from "./login.png";
import { userSigninAction } from "../state/action/AuthAction";
import { useDispatch } from "react-redux";
const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignin = () => {
    dispatch(userSigninAction({ email: email, password: password }));
  };
  return (
    <div className="signin">
      <div className="signinForm">
        <img src={AuthImg} className="authImg" />
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            value={password}
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button onClick={handleSignin} class="btn  authBtn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Signin;
