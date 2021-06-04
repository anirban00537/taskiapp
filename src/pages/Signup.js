import "./Auth.css";
import AuthImg from "./window.png";
const Signup = () => {
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
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="exampleInputName" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn  authBtn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Signup;
