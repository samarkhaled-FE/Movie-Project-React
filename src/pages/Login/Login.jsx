import { useNavigate } from "react-router-dom";
import { signInWithEmail, logInWithGoogle } from "../../Auth/Auth";
import Input from "../../components/FormInputs/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const formProperties = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = formProperties;
  //-----------------------------------------

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  //---------------form-Handler --------------------
  const submitHandler = async (data) => {
    async function registerUser() {
      const { email, password } = data;
      const { error } = await signInWithEmail(email, password);
      if (error) {
        return { error: error.message };
      }
      reset();
      goToHome();
      return { error: null };
    }
    await new Promise((resolve, reject) =>
      setTimeout(async () => {
        const { error } = await registerUser();
        if (!error) {
          resolve();
        } else {
          reject(error);
        }
      }, 1000)
    ).catch((error) => {
      alert(`Registration failed: ${error}`);
    });
  };

  return (
    <div className="w-75 m-auto py-5  d-flex flex-column gap-5">
      <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            formProperties={formProperties}
            type="mail"
            name="email"
            placeholder="email"
            required
            validate={{
              pattern: /\w+@[a-z]+\.[a-zA-Z]{2,}/,
              msg: "invalid mail",
            }}
          />
          <Input
            formProperties={formProperties}
            type="passowrd"
            name="password"
            placeholder="password"
            required
            validate={{
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              msg: "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character",
            }}
          />
          <button className="btn btn-warning my-3 float-end">Login</button>
        </form>
      </div>
      <div className="text-center d-flex flex-column  align-items-center gap-2 text-capitalize ">
        <span>or sign up using</span>
        <FcGoogle className="fs-1 cursor-pointer" onClick={logInWithGoogle} />
      </div>
      <div className="text-center">
        <span>Don&apos;t have an account? </span>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
