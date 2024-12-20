import { useNavigate } from "react-router-dom";
import { registerMail } from "../../Auth/Auth";
import { useForm } from "react-hook-form";
import Input from "../../components/FormInputs/Input";

export default function Register() {
  const formProperties = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = formProperties;

  //---------------Initialize useNavigate----------
  const navigate = useNavigate();

  //---------------form-Handler --------------------
  const submitHandler = async (data) => {
    async function registerUser() {
      const { email, password } = data;
      const { error } = await registerMail(email, password);
      if (error) {
        return { error: error.message };
      }
      navigate("/login");
      reset();
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
  //---------------------------------------
  return (
    <div className="w-75 m-auto py-5">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          formProperties={formProperties}
          type="text"
          name="first name"
          placeholder="first Name"
          required
          validate={{ pattern: /^[a-zA-Z]+$/, msg: "invalid name" }}
        />
        <Input
          formProperties={formProperties}
          type="text"
          name="last name"
          placeholder="last Name"
          required
          validate={{ pattern: /^[a-zA-Z]+$/, msg: "invalid name" }}
        />

        <Input
          formProperties={formProperties}
          type="number"
          name="age"
          placeholder="age"
          required
          validate={{ pattern: /^[0-9]+$/, msg: "Invalid age" }}
          min={18}
        />

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
          type="password"
          name="password"
          placeholder="password"
          required
          validate={{
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            msg: "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character",
          }}
        />

        <button className="btn btn-warning my-3 float-end">
          {isSubmitting ? "Waiting ....." : "Register"}
        </button>
      </form>
    </div>
  );
}
